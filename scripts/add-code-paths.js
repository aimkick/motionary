const fs = require('fs');
const path = require('path');

const PAGE_PATH = path.join(process.cwd(), 'src/app/page.tsx');
const COMPONENT_DIR = path.join(process.cwd(), 'src/components/motionary');

// 1. Build a map of "ImportName" -> "RelativePath"
// We need to parse page.tsx to find imports.
const pageContent = fs.readFileSync(PAGE_PATH, 'utf-8');

const importMap = {};
const importRegex = /import\s+(?:(\* as \w+)|(\{[\s\S]*?\}))?\s*from\s+['"]@\/components\/motionary\/([^'"]+)['"];/g;

let match;
while ((match = importRegex.exec(pageContent)) !== null) {
    const fullMatch = match[0];
    const namespaceImport = match[1]; // e.g. "* as Buttons"
    const namedImports = match[2];    // e.g. "{ MagneticButton, LiquidButton }"
    const importPath = match[3];      // e.g. "atomic/ButtonVariants"

    // Normalize import path (ensure it ends with .tsx or check file existence)
    // For the 'codePath' prop, we want the path relative to 'src/components/motionary/'
    // The import path in page.tsx is already relative to '@/components/motionary/' which is what we want (mostly)
    
    if (namespaceImport) {
        const name = namespaceImport.replace('* as ', '').trim();
        importMap[name] = importPath; // Buttons -> atomic/ButtonVariants
    } else if (namedImports) {
        // Clean up { ... }
        const imports = namedImports.replace(/[{}]/g, '').split(',').map(s => s.trim()).filter(Boolean);
        imports.forEach(imp => {
            importMap[imp] = importPath;
        });
    }
}

// Also add individual default exports if any (e.g. MagneticButton might be default export)
// In the file provided: import { MagneticButton } ... implies named export?
// Let's look at page.tsx read result from earlier.
// "import { MagneticButton } from ..." 
// Actually wait, looking at previous read_file output of page.tsx:
// import { MagneticButton } from "@/components/motionary/atomic/MagneticButton";
// This matches the regex.

console.log('Import Map:', importMap);

// 2. Replace PlaygroundCard usage
// Regex to find <PlaygroundCard ...>Child</PlaygroundCard>
// We need to capture the child component name to look it up in importMap.

// Pattern: <PlaygroundCard (attrs)> <(Namespace.)?Component ... /> </PlaygroundCard>
// This is tricky with regex because of multiline and nested tags.
// However, looking at page.tsx, it's quite structured:
// <PlaygroundCard title="..." trigger="...">
//    <Child />
// </PlaygroundCard>
// OR <PlaygroundCard ...><Child /></PlaygroundCard> (inline)

// Let's try a simpler approach: Iterate line by line or use a slightly more complex regex.
// Most lines are like: <PlaygroundCard title="Magnetic" trigger="Hover"><MagneticButton /></PlaygroundCard>
// Or split across lines.

let newPageContent = pageContent;

// We will use a regex that matches the opening tag of PlaygroundCard, and tries to find the component inside.
// CAUTION: Regex for HTML parsing is fragile. But this file is generated/consistent.

const cardRegex = /(<PlaygroundCard\s+[^>]*?title="([^"]*)"[^>]*?)(\s*>)([\s\S]*?)(<\/PlaygroundCard>)/g;

newPageContent = newPageContent.replace(cardRegex, (fullMatch, openTag, title, closeBracket, content, closeTag) => {
    // Check if codePath is already there
    if (openTag.includes('codePath=')) return fullMatch;

    // Try to find component name in content
    // Content might be <MagneticButton /> or <Buttons.NeonButton /> or <div ...><InputVars.FloatingLabelInput /></div>
    
    let componentName = null;
    let namespace = null;

    // Check for <Namespace.Component />
    const namespacedMatch = /<(\w+)\.(\w+)/.exec(content);
    if (namespacedMatch) {
        namespace = namespacedMatch[1]; // Buttons
        // componentName = namespacedMatch[2]; // NeonButton (not needed for file lookup if we have namespace map)
    }

    // Check for <Component />
    const simpleMatch = /<(\w+)\s/.exec(content) || /<(\w+)\/>/.exec(content);
    if (simpleMatch && !namespace) {
        componentName = simpleMatch[1];
    }

    // Resolve Path
    let codePath = null;

    if (namespace && importMap[namespace]) {
        codePath = importMap[namespace];
    } else if (componentName && importMap[componentName]) {
        codePath = importMap[componentName];
    }

    if (codePath) {
        // Add .tsx extension if missing, though usually imports don't have it. 
        // We want the prop to be usable for fetching.
        // The importPath from regex was "atomic/MagneticButton".
        
        return `${openTag} codePath="${codePath}"${closeBracket}${content}${closeTag}`;
    }

    return fullMatch;
});

fs.writeFileSync(PAGE_PATH, newPageContent);
console.log('Updated page.tsx with codePath props');

