# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Motionary seriously. If you discover a security vulnerability, please follow these steps:

### 1. Do NOT Open a Public Issue

Please do not create a public GitHub issue for security vulnerabilities.

### 2. Report Privately

Send a detailed report to: **[your.email@example.com]**

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### 3. Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 5 business days
- **Fix Timeline**: Depends on severity
  - Critical: 1-3 days
  - High: 1-2 weeks
  - Medium: 2-4 weeks
  - Low: Next release cycle

### 4. Disclosure Process

1. Security issue is reported privately
2. We confirm the issue and determine severity
3. We develop and test a fix
4. We release a patched version
5. We publicly disclose the vulnerability (with credit to reporter, if desired)

## Security Best Practices

When using Motionary in production:

1. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm update
   ```

2. **Use Environment Variables**
   - Never commit sensitive data
   - Use `.env.local` for secrets

3. **Content Security Policy**
   - Configure proper CSP headers
   - Whitelist trusted sources

4. **Rate Limiting**
   - Implement rate limiting for production APIs
   - Prevent abuse of interactive features

## Known Security Considerations

### Client-Side Rendering
- All motion effects run client-side
- No server-side data processing
- User inputs are not stored or transmitted

### Third-Party Dependencies
We regularly audit:
- Framer Motion
- React Three Fiber
- GSAP
- Next.js

### Browser Security
- Animations use standard Web APIs
- No eval() or unsafe code execution
- Respects browser sandboxing

## Security Updates

Subscribe to security updates:
- Watch this repository
- Enable GitHub security alerts
- Follow release notes

## Acknowledgments

We appreciate responsible disclosure and will acknowledge security researchers (with permission) in:
- Security advisories
- Release notes
- CONTRIBUTORS.md

Thank you for helping keep Motionary secure! 🔒

