'use client';

import { PlaygroundCard } from "@/components/system/PlaygroundCard";
import { useFilterStore } from "@/store/useFilterStore";
import { ParticleCanvas } from "@/components/motionary/advanced/ParticleCanvas";

// --- IMPORTS ---
import { MagneticButton } from "@/components/motionary/atomic/MagneticButton";
import { LiquidButton } from "@/components/motionary/atomic/LiquidButton";
import { JellyButton } from "@/components/motionary/atomic/JellyButton";
import { KineticText } from "@/components/motionary/atomic/KineticText";
import { FloatingInput } from "@/components/motionary/atomic/FloatingInput";
import { ShakeInput } from "@/components/motionary/atomic/ShakeInput";
import { SwipeToDelete } from "@/components/motionary/mobile/SwipeToDelete";

import * as Buttons from "@/components/motionary/atomic/ButtonVariants";
import * as Text from "@/components/motionary/atomic/TextVariants";
import * as Cards from "@/components/motionary/atomic/CardVariants";
import * as Nav from "@/components/motionary/atomic/NavVariants";
import * as InputVars from "@/components/motionary/atomic/InputVariants";
import * as Loaders from "@/components/motionary/atomic/LoaderVariants";
import * as Images from "@/components/motionary/atomic/ImageVariants";
import * as Micro from "@/components/motionary/atomic/MicroVariants";
import * as Backgrounds from "@/components/motionary/atomic/BackgroundVariants";
import * as Data from "@/components/motionary/atomic/DataVariants";
import * as Feedback from "@/components/motionary/atomic/FeedbackVariants";
import * as Social from "@/components/motionary/atomic/SocialVariants";
import * as Ecom from "@/components/motionary/atomic/EcommerceVariants";
import * as Game from "@/components/motionary/atomic/GameVariants";
import * as Transitions from "@/components/motionary/atomic/TransitionVariants";
import * as Media from "@/components/motionary/atomic/MediaVariants";
import * as Device from "@/components/motionary/atomic/DeviceVariants";
import { useBubbleSound } from "@/hooks/useBubbleSound";
import { Footer } from "@/components/system/Footer";

// Define a helper mapping for Element filter
const ELEMENT_MAP: Record<string, string> = {
  buttons: 'Button',
  cards: 'Card',
  typography: 'Text',
  navigation: 'Menu',
  backgrounds: 'Background',
  inputs: 'Input',
  loaders: 'Loader', // Custom mapping if filter has it
  // Others like data, feedback, social don't have direct 1:1 mapping in the current filter list (Button, Text, Card, Input, Menu, Background)
  // We will just show them if no element filter is active, or if they match roughly.
};

const FilteredSection = ({ id, children }: { id: string, children: React.ReactNode }) => {
  const { activeFilters } = useFilterStore();
  
  // If Element filter is active
  if (activeFilters.element) {
    // Check if this section matches the filter
    const mappedType = ELEMENT_MAP[id];
    if (mappedType !== activeFilters.element) {
      // If section doesn't match, hide it
      return null;
    }
  }
  
  return <section id={id}>{children}</section>;
};

export default function Home() {
  const { activeFilters } = useFilterStore();
  const playPop = useBubbleSound();
  
  return (
    <div className="space-y-24 pb-32" onMouseEnter={playPop}>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-black group shadow-2xl shadow-primary/5">
         <div className="absolute inset-0 z-0">
            <ParticleCanvas />
         </div>
         <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none text-center p-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-white/70">SYSTEM ONLINE • 500+ VARIANTS</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6 mix-blend-overlay">
                MOTIONARY
            </h1>
            <p className="max-w-xl text-white/60 font-mono text-xs md:text-sm leading-relaxed">
                THE ULTIMATE INTERACTIVE ENCYCLOPEDIA OF MOTION DESIGN <br />
                <span className="text-primary">&gt;&gt;&gt; INITIALIZING SEQUENCE...</span>
            </p>
         </div>
      </section>

      {/* --- 01. BUTTONS --- */}
      <FilteredSection id="buttons">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">01.</span>Buttons</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <PlaygroundCard title="Magnetic" trigger="Hover" codePath="atomic/MagneticButton"><MagneticButton /></PlaygroundCard>
          <PlaygroundCard title="Liquid" trigger="Hover" codePath="atomic/LiquidButton"><LiquidButton /></PlaygroundCard>
          <PlaygroundCard title="Jelly" trigger="Click" codePath="atomic/JellyButton"><JellyButton /></PlaygroundCard>
          <PlaygroundCard title="Neon" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.NeonButton /></PlaygroundCard>
          <PlaygroundCard title="Glitch" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.GlitchButton /></PlaygroundCard>
          <PlaygroundCard title="Cyberpunk" trigger="Static" codePath="atomic/ButtonVariants"><Buttons.CyberButton /></PlaygroundCard>
          <PlaygroundCard title="Spotlight" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.SpotLightButton /></PlaygroundCard>
          <PlaygroundCard title="Elastic" trigger="Tap" codePath="atomic/ButtonVariants"><Buttons.ElasticButton /></PlaygroundCard>
          <PlaygroundCard title="Shimmer" trigger="Loop" codePath="atomic/ButtonVariants"><Buttons.ShimmerButton /></PlaygroundCard>
          <PlaygroundCard title="Blob" trigger="Loop" codePath="atomic/ButtonVariants"><Buttons.BlobButton /></PlaygroundCard>
          <PlaygroundCard title="Ghost" trigger="Hover" codePath="atomic/ButtonVariants"><Buttons.GhostButton /></PlaygroundCard>
          <PlaygroundCard title="Send" trigger="Click" codePath="atomic/ButtonVariants"><Buttons.SendButton /></PlaygroundCard>
          <PlaygroundCard title="3D Tilt" trigger="Mouse" codePath="atomic/ButtonVariants"><Buttons.TiltButton /></PlaygroundCard>
        </div>
      </FilteredSection>

      {/* --- 02. CARDS --- */}
      <FilteredSection id="cards">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-secondary mr-4 font-mono text-2xl">02.</span>Cards</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <PlaygroundCard title="3D Flip" trigger="Hover" codePath="atomic/CardVariants"><Cards.FlipCard /></PlaygroundCard>
           <PlaygroundCard title="Glow Border" trigger="Hover" codePath="atomic/CardVariants"><Cards.GlowCard /></PlaygroundCard>
           <PlaygroundCard title="Parallax Tilt" trigger="Mouse" codePath="atomic/CardVariants"><Cards.TiltCard /></PlaygroundCard>
           <PlaygroundCard title="Slide Reveal" trigger="Hover" codePath="atomic/CardVariants"><Cards.RevealCard /></PlaygroundCard>
           <PlaygroundCard title="Glassmorphism" trigger="Static" codePath="atomic/CardVariants"><Cards.GlassCard /></PlaygroundCard>
           <PlaygroundCard title="Curtain Drop" trigger="Hover" codePath="atomic/CardVariants"><Cards.CurtainCard /></PlaygroundCard>
           <PlaygroundCard title="Stacking" trigger="Hover" codePath="atomic/CardVariants"><Cards.StackCard /></PlaygroundCard>
           <PlaygroundCard title="Pattern Slide" trigger="Hover" codePath="atomic/CardVariants"><Cards.PatternCard /></PlaygroundCard>
           <PlaygroundCard title="Border Beam" trigger="Loop" codePath="atomic/CardVariants"><Cards.BorderBeamCard /></PlaygroundCard>
           <PlaygroundCard title="Floating Icon" trigger="Hover" codePath="atomic/CardVariants"><Cards.FloatingIconCard /></PlaygroundCard>
           <PlaygroundCard title="Noise Texture" trigger="Hover" codePath="atomic/CardVariants"><Cards.NoiseCard /></PlaygroundCard>
           <PlaygroundCard title="Spotlight Gradient" trigger="Mouse" codePath="atomic/CardVariants"><Cards.SpotlightGradientCard /></PlaygroundCard>
           <PlaygroundCard title="Directional" trigger="Hover" codePath="atomic/CardVariants"><Cards.DirectionalCard /></PlaygroundCard>
           <PlaygroundCard title="Zoom Background" trigger="Hover" codePath="atomic/CardVariants"><Cards.ZoomBgCard /></PlaygroundCard>
           <PlaygroundCard title="Blob Morph" trigger="Loop" codePath="atomic/CardVariants"><Cards.BlobMorphCard /></PlaygroundCard>
           <PlaygroundCard title="Perspective Skew" trigger="Hover" codePath="atomic/CardVariants"><Cards.SkewCard /></PlaygroundCard>
           <PlaygroundCard title="Content Slide" trigger="Hover" codePath="atomic/CardVariants"><Cards.SlideUpCard /></PlaygroundCard>
           <PlaygroundCard title="Glitch Border" trigger="Hover" codePath="atomic/CardVariants"><Cards.GlitchBorderCard /></PlaygroundCard>
           <PlaygroundCard title="Magnetic Element" trigger="Hover" codePath="atomic/CardVariants"><Cards.MagneticElementCard /></PlaygroundCard>
           <PlaygroundCard title="Video Hover" trigger="Hover" codePath="atomic/CardVariants"><Cards.VideoHoverCard /></PlaygroundCard>
        </div>
      </FilteredSection>

      {/* --- 03. TYPOGRAPHY (RESTORED) --- */}
      <FilteredSection id="typography">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">03.</span>Typography</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Kinetic" trigger="Hover" codePath="atomic/KineticText"><KineticText /></PlaygroundCard>
            <PlaygroundCard title="Typewriter" trigger="Loop" codePath="atomic/TextVariants"><Text.TypewriterText /></PlaygroundCard>
            <PlaygroundCard title="Scramble" trigger="Hover" codePath="atomic/TextVariants"><Text.ScrambleText /></PlaygroundCard>
            <PlaygroundCard title="Gradient" trigger="Loop" codePath="atomic/TextVariants"><Text.GradientText /></PlaygroundCard>
            <PlaygroundCard title="Stagger" trigger="Hover" codePath="atomic/TextVariants"><Text.StaggerText /></PlaygroundCard>
            <PlaygroundCard title="Blur Reveal" trigger="Hover" codePath="atomic/TextVariants"><Text.BlurText /></PlaygroundCard>
            <PlaygroundCard title="Video Mask" trigger="Loop" codePath="atomic/TextVariants"><Text.VideoText /></PlaygroundCard>
            <PlaygroundCard title="Rotate 3D" trigger="Hover" codePath="atomic/TextVariants"><Text.RotateText /></PlaygroundCard>
            <PlaygroundCard title="Wavy" trigger="Loop" codePath="atomic/TextVariants"><Text.WavyText /></PlaygroundCard>
            <PlaygroundCard title="Glitch" trigger="Hover" codePath="atomic/TextVariants"><Text.GlitchTextEffect /></PlaygroundCard>
        </div>
      </FilteredSection>

       {/* --- 04. NAVIGATION (RESTORED) --- */}
      <FilteredSection id="navigation">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">04.</span>Navigation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Underline" trigger="Hover" codePath="atomic/NavVariants"><Nav.UnderlineNav /></PlaygroundCard>
            <PlaygroundCard title="Pill Toggle" trigger="Click" codePath="atomic/NavVariants"><Nav.PillNav /></PlaygroundCard>
            <PlaygroundCard title="Mac Dock" trigger="Hover" codePath="atomic/NavVariants"><Nav.DockMenu /></PlaygroundCard>
            <PlaygroundCard title="Sidebar Expand" trigger="Hover" codePath="atomic/NavVariants"><Nav.SidebarExpand /></PlaygroundCard>
            <PlaygroundCard title="Circular" trigger="Click" codePath="atomic/NavVariants"><Nav.CircularMenu /></PlaygroundCard>
            <PlaygroundCard title="Stagger Drop" trigger="Hover" codePath="atomic/NavVariants"><Nav.StaggerDropdown /></PlaygroundCard>
            <PlaygroundCard title="Tab Slide" trigger="Click" codePath="atomic/NavVariants"><Nav.TabIndicator /></PlaygroundCard>
            <PlaygroundCard title="Morph Burger" trigger="Click" codePath="atomic/NavVariants"><Nav.MorphingBurger /></PlaygroundCard>
            <PlaygroundCard title="Gooey" trigger="Click" codePath="atomic/NavVariants"><Nav.GooeyMenu /></PlaygroundCard>
            <PlaygroundCard title="Full Reveal" trigger="Click" codePath="atomic/NavVariants"><Nav.FullscreenReveal /></PlaygroundCard>
            <PlaygroundCard title="Magnetic Link" trigger="Hover" codePath="atomic/NavVariants"><Nav.MagneticLink /></PlaygroundCard>
            <PlaygroundCard title="Breadcrumb" trigger="Hover" codePath="atomic/NavVariants"><Nav.Breadcrumb /></PlaygroundCard>
            <PlaygroundCard title="Steps" trigger="Static" codePath="atomic/NavVariants"><Nav.StepNav /></PlaygroundCard>
            <PlaygroundCard title="Icon Bar" trigger="Hover" codePath="atomic/NavVariants"><Nav.IconBar /></PlaygroundCard>
            <PlaygroundCard title="Badge" trigger="Static" codePath="atomic/NavVariants"><Nav.NotificationBadge /></PlaygroundCard>
            <PlaygroundCard title="Bottom Tab" trigger="Click" codePath="atomic/NavVariants"><Nav.BottomTabBar /></PlaygroundCard>
            <PlaygroundCard title="Mega Menu" trigger="Hover" codePath="atomic/NavVariants"><Nav.MegaMenuCol /></PlaygroundCard>
            <PlaygroundCard title="Search Expand" trigger="Click" codePath="atomic/NavVariants"><Nav.SearchExpand /></PlaygroundCard>
            <PlaygroundCard title="Lang Switch" trigger="Click" codePath="atomic/NavVariants"><Nav.LangSwitch /></PlaygroundCard>
            <PlaygroundCard title="Theme Toggle" trigger="Click" codePath="atomic/NavVariants"><Nav.ThemeToggle /></PlaygroundCard>
        </div>
      </FilteredSection>

      {/* --- 05. BACKGROUNDS --- */}
      <FilteredSection id="backgrounds">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">05.</span>Backgrounds</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[600px] overflow-y-auto hide-scrollbar">
            <PlaygroundCard title="Mesh Gradient" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.MeshGradient /></PlaygroundCard>
            <PlaygroundCard title="Moving Grid" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.MovingGrid /></PlaygroundCard>
            <PlaygroundCard title="Dot Matrix" trigger="Static" codePath="atomic/BackgroundVariants"><Backgrounds.DotMatrix /></PlaygroundCard>
            <PlaygroundCard title="Aurora" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.AuroraBg /></PlaygroundCard>
            <PlaygroundCard title="Neon Lines" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.NeonLines /></PlaygroundCard>
            <PlaygroundCard title="Starfield" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.StarfieldCSS /></PlaygroundCard>
            <PlaygroundCard title="Gradient Wave" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.GradientWave /></PlaygroundCard>
            <PlaygroundCard title="Hexagon Pattern" trigger="Static" codePath="atomic/BackgroundVariants"><Backgrounds.HexagonPattern /></PlaygroundCard>
            <PlaygroundCard title="Radial Pulse" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.RadialPulse /></PlaygroundCard>
            <PlaygroundCard title="Animated Noise" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.AnimatedNoise /></PlaygroundCard>
            <PlaygroundCard title="Circuit Board" trigger="Static" codePath="atomic/BackgroundVariants"><Backgrounds.CircuitBoard /></PlaygroundCard>
            <PlaygroundCard title="Fog Flow" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.FogFlow /></PlaygroundCard>
            <PlaygroundCard title="Moving Stripes" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.MovingStripes /></PlaygroundCard>
            <PlaygroundCard title="Rain Effect" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.RainEffect /></PlaygroundCard>
            <PlaygroundCard title="Fire Embers" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.FireEmbers /></PlaygroundCard>
            <PlaygroundCard title="Bokeh Blur" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.BokehBlur /></PlaygroundCard>
            <PlaygroundCard title="Cyber Grid" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.CyberGrid /></PlaygroundCard>
            <PlaygroundCard title="Spotlight Follow" trigger="Hover" codePath="atomic/BackgroundVariants"><Backgrounds.SpotlightFollow /></PlaygroundCard>
            <PlaygroundCard title="Vignette Pulse" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.VignettePulse /></PlaygroundCard>
            <PlaygroundCard title="TV Glitch" trigger="Loop" codePath="atomic/BackgroundVariants"><Backgrounds.TvGlitchBg /></PlaygroundCard>
        </div>
      </FilteredSection>

      {/* --- 06. DATA VIZ --- */}
      <FilteredSection id="data">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">06.</span>Data Viz</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Bar Grow" trigger="Load" codePath="atomic/DataVariants"><Data.BarChartGrow /></PlaygroundCard>
            <PlaygroundCard title="Circle Progress" trigger="Load" codePath="atomic/DataVariants"><Data.CircleProgress /></PlaygroundCard>
            <PlaygroundCard title="Count Up" trigger="Load" codePath="atomic/DataVariants"><Data.CountUp /></PlaygroundCard>
            <PlaygroundCard title="Line Draw" trigger="Load" codePath="atomic/DataVariants"><Data.LineChart /></PlaygroundCard>
            <PlaygroundCard title="Pie Spin" trigger="Load" codePath="atomic/DataVariants"><Data.PieChart /></PlaygroundCard>
            <PlaygroundCard title="Area Fill" trigger="Load" codePath="atomic/DataVariants"><Data.AreaChart /></PlaygroundCard>
            <PlaygroundCard title="Scatter Pop" trigger="Load" codePath="atomic/DataVariants"><Data.ScatterPlot /></PlaygroundCard>
            <PlaygroundCard title="Vertical Bar" trigger="Load" codePath="atomic/DataVariants"><Data.VerticalProgress /></PlaygroundCard>
            <PlaygroundCard title="Radar Draw" trigger="Load" codePath="atomic/DataVariants"><Data.RadarChart /></PlaygroundCard>
            <PlaygroundCard title="Stacked Bar" trigger="Load" codePath="atomic/DataVariants"><Data.StackedBar /></PlaygroundCard>
            <PlaygroundCard title="Live Stream" trigger="Loop" codePath="atomic/DataVariants"><Data.LiveData /></PlaygroundCard>
            <PlaygroundCard title="Donut Chart" trigger="Load" codePath="atomic/DataVariants"><Data.DonutChart /></PlaygroundCard>
            <PlaygroundCard title="Heatmap" trigger="Load" codePath="atomic/DataVariants"><Data.Heatmap /></PlaygroundCard>
            <PlaygroundCard title="Funnel" trigger="Load" codePath="atomic/DataVariants"><Data.FunnelChart /></PlaygroundCard>
            <PlaygroundCard title="Gauge" trigger="Load" codePath="atomic/DataVariants"><Data.GaugeChart /></PlaygroundCard>
            <PlaygroundCard title="Network" trigger="Load" codePath="atomic/DataVariants"><Data.NetworkGraph /></PlaygroundCard>
            <PlaygroundCard title="Comparison" trigger="Load" codePath="atomic/DataVariants"><Data.ComparisonBars /></PlaygroundCard>
            <PlaygroundCard title="Step Tracker" trigger="Load" codePath="atomic/DataVariants"><Data.StepTracker /></PlaygroundCard>
            <PlaygroundCard title="Candle Stick" trigger="Static" codePath="atomic/DataVariants"><Data.CandleStick /></PlaygroundCard>
            <PlaygroundCard title="Mini Ring" trigger="Load" codePath="atomic/DataVariants"><Data.MiniRing /></PlaygroundCard>
        </div>
      </FilteredSection>

      {/* --- 07. FEEDBACK --- */}
      <FilteredSection id="feedback">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-secondary mr-4 font-mono text-2xl">07.</span>Feedback</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Success Modal" trigger="Click" codePath="atomic/FeedbackVariants"><Feedback.SuccessModal /></PlaygroundCard>
            <PlaygroundCard title="Error Toast" trigger="Click" codePath="atomic/FeedbackVariants"><Feedback.ErrorToast /></PlaygroundCard>
            <PlaygroundCard title="Warning" trigger="Loop" codePath="atomic/FeedbackVariants"><Feedback.WarningAlert /></PlaygroundCard>
            <PlaygroundCard title="Info Banner" trigger="Load" codePath="atomic/FeedbackVariants"><Feedback.InfoBanner /></PlaygroundCard>
            <PlaygroundCard title="Bell Shake" trigger="Hover" codePath="atomic/FeedbackVariants"><Feedback.BellShake /></PlaygroundCard>
            <PlaygroundCard title="Confetti" trigger="Click" codePath="atomic/FeedbackVariants"><Feedback.ConfettiBurst /></PlaygroundCard>
            <PlaygroundCard title="Typing..." trigger="Loop" codePath="atomic/FeedbackVariants"><Feedback.TypingIndicator /></PlaygroundCard>
            <PlaygroundCard title="Signal" trigger="Static" codePath="atomic/FeedbackVariants"><Feedback.SignalStrength /></PlaygroundCard>
            <PlaygroundCard title="404 Glitch" trigger="Hover" codePath="atomic/FeedbackVariants"><Feedback.Error404 /></PlaygroundCard>
            <PlaygroundCard title="Empty State" trigger="Static" codePath="atomic/FeedbackVariants"><Feedback.EmptyBox /></PlaygroundCard>
            <PlaygroundCard title="Pulse Beacon" trigger="Loop" codePath="atomic/FeedbackVariants"><Feedback.PulseBeacon /></PlaygroundCard>
            <PlaygroundCard title="Access Denied" trigger="Click" codePath="atomic/FeedbackVariants"><Feedback.LockShake /></PlaygroundCard>
            <PlaygroundCard title="Timer" trigger="Static" codePath="atomic/FeedbackVariants"><Feedback.UrgencyTimer /></PlaygroundCard>
            <PlaygroundCard title="Online" trigger="Static" codePath="atomic/FeedbackVariants"><Feedback.OnlineBadge /></PlaygroundCard>
            <PlaygroundCard title="Offline" trigger="Static" codePath="atomic/FeedbackVariants"><Feedback.OfflineOverlay /></PlaygroundCard>
            <PlaygroundCard title="Skeleton Card" trigger="Loop" codePath="atomic/FeedbackVariants"><Feedback.SkeletonCard /></PlaygroundCard>
            <PlaygroundCard title="Upload Check" trigger="Load" codePath="atomic/FeedbackVariants"><Feedback.UploadComplete /></PlaygroundCard>
            <PlaygroundCard title="Battery Low" trigger="Loop" codePath="atomic/FeedbackVariants"><Feedback.BatteryLow /></PlaygroundCard>
            <PlaygroundCard title="Fingerprint" trigger="Loop" codePath="atomic/FeedbackVariants"><Feedback.FingerprintScan /></PlaygroundCard>
            <PlaygroundCard title="Eye Tracking" trigger="Mouse" codePath="atomic/FeedbackVariants"><Feedback.EyeTracking /></PlaygroundCard>
        </div>
      </FilteredSection>

      {/* --- 08. SOCIAL --- */}
      <FilteredSection id="social">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">08.</span>Social</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Heart Burst" trigger="Click" codePath="atomic/SocialVariants"><Social.HeartBurst /></PlaygroundCard>
            <PlaygroundCard title="Follow" trigger="Click" codePath="atomic/SocialVariants"><Social.FollowButton /></PlaygroundCard>
            <PlaygroundCard title="Comment Expand" trigger="Click" codePath="atomic/SocialVariants"><Social.CommentExpand /></PlaygroundCard>
            <PlaygroundCard title="Share Nodes" trigger="Click" codePath="atomic/SocialVariants"><Social.ShareNodes /></PlaygroundCard>
            <PlaygroundCard title="Avatar Stack" trigger="Hover" codePath="atomic/SocialVariants"><Social.AvatarStack /></PlaygroundCard>
            <PlaygroundCard title="Live Count" trigger="Loop" codePath="atomic/SocialVariants"><Social.LiveCount /></PlaygroundCard>
            <PlaygroundCard title="Bookmark" trigger="Click" codePath="atomic/SocialVariants"><Social.BookmarkRibbon /></PlaygroundCard>
            <PlaygroundCard title="Reaction Bar" trigger="Hover" codePath="atomic/SocialVariants"><Social.ReactionBar /></PlaygroundCard>
            <PlaygroundCard title="User Plus" trigger="Click" codePath="atomic/SocialVariants"><Social.UserPlusAnim /></PlaygroundCard>
            <PlaygroundCard title="Voting" trigger="Click" codePath="atomic/SocialVariants"><Social.VotingArrows /></PlaygroundCard>
            <PlaygroundCard title="Retweet" trigger="Click" codePath="atomic/SocialVariants"><Social.RetweetButton /></PlaygroundCard>
            <PlaygroundCard title="Story Ring" trigger="Static" codePath="atomic/SocialVariants"><Social.StoryRing /></PlaygroundCard>
            <PlaygroundCard title="Chat Bubble" trigger="Static" codePath="atomic/SocialVariants"><Social.ChatBubble /></PlaygroundCard>
            <PlaygroundCard title="Typing Dots" trigger="Loop" codePath="atomic/SocialVariants"><Social.TypingDotsMessage /></PlaygroundCard>
            <PlaygroundCard title="Send Plane" trigger="Click" codePath="atomic/SocialVariants"><Social.SendPlane /></PlaygroundCard>
            <PlaygroundCard title="Verified" trigger="Static" codePath="atomic/SocialVariants"><Social.VerifiedBadge /></PlaygroundCard>
            <PlaygroundCard title="Profile Hover" trigger="Hover" codePath="atomic/SocialVariants"><Social.ProfileHover /></PlaygroundCard>
            <PlaygroundCard title="Swipe Reply" trigger="Drag" codePath="atomic/SocialVariants"><Social.SwipeReply /></PlaygroundCard>
            <PlaygroundCard title="Group Chat" trigger="Static" codePath="atomic/SocialVariants"><Social.GroupChatIcon /></PlaygroundCard>
            <PlaygroundCard title="Notification" trigger="Loop" codePath="atomic/SocialVariants"><Social.NotifDot /></PlaygroundCard>
        </div>
      </FilteredSection>

      {/* --- 09. INPUTS --- */}
      <FilteredSection id="inputs">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-white/50 mr-4 font-mono text-2xl">09.</span>Inputs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <PlaygroundCard title="Floating Label" trigger="Focus" codePath="atomic/InputVariants"><div className="w-full max-w-[200px]"><InputVars.FloatingLabelInput /></div></PlaygroundCard>
           <PlaygroundCard title="Shake Error" trigger="Validation" codePath="atomic/InputVariants"><InputVars.ShakeErrorInput /></PlaygroundCard>
           <PlaygroundCard title="Border Spread" trigger="Focus" codePath="atomic/InputVariants"><InputVars.BorderSpreadInput /></PlaygroundCard>
           <PlaygroundCard title="Password Reveal" trigger="Click" codePath="atomic/InputVariants"><InputVars.PasswordReveal /></PlaygroundCard>
           <PlaygroundCard title="Search Expand" trigger="Click" codePath="atomic/InputVariants"><InputVars.SearchExpandInput /></PlaygroundCard>
           <PlaygroundCard title="OTP Input" trigger="Input" codePath="atomic/InputVariants"><InputVars.OTPInput /></PlaygroundCard>
           <PlaygroundCard title="Tag Input" trigger="Enter" codePath="atomic/InputVariants"><InputVars.TagInput /></PlaygroundCard>
           <PlaygroundCard title="File Dropzone" trigger="Drag" codePath="atomic/InputVariants"><InputVars.FileDropzone /></PlaygroundCard>
           <PlaygroundCard title="Voice Wave" trigger="Click" codePath="atomic/InputVariants"><InputVars.VoiceInput /></PlaygroundCard>
           <PlaygroundCard title="Credit Card" trigger="Focus" codePath="atomic/InputVariants"><InputVars.CreditCardInput /></PlaygroundCard>
           <PlaygroundCard title="Char Count" trigger="Input" codePath="atomic/InputVariants"><InputVars.CharCountInput /></PlaygroundCard>
           <PlaygroundCard title="Material Fill" trigger="Focus" codePath="atomic/InputVariants"><InputVars.MaterialFilledInput /></PlaygroundCard>
           <PlaygroundCard title="Inline Submit" trigger="Input" codePath="atomic/InputVariants"><InputVars.InlineSubmitInput /></PlaygroundCard>
           <PlaygroundCard title="Auto Resize" trigger="Input" codePath="atomic/InputVariants"><InputVars.AutoResizeTextarea /></PlaygroundCard>
           <PlaygroundCard title="Color Picker" trigger="Click" codePath="atomic/InputVariants"><InputVars.ColorInput /></PlaygroundCard>
           <PlaygroundCard title="Stepper" trigger="Click" codePath="atomic/InputVariants"><InputVars.StepperInput /></PlaygroundCard>
           <PlaygroundCard title="Copy Clipboard" trigger="Click" codePath="atomic/InputVariants"><InputVars.CopyInput /></PlaygroundCard>
           <PlaygroundCard title="Range Slider" trigger="Drag" codePath="atomic/InputVariants"><InputVars.SliderInput /></PlaygroundCard>
           <PlaygroundCard title="Chat Input" trigger="Focus" codePath="atomic/InputVariants"><InputVars.ChatInput /></PlaygroundCard>
           <PlaygroundCard title="Mentions" trigger="Static" codePath="atomic/InputVariants"><InputVars.MentionInput /></PlaygroundCard>
        </div>
       </FilteredSection>

       {/* --- 10. LOADERS --- */}
       <FilteredSection id="loaders">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-white/50 mr-4 font-mono text-2xl">10.</span>Loaders</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <PlaygroundCard title="Classic Spinner" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.ClassicSpinner /></PlaygroundCard>
            <PlaygroundCard title="Pulse Dots" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.PulseDots /></PlaygroundCard>
            <PlaygroundCard title="Bouncing Ball" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.BouncingBall /></PlaygroundCard>
            <PlaygroundCard title="Orbit" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.OrbitLoader /></PlaygroundCard>
            <PlaygroundCard title="Liquid" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.LiquidLoader /></PlaygroundCard>
            <PlaygroundCard title="Skeleton" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.SkeletonLoader /></PlaygroundCard>
            <PlaygroundCard title="Text Typing" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.TextLoader /></PlaygroundCard>
            <PlaygroundCard title="WiFi" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.WifiLoader /></PlaygroundCard>
            <PlaygroundCard title="Equalizer" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.EqualizerLoader /></PlaygroundCard>
            <PlaygroundCard title="Hourglass" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.HourglassLoader /></PlaygroundCard>
            <PlaygroundCard title="DNA" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.DNALoader /></PlaygroundCard>
            <PlaygroundCard title="Infinity" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.InfinityLoader /></PlaygroundCard>
            <PlaygroundCard title="Radar" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.RadarLoader /></PlaygroundCard>
            <PlaygroundCard title="Battery" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.BatteryLoader /></PlaygroundCard>
            <PlaygroundCard title="Gear" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.GearLoader /></PlaygroundCard>
            <PlaygroundCard title="Striped" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.StripedProgress /></PlaygroundCard>
            <PlaygroundCard title="Ripple" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.RippleLoader /></PlaygroundCard>
            <PlaygroundCard title="Flip Square" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.FlipSquareLoader /></PlaygroundCard>
            <PlaygroundCard title="Glitch" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.GlitchLoader /></PlaygroundCard>
            <PlaygroundCard title="Circle" trigger="Loop" codePath="atomic/LoaderVariants"><Loaders.CircularNumberLoader /></PlaygroundCard>
        </div>
       </FilteredSection>

       {/* --- 11. IMAGES --- */}
       <FilteredSection id="images">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-white/50 mr-4 font-mono text-2xl">11.</span>Images</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Zoom Hover" trigger="Hover" codePath="atomic/ImageVariants"><Images.ImageZoom /></PlaygroundCard>
            <PlaygroundCard title="B&W to Color" trigger="Hover" codePath="atomic/ImageVariants"><Images.GrayToColor /></PlaygroundCard>
            <PlaygroundCard title="Blur Reveal" trigger="Hover" codePath="atomic/ImageVariants"><Images.BlurRevealImage /></PlaygroundCard>
            <PlaygroundCard title="Slide Caption" trigger="Hover" codePath="atomic/ImageVariants"><Images.SlideCaption /></PlaygroundCard>
            <PlaygroundCard title="Ken Burns" trigger="Auto" codePath="atomic/ImageVariants"><Images.KenBurns /></PlaygroundCard>
            <PlaygroundCard title="3D Tilt" trigger="Hover" codePath="atomic/ImageVariants"><Images.TiltImage /></PlaygroundCard>
            <PlaygroundCard title="Glitch" trigger="Hover" codePath="atomic/ImageVariants"><Images.GlitchImage /></PlaygroundCard>
            <PlaygroundCard title="Circle Reveal" trigger="Hover" codePath="atomic/ImageVariants"><Images.CircleReveal /></PlaygroundCard>
            <PlaygroundCard title="Before/After" trigger="Drag" codePath="atomic/ImageVariants"><Images.BeforeAfter /></PlaygroundCard>
            <PlaygroundCard title="Polaroid Stack" trigger="Hover" codePath="atomic/ImageVariants"><Images.PolaroidStack /></PlaygroundCard>
            <PlaygroundCard title="Reflection" trigger="Hover" codePath="atomic/ImageVariants"><Images.ReflectionImage /></PlaygroundCard>
            <PlaygroundCard title="Parallax" trigger="Hover" codePath="atomic/ImageVariants"><Images.ParallaxHover /></PlaygroundCard>
            <PlaygroundCard title="Pixelate" trigger="Hover" codePath="atomic/ImageVariants"><Images.PixelateImage /></PlaygroundCard>
            <PlaygroundCard title="Overlay Fade" trigger="Hover" codePath="atomic/ImageVariants"><Images.OverlayFade /></PlaygroundCard>
            <PlaygroundCard title="Border Draw" trigger="Hover" codePath="atomic/ImageVariants"><Images.BorderDrawImage /></PlaygroundCard>
            <PlaygroundCard title="Rotate In" trigger="Hover" codePath="atomic/ImageVariants"><Images.RotateInImage /></PlaygroundCard>
            <PlaygroundCard title="Split Clip" trigger="Hover" codePath="atomic/ImageVariants"><Images.SplitImage /></PlaygroundCard>
            <PlaygroundCard title="Gallery Stack" trigger="Auto" codePath="atomic/ImageVariants"><Images.GalleryStack /></PlaygroundCard>
            <PlaygroundCard title="Ink Spread" trigger="Hover" codePath="atomic/ImageVariants"><Images.InkSpread /></PlaygroundCard>
            <PlaygroundCard title="Lens Flare" trigger="Hover" codePath="atomic/ImageVariants"><Images.LensFlare /></PlaygroundCard>
        </div>
       </FilteredSection>

       {/* --- 12. ECOMMERCE --- */}
       <FilteredSection id="ecom">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">12.</span>Ecommerce</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Add to Cart" trigger="Click" codePath="atomic/EcommerceVariants"><Ecom.AddToCartBounce /></PlaygroundCard>
            <PlaygroundCard title="Product Lift" trigger="Hover" codePath="atomic/EcommerceVariants"><Ecom.ProductCardHover /></PlaygroundCard>
            <PlaygroundCard title="Quantity" trigger="Click" codePath="atomic/EcommerceVariants"><Ecom.QuantityStepper /></PlaygroundCard>
            <PlaygroundCard title="Price Flip" trigger="Hover" codePath="atomic/EcommerceVariants"><Ecom.PriceTag /></PlaygroundCard>
            <PlaygroundCard title="Wishlist" trigger="Click" codePath="atomic/EcommerceVariants"><Ecom.WishlistToggle /></PlaygroundCard>
            <PlaygroundCard title="Checkout" trigger="Static" codePath="atomic/EcommerceVariants"><Ecom.CheckoutProgress /></PlaygroundCard>
            <PlaygroundCard title="Size Select" trigger="Click" codePath="atomic/EcommerceVariants"><Ecom.SizeSelector /></PlaygroundCard>
            <PlaygroundCard title="Color Swatch" trigger="Click" codePath="atomic/EcommerceVariants"><Ecom.ColorSwatch /></PlaygroundCard>
            <PlaygroundCard title="Shipping" trigger="Loop" codePath="atomic/EcommerceVariants"><Ecom.ShippingTruck /></PlaygroundCard>
            <PlaygroundCard title="Coupon" trigger="Input" codePath="atomic/EcommerceVariants"><Ecom.CouponInput /></PlaygroundCard>
            <PlaygroundCard title="Quick View" trigger="Hover" codePath="atomic/EcommerceVariants"><Ecom.QuickView /></PlaygroundCard>
            <PlaygroundCard title="Rating" trigger="Hover" codePath="atomic/EcommerceVariants"><Ecom.InteractiveRating /></PlaygroundCard>
            <PlaygroundCard title="Fly Cart" trigger="Click" codePath="atomic/EcommerceVariants"><Ecom.FlyToCart /></PlaygroundCard>
            <PlaygroundCard title="Stock Meter" trigger="Static" codePath="atomic/EcommerceVariants"><Ecom.StockMeter /></PlaygroundCard>
            <PlaygroundCard title="Payment" trigger="Click" codePath="atomic/EcommerceVariants"><Ecom.PaymentSelect /></PlaygroundCard>
            <PlaygroundCard title="Filter Chip" trigger="Click" codePath="atomic/EcommerceVariants"><Ecom.FilterChip /></PlaygroundCard>
            <PlaygroundCard title="Categories" trigger="Static" codePath="atomic/EcommerceVariants"><Ecom.CategoryPill /></PlaygroundCard>
            <PlaygroundCard title="Mini Gallery" trigger="Hover" codePath="atomic/EcommerceVariants"><Ecom.MiniGallery /></PlaygroundCard>
            <PlaygroundCard title="Order Status" trigger="Static" codePath="atomic/EcommerceVariants"><Ecom.OrderStatus /></PlaygroundCard>
            <PlaygroundCard title="Compare" trigger="Sticky" codePath="atomic/EcommerceVariants"><Ecom.CompareSticky /></PlaygroundCard>
        </div>
       </FilteredSection>

       {/* --- 13. GAMIFICATION --- */}
       <FilteredSection id="game">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">13.</span>Gamification</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="XP Bar" trigger="Click" codePath="atomic/GameVariants"><Game.XPBar /></PlaygroundCard>
            <PlaygroundCard title="Badge Unlock" trigger="Click" codePath="atomic/GameVariants"><Game.BadgeUnlock /></PlaygroundCard>
            <PlaygroundCard title="Card Flip" trigger="Click" codePath="atomic/GameVariants"><Game.GameCardFlip /></PlaygroundCard>
            <PlaygroundCard title="Coin Spin" trigger="Loop" codePath="atomic/GameVariants"><Game.CoinSpin /></PlaygroundCard>
            <PlaygroundCard title="Health Shake" trigger="Click" codePath="atomic/GameVariants"><Game.HealthBar /></PlaygroundCard>
            <PlaygroundCard title="Level Up" trigger="Click" codePath="atomic/GameVariants"><Game.LevelUp /></PlaygroundCard>
            <PlaygroundCard title="Loot Box" trigger="Hover" codePath="atomic/GameVariants"><Game.LootBox /></PlaygroundCard>
            <PlaygroundCard title="Streak" trigger="Loop" codePath="atomic/GameVariants"><Game.StreakFlame /></PlaygroundCard>
            <PlaygroundCard title="Mana Orb" trigger="Loop" codePath="atomic/GameVariants"><Game.ManaOrb /></PlaygroundCard>
            <PlaygroundCard title="Quest Item" trigger="Hover" codePath="atomic/GameVariants"><Game.QuestItem /></PlaygroundCard>
            <PlaygroundCard title="Achievement" trigger="Click" codePath="atomic/GameVariants"><Game.AchievementToast /></PlaygroundCard>
            <PlaygroundCard title="Char Select" trigger="Hover" codePath="atomic/GameVariants"><Game.CharacterSelect /></PlaygroundCard>
            <PlaygroundCard title="Cooldown" trigger="Click" codePath="atomic/GameVariants"><Game.SkillCooldown /></PlaygroundCard>
            <PlaygroundCard title="Inventory" trigger="Drag" codePath="atomic/GameVariants"><Game.InventorySlot /></PlaygroundCard>
            <PlaygroundCard title="Map Marker" trigger="Loop" codePath="atomic/GameVariants"><Game.MapMarker /></PlaygroundCard>
            <PlaygroundCard title="Combo" trigger="Click" codePath="atomic/GameVariants"><Game.ComboCounter /></PlaygroundCard>
            <PlaygroundCard title="Rank" trigger="Hover" codePath="atomic/GameVariants"><Game.RankRow /></PlaygroundCard>
            <PlaygroundCard title="Boss Warning" trigger="Loop" codePath="atomic/GameVariants"><Game.BossWarning /></PlaygroundCard>
            <PlaygroundCard title="Lock/Unlock" trigger="Click" codePath="atomic/GameVariants"><Game.LockUnlock /></PlaygroundCard>
            <PlaygroundCard title="Enemy HP" trigger="Static" codePath="atomic/GameVariants"><Game.EnemyHealth /></PlaygroundCard>
        </div>
       </FilteredSection>

       {/* --- 14. MEDIA & AUDIO (NEW) --- */}
       <FilteredSection id="media">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">14.</span>Media & Audio</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Play/Pause Morph" trigger="Click" codePath="atomic/MediaVariants"><Media.PlayPauseMorph /></PlaygroundCard>
            <PlaygroundCard title="Waveform" trigger="Loop" codePath="atomic/MediaVariants"><Media.Waveform /></PlaygroundCard>
            <PlaygroundCard title="Vinyl Record" trigger="Hover" codePath="atomic/MediaVariants"><Media.VinylRecord /></PlaygroundCard>
            <PlaygroundCard title="Volume Knob" trigger="Drag" codePath="atomic/MediaVariants"><Media.VolumeKnob /></PlaygroundCard>
            <PlaygroundCard title="Equalizer" trigger="Loop" codePath="atomic/MediaVariants"><Media.EqualizerColor /></PlaygroundCard>
            <PlaygroundCard title="Cassette Tape" trigger="Loop" codePath="atomic/MediaVariants"><Media.CassetteTape /></PlaygroundCard>
            <PlaygroundCard title="Podcast Mic" trigger="Loop" codePath="atomic/MediaVariants"><Media.PodcastMic /></PlaygroundCard>
            <PlaygroundCard title="Lyrics Karaoke" trigger="Loop" codePath="atomic/MediaVariants"><Media.LyricsKaraoke /></PlaygroundCard>
            <PlaygroundCard title="Album 3D" trigger="Hover" codePath="atomic/MediaVariants"><Media.AlbumCover3D /></PlaygroundCard>
            <PlaygroundCard title="Like Track" trigger="Click" codePath="atomic/MediaVariants"><Media.LikeTrack /></PlaygroundCard>
            <PlaygroundCard title="Shuffle" trigger="Click" codePath="atomic/MediaVariants"><Media.ShuffleToggle /></PlaygroundCard>
            <PlaygroundCard title="Airplay" trigger="Click" codePath="atomic/MediaVariants"><Media.AirplayCast /></PlaygroundCard>
            <PlaygroundCard title="Video Scrubber" trigger="Hover" codePath="atomic/MediaVariants"><Media.VideoScrubber /></PlaygroundCard>
            <PlaygroundCard title="Mute Toggle" trigger="Click" codePath="atomic/MediaVariants"><Media.MuteToggle /></PlaygroundCard>
            <PlaygroundCard title="Radio Tuner" trigger="Loop" codePath="atomic/MediaVariants"><Media.RadioTuner /></PlaygroundCard>
            <PlaygroundCard title="Mini Player" trigger="Click" codePath="atomic/MediaVariants"><Media.MiniPlayer /></PlaygroundCard>
            <PlaygroundCard title="Playback Speed" trigger="Click" codePath="atomic/MediaVariants"><Media.PlaybackSpeed /></PlaygroundCard>
            <PlaygroundCard title="Spectrum 3D" trigger="Loop" codePath="atomic/MediaVariants"><Media.Spectrum3D /></PlaygroundCard>
            <PlaygroundCard title="Playlist Drag" trigger="Drag" codePath="atomic/MediaVariants"><Media.PlaylistDrag /></PlaygroundCard>
            <PlaygroundCard title="CD Insert" trigger="Hover" codePath="atomic/MediaVariants"><Media.CDInsert /></PlaygroundCard>
        </div>
       </FilteredSection>

       {/* --- 15. DEVICE MOCKUPS (NEW) --- */}
       <FilteredSection id="device">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">15.</span>Device UI</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Dynamic Island" trigger="Click" codePath="atomic/DeviceVariants"><Device.DynamicIsland /></PlaygroundCard>
            <PlaygroundCard title="Notch Reveal" trigger="Hover" codePath="atomic/DeviceVariants"><Device.NotchReveal /></PlaygroundCard>
            <PlaygroundCard title="Phone Rotate" trigger="Loop" codePath="atomic/DeviceVariants"><Device.PhoneRotate /></PlaygroundCard>
            <PlaygroundCard title="Laptop Hinge" trigger="Click" codePath="atomic/DeviceVariants"><Device.LaptopHinge /></PlaygroundCard>
            <PlaygroundCard title="Fingerprint" trigger="Loop" codePath="atomic/DeviceVariants"><Device.ScreenFingerprint /></PlaygroundCard>
            <PlaygroundCard title="Face ID" trigger="Loop" codePath="atomic/DeviceVariants"><Device.FaceID /></PlaygroundCard>
            <PlaygroundCard title="Battery Charge" trigger="Loop" codePath="atomic/DeviceVariants"><Device.BatteryCharge /></PlaygroundCard>
            <PlaygroundCard title="Airplane Mode" trigger="Click" codePath="atomic/DeviceVariants"><Device.AirplaneToggle /></PlaygroundCard>
            <PlaygroundCard title="App Icon" trigger="Hover" codePath="atomic/DeviceVariants"><Device.AppSquircle /></PlaygroundCard>
            <PlaygroundCard title="Notification" trigger="Click" codePath="atomic/DeviceVariants"><Device.NotificationStack /></PlaygroundCard>
            <PlaygroundCard title="Home Indicator" trigger="Drag" codePath="atomic/DeviceVariants"><Device.HomeIndicator /></PlaygroundCard>
            <PlaygroundCard title="Camera Shutter" trigger="Click" codePath="atomic/DeviceVariants"><Device.CameraShutter /></PlaygroundCard>
            <PlaygroundCard title="Keyboard" trigger="Focus" codePath="atomic/DeviceVariants"><Device.KeyboardPopup /></PlaygroundCard>
            <PlaygroundCard title="Dark Mode" trigger="Click" codePath="atomic/DeviceVariants"><Device.DeviceDarkMode /></PlaygroundCard>
            <PlaygroundCard title="Split Screen" trigger="Hover" codePath="atomic/DeviceVariants"><Device.TabletSplit /></PlaygroundCard>
            <PlaygroundCard title="Watch Swipe" trigger="Drag" codePath="atomic/DeviceVariants"><Device.WatchSwipe /></PlaygroundCard>
            <PlaygroundCard title="Signal Search" trigger="Loop" codePath="atomic/DeviceVariants"><Device.SignalSearch /></PlaygroundCard>
            <PlaygroundCard title="App Library" trigger="Hover" codePath="atomic/DeviceVariants"><Device.AppLibrary /></PlaygroundCard>
            <PlaygroundCard title="Browser Tabs" trigger="Click" codePath="atomic/DeviceVariants"><Device.BrowserTabs /></PlaygroundCard>
            <PlaygroundCard title="Lock Screen" trigger="Click" codePath="atomic/DeviceVariants"><Device.LockScreen /></PlaygroundCard>
        </div>
       </FilteredSection>

       {/* --- 16. TRANSITIONS --- */}
       <FilteredSection id="transitions">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-secondary mr-4 font-mono text-2xl">16.</span>Transitions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Fade" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.FadePage /></PlaygroundCard>
            <PlaygroundCard title="Slide Left" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.SlideLeft /></PlaygroundCard>
            <PlaygroundCard title="Scale Up" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.ScaleUp /></PlaygroundCard>
            <PlaygroundCard title="Wipe" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.WipeReveal /></PlaygroundCard>
            <PlaygroundCard title="Flip" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.FlipTransition /></PlaygroundCard>
            <PlaygroundCard title="Circle Mask" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.CircleMask /></PlaygroundCard>
            <PlaygroundCard title="Blinds" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.BlindsEffect /></PlaygroundCard>
            <PlaygroundCard title="Dissolve" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.DissolvePixel /></PlaygroundCard>
            <PlaygroundCard title="Drawer" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.DrawerUp /></PlaygroundCard>
            <PlaygroundCard title="Curtain" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.CurtainOpen /></PlaygroundCard>
            <PlaygroundCard title="Zoom Out" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.ZoomOutFade /></PlaygroundCard>
            <PlaygroundCard title="Folder Tab" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.FolderTab /></PlaygroundCard>
            <PlaygroundCard title="Glitch" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.GlitchTransition /></PlaygroundCard>
            <PlaygroundCard title="Morph" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.MorphPage /></PlaygroundCard>
            <PlaygroundCard title="Tiles" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.TilesReveal /></PlaygroundCard>
            <PlaygroundCard title="Clock Wipe" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.ClockWipe /></PlaygroundCard>
            <PlaygroundCard title="Crossfade" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.CrossfadeBlur /></PlaygroundCard>
            <PlaygroundCard title="Lines" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.LinesSlide /></PlaygroundCard>
            <PlaygroundCard title="Cube Rotate" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.RotateCube /></PlaygroundCard>
            <PlaygroundCard title="Elastic Snap" trigger="Click" codePath="atomic/TransitionVariants"><Transitions.ElasticSnap /></PlaygroundCard>
        </div>
       </FilteredSection>

       {/* --- 17. MICRO (EXISTING) --- */}
       <FilteredSection id="micro">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-white/50 mr-4 font-mono text-2xl">17.</span>Micro-Interaction</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <PlaygroundCard title="Day/Night" trigger="Click" codePath="atomic/MicroVariants"><Micro.DayNightToggle /></PlaygroundCard>
            <PlaygroundCard title="Elastic Switch" trigger="Click" codePath="atomic/MicroVariants"><Micro.ElasticToggle /></PlaygroundCard>
            <PlaygroundCard title="Check Draw" trigger="Click" codePath="atomic/MicroVariants"><Micro.CheckDraw /></PlaygroundCard>
            <PlaygroundCard title="Heart Pop" trigger="Click" codePath="atomic/MicroVariants"><Micro.LikeButton /></PlaygroundCard>
            <PlaygroundCard title="Star Rating" trigger="Hover" codePath="atomic/MicroVariants"><Micro.StarRating /></PlaygroundCard>
            <PlaygroundCard title="Volume" trigger="Drag" codePath="atomic/MicroVariants"><Micro.VolumeSlider /></PlaygroundCard>
            <PlaygroundCard title="Trash Delete" trigger="Click" codePath="atomic/MicroVariants"><Micro.TrashDelete /></PlaygroundCard>
            <PlaygroundCard title="Share Fan" trigger="Click" codePath="atomic/MicroVariants"><Micro.ShareFan /></PlaygroundCard>
            <PlaygroundCard title="More Options" trigger="Hover" codePath="atomic/MicroVariants"><Micro.MoreOptions /></PlaygroundCard>
            <PlaygroundCard title="Circular Slider" trigger="Static" codePath="atomic/MicroVariants"><Micro.CircularSlider /></PlaygroundCard>
            <PlaygroundCard title="Download" trigger="Click" codePath="atomic/MicroVariants"><Micro.DownloadButton /></PlaygroundCard>
            <PlaygroundCard title="Copy Icon" trigger="Click" codePath="atomic/MicroVariants"><Micro.CopyIcon /></PlaygroundCard>
            <PlaygroundCard title="Drag Handle" trigger="Hover" codePath="atomic/MicroVariants"><Micro.DragHandle /></PlaygroundCard>
            <PlaygroundCard title="Swipe Switch" trigger="Click" codePath="atomic/MicroVariants"><Micro.SwipeSwitch /></PlaygroundCard>
            <PlaygroundCard title="Reactions" trigger="Hover" codePath="atomic/MicroVariants"><Micro.ReactionPicker /></PlaygroundCard>
            <PlaygroundCard title="Accordion" trigger="Click" codePath="atomic/MicroVariants"><Micro.AccordionChevron /></PlaygroundCard>
            <PlaygroundCard title="Upload Ring" trigger="Auto" codePath="atomic/MicroVariants"><Micro.UploadRing /></PlaygroundCard>
            <PlaygroundCard title="Pin" trigger="Click" codePath="atomic/MicroVariants"><Micro.PinToggle /></PlaygroundCard>
            <PlaygroundCard title="Brightness" trigger="Static" codePath="atomic/MicroVariants"><Micro.BrightnessControl /></PlaygroundCard>
            <PlaygroundCard title="Confetti" trigger="Click" codePath="atomic/MicroVariants"><Micro.ConfettiBtn /></PlaygroundCard>
        </div>
       </FilteredSection>
       
       <Footer />
    </div>
  );
}
