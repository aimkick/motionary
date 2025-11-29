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

export default function Home() {
  const { activeFilters } = useFilterStore();
  
  return (
    <div className="space-y-24 pb-32">
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
      <section id="buttons">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">01.</span>Buttons</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <PlaygroundCard title="Magnetic" trigger="Hover"><MagneticButton /></PlaygroundCard>
          <PlaygroundCard title="Liquid" trigger="Hover"><LiquidButton /></PlaygroundCard>
          <PlaygroundCard title="Jelly" trigger="Click"><JellyButton /></PlaygroundCard>
          <PlaygroundCard title="Neon" trigger="Hover"><Buttons.NeonButton /></PlaygroundCard>
          <PlaygroundCard title="Glitch" trigger="Hover"><Buttons.GlitchButton /></PlaygroundCard>
          <PlaygroundCard title="Cyberpunk" trigger="Static"><Buttons.CyberButton /></PlaygroundCard>
          <PlaygroundCard title="Spotlight" trigger="Hover"><Buttons.SpotLightButton /></PlaygroundCard>
          <PlaygroundCard title="Elastic" trigger="Tap"><Buttons.ElasticButton /></PlaygroundCard>
          <PlaygroundCard title="Shimmer" trigger="Loop"><Buttons.ShimmerButton /></PlaygroundCard>
          <PlaygroundCard title="Blob" trigger="Loop"><Buttons.BlobButton /></PlaygroundCard>
          <PlaygroundCard title="Ghost" trigger="Hover"><Buttons.GhostButton /></PlaygroundCard>
          <PlaygroundCard title="Send" trigger="Click"><Buttons.SendButton /></PlaygroundCard>
          <PlaygroundCard title="3D Tilt" trigger="Mouse"><Buttons.TiltButton /></PlaygroundCard>
        </div>
      </section>

      {/* --- 02. CARDS --- */}
      <section id="cards">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-secondary mr-4 font-mono text-2xl">02.</span>Cards</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <PlaygroundCard title="3D Flip" trigger="Hover"><Cards.FlipCard /></PlaygroundCard>
           <PlaygroundCard title="Glow Border" trigger="Hover"><Cards.GlowCard /></PlaygroundCard>
           <PlaygroundCard title="Parallax Tilt" trigger="Mouse"><Cards.TiltCard /></PlaygroundCard>
           <PlaygroundCard title="Slide Reveal" trigger="Hover"><Cards.RevealCard /></PlaygroundCard>
           <PlaygroundCard title="Glassmorphism" trigger="Static"><Cards.GlassCard /></PlaygroundCard>
           <PlaygroundCard title="Curtain Drop" trigger="Hover"><Cards.CurtainCard /></PlaygroundCard>
           <PlaygroundCard title="Stacking" trigger="Hover"><Cards.StackCard /></PlaygroundCard>
           <PlaygroundCard title="Pattern Slide" trigger="Hover"><Cards.PatternCard /></PlaygroundCard>
           <PlaygroundCard title="Border Beam" trigger="Loop"><Cards.BorderBeamCard /></PlaygroundCard>
           <PlaygroundCard title="Floating Icon" trigger="Hover"><Cards.FloatingIconCard /></PlaygroundCard>
           <PlaygroundCard title="Noise Texture" trigger="Hover"><Cards.NoiseCard /></PlaygroundCard>
           <PlaygroundCard title="Spotlight Gradient" trigger="Mouse"><Cards.SpotlightGradientCard /></PlaygroundCard>
           <PlaygroundCard title="Directional" trigger="Hover"><Cards.DirectionalCard /></PlaygroundCard>
           <PlaygroundCard title="Zoom Background" trigger="Hover"><Cards.ZoomBgCard /></PlaygroundCard>
           <PlaygroundCard title="Blob Morph" trigger="Loop"><Cards.BlobMorphCard /></PlaygroundCard>
           <PlaygroundCard title="Perspective Skew" trigger="Hover"><Cards.SkewCard /></PlaygroundCard>
           <PlaygroundCard title="Content Slide" trigger="Hover"><Cards.SlideUpCard /></PlaygroundCard>
           <PlaygroundCard title="Glitch Border" trigger="Hover"><Cards.GlitchBorderCard /></PlaygroundCard>
           <PlaygroundCard title="Magnetic Element" trigger="Hover"><Cards.MagneticElementCard /></PlaygroundCard>
           <PlaygroundCard title="Video Hover" trigger="Hover"><Cards.VideoHoverCard /></PlaygroundCard>
        </div>
      </section>

      {/* --- 03. TYPOGRAPHY (RESTORED) --- */}
      <section id="typography">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">03.</span>Typography</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Kinetic" trigger="Hover"><KineticText /></PlaygroundCard>
            <PlaygroundCard title="Typewriter" trigger="Loop"><Text.TypewriterText /></PlaygroundCard>
            <PlaygroundCard title="Scramble" trigger="Hover"><Text.ScrambleText /></PlaygroundCard>
            <PlaygroundCard title="Gradient" trigger="Loop"><Text.GradientText /></PlaygroundCard>
            <PlaygroundCard title="Stagger" trigger="Hover"><Text.StaggerText /></PlaygroundCard>
            <PlaygroundCard title="Blur Reveal" trigger="Hover"><Text.BlurText /></PlaygroundCard>
            <PlaygroundCard title="Video Mask" trigger="Loop"><Text.VideoText /></PlaygroundCard>
            <PlaygroundCard title="Rotate 3D" trigger="Hover"><Text.RotateText /></PlaygroundCard>
            <PlaygroundCard title="Wavy" trigger="Loop"><Text.WavyText /></PlaygroundCard>
            <PlaygroundCard title="Glitch" trigger="Hover"><Text.GlitchTextEffect /></PlaygroundCard>
        </div>
      </section>

       {/* --- 04. NAVIGATION (RESTORED) --- */}
      <section id="navigation">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">04.</span>Navigation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Underline" trigger="Hover"><Nav.UnderlineNav /></PlaygroundCard>
            <PlaygroundCard title="Pill Toggle" trigger="Click"><Nav.PillNav /></PlaygroundCard>
            <PlaygroundCard title="Mac Dock" trigger="Hover"><Nav.DockMenu /></PlaygroundCard>
            <PlaygroundCard title="Sidebar Expand" trigger="Hover"><Nav.SidebarExpand /></PlaygroundCard>
            <PlaygroundCard title="Circular" trigger="Click"><Nav.CircularMenu /></PlaygroundCard>
            <PlaygroundCard title="Stagger Drop" trigger="Hover"><Nav.StaggerDropdown /></PlaygroundCard>
            <PlaygroundCard title="Tab Slide" trigger="Click"><Nav.TabIndicator /></PlaygroundCard>
            <PlaygroundCard title="Morph Burger" trigger="Click"><Nav.MorphingBurger /></PlaygroundCard>
            <PlaygroundCard title="Gooey" trigger="Click"><Nav.GooeyMenu /></PlaygroundCard>
            <PlaygroundCard title="Full Reveal" trigger="Click"><Nav.FullscreenReveal /></PlaygroundCard>
            <PlaygroundCard title="Magnetic Link" trigger="Hover"><Nav.MagneticLink /></PlaygroundCard>
            <PlaygroundCard title="Breadcrumb" trigger="Hover"><Nav.Breadcrumb /></PlaygroundCard>
            <PlaygroundCard title="Steps" trigger="Static"><Nav.StepNav /></PlaygroundCard>
            <PlaygroundCard title="Icon Bar" trigger="Hover"><Nav.IconBar /></PlaygroundCard>
            <PlaygroundCard title="Badge" trigger="Static"><Nav.NotificationBadge /></PlaygroundCard>
            <PlaygroundCard title="Bottom Tab" trigger="Click"><Nav.BottomTabBar /></PlaygroundCard>
            <PlaygroundCard title="Mega Menu" trigger="Hover"><Nav.MegaMenuCol /></PlaygroundCard>
            <PlaygroundCard title="Search Expand" trigger="Click"><Nav.SearchExpand /></PlaygroundCard>
            <PlaygroundCard title="Lang Switch" trigger="Click"><Nav.LangSwitch /></PlaygroundCard>
            <PlaygroundCard title="Theme Toggle" trigger="Click"><Nav.ThemeToggle /></PlaygroundCard>
        </div>
      </section>

      {/* --- 05. BACKGROUNDS --- */}
      <section id="backgrounds">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">05.</span>Backgrounds</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[600px] overflow-y-auto hide-scrollbar">
            <PlaygroundCard title="Mesh Gradient" trigger="Loop"><Backgrounds.MeshGradient /></PlaygroundCard>
            <PlaygroundCard title="Moving Grid" trigger="Loop"><Backgrounds.MovingGrid /></PlaygroundCard>
            <PlaygroundCard title="Dot Matrix" trigger="Static"><Backgrounds.DotMatrix /></PlaygroundCard>
            <PlaygroundCard title="Aurora" trigger="Loop"><Backgrounds.AuroraBg /></PlaygroundCard>
            <PlaygroundCard title="Neon Lines" trigger="Loop"><Backgrounds.NeonLines /></PlaygroundCard>
            <PlaygroundCard title="Starfield" trigger="Loop"><Backgrounds.StarfieldCSS /></PlaygroundCard>
            <PlaygroundCard title="Gradient Wave" trigger="Loop"><Backgrounds.GradientWave /></PlaygroundCard>
            <PlaygroundCard title="Hexagon Pattern" trigger="Static"><Backgrounds.HexagonPattern /></PlaygroundCard>
            <PlaygroundCard title="Radial Pulse" trigger="Loop"><Backgrounds.RadialPulse /></PlaygroundCard>
            <PlaygroundCard title="Animated Noise" trigger="Loop"><Backgrounds.AnimatedNoise /></PlaygroundCard>
            <PlaygroundCard title="Circuit Board" trigger="Static"><Backgrounds.CircuitBoard /></PlaygroundCard>
            <PlaygroundCard title="Fog Flow" trigger="Loop"><Backgrounds.FogFlow /></PlaygroundCard>
            <PlaygroundCard title="Moving Stripes" trigger="Loop"><Backgrounds.MovingStripes /></PlaygroundCard>
            <PlaygroundCard title="Rain Effect" trigger="Loop"><Backgrounds.RainEffect /></PlaygroundCard>
            <PlaygroundCard title="Fire Embers" trigger="Loop"><Backgrounds.FireEmbers /></PlaygroundCard>
            <PlaygroundCard title="Bokeh Blur" trigger="Loop"><Backgrounds.BokehBlur /></PlaygroundCard>
            <PlaygroundCard title="Cyber Grid" trigger="Loop"><Backgrounds.CyberGrid /></PlaygroundCard>
            <PlaygroundCard title="Spotlight Follow" trigger="Hover"><Backgrounds.SpotlightFollow /></PlaygroundCard>
            <PlaygroundCard title="Vignette Pulse" trigger="Loop"><Backgrounds.VignettePulse /></PlaygroundCard>
            <PlaygroundCard title="TV Glitch" trigger="Loop"><Backgrounds.TvGlitchBg /></PlaygroundCard>
        </div>
      </section>

      {/* --- 06. DATA VIZ --- */}
      <section id="data">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">06.</span>Data Viz</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Bar Grow" trigger="Load"><Data.BarChartGrow /></PlaygroundCard>
            <PlaygroundCard title="Circle Progress" trigger="Load"><Data.CircleProgress /></PlaygroundCard>
            <PlaygroundCard title="Count Up" trigger="Load"><Data.CountUp /></PlaygroundCard>
            <PlaygroundCard title="Line Draw" trigger="Load"><Data.LineChart /></PlaygroundCard>
            <PlaygroundCard title="Pie Spin" trigger="Load"><Data.PieChart /></PlaygroundCard>
            <PlaygroundCard title="Area Fill" trigger="Load"><Data.AreaChart /></PlaygroundCard>
            <PlaygroundCard title="Scatter Pop" trigger="Load"><Data.ScatterPlot /></PlaygroundCard>
            <PlaygroundCard title="Vertical Bar" trigger="Load"><Data.VerticalProgress /></PlaygroundCard>
            <PlaygroundCard title="Radar Draw" trigger="Load"><Data.RadarChart /></PlaygroundCard>
            <PlaygroundCard title="Stacked Bar" trigger="Load"><Data.StackedBar /></PlaygroundCard>
            <PlaygroundCard title="Live Stream" trigger="Loop"><Data.LiveData /></PlaygroundCard>
            <PlaygroundCard title="Donut Chart" trigger="Load"><Data.DonutChart /></PlaygroundCard>
            <PlaygroundCard title="Heatmap" trigger="Load"><Data.Heatmap /></PlaygroundCard>
            <PlaygroundCard title="Funnel" trigger="Load"><Data.FunnelChart /></PlaygroundCard>
            <PlaygroundCard title="Gauge" trigger="Load"><Data.GaugeChart /></PlaygroundCard>
            <PlaygroundCard title="Network" trigger="Load"><Data.NetworkGraph /></PlaygroundCard>
            <PlaygroundCard title="Comparison" trigger="Load"><Data.ComparisonBars /></PlaygroundCard>
            <PlaygroundCard title="Step Tracker" trigger="Load"><Data.StepTracker /></PlaygroundCard>
            <PlaygroundCard title="Candle Stick" trigger="Static"><Data.CandleStick /></PlaygroundCard>
            <PlaygroundCard title="Mini Ring" trigger="Load"><Data.MiniRing /></PlaygroundCard>
        </div>
      </section>

      {/* --- 07. FEEDBACK --- */}
      <section id="feedback">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-secondary mr-4 font-mono text-2xl">07.</span>Feedback</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Success Modal" trigger="Click"><Feedback.SuccessModal /></PlaygroundCard>
            <PlaygroundCard title="Error Toast" trigger="Click"><Feedback.ErrorToast /></PlaygroundCard>
            <PlaygroundCard title="Warning" trigger="Loop"><Feedback.WarningAlert /></PlaygroundCard>
            <PlaygroundCard title="Info Banner" trigger="Load"><Feedback.InfoBanner /></PlaygroundCard>
            <PlaygroundCard title="Bell Shake" trigger="Hover"><Feedback.BellShake /></PlaygroundCard>
            <PlaygroundCard title="Confetti" trigger="Click"><Feedback.ConfettiBurst /></PlaygroundCard>
            <PlaygroundCard title="Typing..." trigger="Loop"><Feedback.TypingIndicator /></PlaygroundCard>
            <PlaygroundCard title="Signal" trigger="Static"><Feedback.SignalStrength /></PlaygroundCard>
            <PlaygroundCard title="404 Glitch" trigger="Hover"><Feedback.Error404 /></PlaygroundCard>
            <PlaygroundCard title="Empty State" trigger="Static"><Feedback.EmptyBox /></PlaygroundCard>
            <PlaygroundCard title="Pulse Beacon" trigger="Loop"><Feedback.PulseBeacon /></PlaygroundCard>
            <PlaygroundCard title="Access Denied" trigger="Click"><Feedback.LockShake /></PlaygroundCard>
            <PlaygroundCard title="Timer" trigger="Static"><Feedback.UrgencyTimer /></PlaygroundCard>
            <PlaygroundCard title="Online" trigger="Static"><Feedback.OnlineBadge /></PlaygroundCard>
            <PlaygroundCard title="Offline" trigger="Static"><Feedback.OfflineOverlay /></PlaygroundCard>
            <PlaygroundCard title="Skeleton Card" trigger="Loop"><Feedback.SkeletonCard /></PlaygroundCard>
            <PlaygroundCard title="Upload Check" trigger="Load"><Feedback.UploadComplete /></PlaygroundCard>
            <PlaygroundCard title="Battery Low" trigger="Loop"><Feedback.BatteryLow /></PlaygroundCard>
            <PlaygroundCard title="Fingerprint" trigger="Loop"><Feedback.FingerprintScan /></PlaygroundCard>
            <PlaygroundCard title="Eye Tracking" trigger="Mouse"><Feedback.EyeTracking /></PlaygroundCard>
        </div>
      </section>

      {/* --- 08. SOCIAL --- */}
      <section id="social">
        <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">08.</span>Social</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Heart Burst" trigger="Click"><Social.HeartBurst /></PlaygroundCard>
            <PlaygroundCard title="Follow" trigger="Click"><Social.FollowButton /></PlaygroundCard>
            <PlaygroundCard title="Comment Expand" trigger="Click"><Social.CommentExpand /></PlaygroundCard>
            <PlaygroundCard title="Share Nodes" trigger="Click"><Social.ShareNodes /></PlaygroundCard>
            <PlaygroundCard title="Avatar Stack" trigger="Hover"><Social.AvatarStack /></PlaygroundCard>
            <PlaygroundCard title="Live Count" trigger="Loop"><Social.LiveCount /></PlaygroundCard>
            <PlaygroundCard title="Bookmark" trigger="Click"><Social.BookmarkRibbon /></PlaygroundCard>
            <PlaygroundCard title="Reaction Bar" trigger="Hover"><Social.ReactionBar /></PlaygroundCard>
            <PlaygroundCard title="User Plus" trigger="Click"><Social.UserPlusAnim /></PlaygroundCard>
            <PlaygroundCard title="Voting" trigger="Click"><Social.VotingArrows /></PlaygroundCard>
            <PlaygroundCard title="Retweet" trigger="Click"><Social.RetweetButton /></PlaygroundCard>
            <PlaygroundCard title="Story Ring" trigger="Static"><Social.StoryRing /></PlaygroundCard>
            <PlaygroundCard title="Chat Bubble" trigger="Static"><Social.ChatBubble /></PlaygroundCard>
            <PlaygroundCard title="Typing Dots" trigger="Loop"><Social.TypingDotsMessage /></PlaygroundCard>
            <PlaygroundCard title="Send Plane" trigger="Click"><Social.SendPlane /></PlaygroundCard>
            <PlaygroundCard title="Verified" trigger="Static"><Social.VerifiedBadge /></PlaygroundCard>
            <PlaygroundCard title="Profile Hover" trigger="Hover"><Social.ProfileHover /></PlaygroundCard>
            <PlaygroundCard title="Swipe Reply" trigger="Drag"><Social.SwipeReply /></PlaygroundCard>
            <PlaygroundCard title="Group Chat" trigger="Static"><Social.GroupChatIcon /></PlaygroundCard>
            <PlaygroundCard title="Notification" trigger="Loop"><Social.NotifDot /></PlaygroundCard>
        </div>
      </section>

      {/* --- 09. INPUTS --- */}
      <section id="inputs">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-white/50 mr-4 font-mono text-2xl">09.</span>Inputs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <PlaygroundCard title="Floating Label" trigger="Focus"><div className="w-full max-w-[200px]"><InputVars.FloatingLabelInput /></div></PlaygroundCard>
           <PlaygroundCard title="Shake Error" trigger="Validation"><InputVars.ShakeErrorInput /></PlaygroundCard>
           <PlaygroundCard title="Border Spread" trigger="Focus"><InputVars.BorderSpreadInput /></PlaygroundCard>
           <PlaygroundCard title="Password Reveal" trigger="Click"><InputVars.PasswordReveal /></PlaygroundCard>
           <PlaygroundCard title="Search Expand" trigger="Click"><InputVars.SearchExpandInput /></PlaygroundCard>
           <PlaygroundCard title="OTP Input" trigger="Input"><InputVars.OTPInput /></PlaygroundCard>
           <PlaygroundCard title="Tag Input" trigger="Enter"><InputVars.TagInput /></PlaygroundCard>
           <PlaygroundCard title="File Dropzone" trigger="Drag"><InputVars.FileDropzone /></PlaygroundCard>
           <PlaygroundCard title="Voice Wave" trigger="Click"><InputVars.VoiceInput /></PlaygroundCard>
           <PlaygroundCard title="Credit Card" trigger="Focus"><InputVars.CreditCardInput /></PlaygroundCard>
           <PlaygroundCard title="Char Count" trigger="Input"><InputVars.CharCountInput /></PlaygroundCard>
           <PlaygroundCard title="Material Fill" trigger="Focus"><InputVars.MaterialFilledInput /></PlaygroundCard>
           <PlaygroundCard title="Inline Submit" trigger="Input"><InputVars.InlineSubmitInput /></PlaygroundCard>
           <PlaygroundCard title="Auto Resize" trigger="Input"><InputVars.AutoResizeTextarea /></PlaygroundCard>
           <PlaygroundCard title="Color Picker" trigger="Click"><InputVars.ColorInput /></PlaygroundCard>
           <PlaygroundCard title="Stepper" trigger="Click"><InputVars.StepperInput /></PlaygroundCard>
           <PlaygroundCard title="Copy Clipboard" trigger="Click"><InputVars.CopyInput /></PlaygroundCard>
           <PlaygroundCard title="Range Slider" trigger="Drag"><InputVars.SliderInput /></PlaygroundCard>
           <PlaygroundCard title="Chat Input" trigger="Focus"><InputVars.ChatInput /></PlaygroundCard>
           <PlaygroundCard title="Mentions" trigger="Static"><InputVars.MentionInput /></PlaygroundCard>
        </div>
       </section>

       {/* --- 10. LOADERS --- */}
       <section id="loaders">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-white/50 mr-4 font-mono text-2xl">10.</span>Loaders</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <PlaygroundCard title="Classic Spinner" trigger="Loop"><Loaders.ClassicSpinner /></PlaygroundCard>
            <PlaygroundCard title="Pulse Dots" trigger="Loop"><Loaders.PulseDots /></PlaygroundCard>
            <PlaygroundCard title="Bouncing Ball" trigger="Loop"><Loaders.BouncingBall /></PlaygroundCard>
            <PlaygroundCard title="Orbit" trigger="Loop"><Loaders.OrbitLoader /></PlaygroundCard>
            <PlaygroundCard title="Liquid" trigger="Loop"><Loaders.LiquidLoader /></PlaygroundCard>
            <PlaygroundCard title="Skeleton" trigger="Loop"><Loaders.SkeletonLoader /></PlaygroundCard>
            <PlaygroundCard title="Text Typing" trigger="Loop"><Loaders.TextLoader /></PlaygroundCard>
            <PlaygroundCard title="WiFi" trigger="Loop"><Loaders.WifiLoader /></PlaygroundCard>
            <PlaygroundCard title="Equalizer" trigger="Loop"><Loaders.EqualizerLoader /></PlaygroundCard>
            <PlaygroundCard title="Hourglass" trigger="Loop"><Loaders.HourglassLoader /></PlaygroundCard>
            <PlaygroundCard title="DNA" trigger="Loop"><Loaders.DNALoader /></PlaygroundCard>
            <PlaygroundCard title="Infinity" trigger="Loop"><Loaders.InfinityLoader /></PlaygroundCard>
            <PlaygroundCard title="Radar" trigger="Loop"><Loaders.RadarLoader /></PlaygroundCard>
            <PlaygroundCard title="Battery" trigger="Loop"><Loaders.BatteryLoader /></PlaygroundCard>
            <PlaygroundCard title="Gear" trigger="Loop"><Loaders.GearLoader /></PlaygroundCard>
            <PlaygroundCard title="Striped" trigger="Loop"><Loaders.StripedProgress /></PlaygroundCard>
            <PlaygroundCard title="Ripple" trigger="Loop"><Loaders.RippleLoader /></PlaygroundCard>
            <PlaygroundCard title="Flip Square" trigger="Loop"><Loaders.FlipSquareLoader /></PlaygroundCard>
            <PlaygroundCard title="Glitch" trigger="Loop"><Loaders.GlitchLoader /></PlaygroundCard>
            <PlaygroundCard title="Circle" trigger="Loop"><Loaders.CircularNumberLoader /></PlaygroundCard>
        </div>
       </section>

       {/* --- 11. IMAGES --- */}
       <section id="images">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-white/50 mr-4 font-mono text-2xl">11.</span>Images</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Zoom Hover" trigger="Hover"><Images.ImageZoom /></PlaygroundCard>
            <PlaygroundCard title="B&W to Color" trigger="Hover"><Images.GrayToColor /></PlaygroundCard>
            <PlaygroundCard title="Blur Reveal" trigger="Hover"><Images.BlurRevealImage /></PlaygroundCard>
            <PlaygroundCard title="Slide Caption" trigger="Hover"><Images.SlideCaption /></PlaygroundCard>
            <PlaygroundCard title="Ken Burns" trigger="Auto"><Images.KenBurns /></PlaygroundCard>
            <PlaygroundCard title="3D Tilt" trigger="Hover"><Images.TiltImage /></PlaygroundCard>
            <PlaygroundCard title="Glitch" trigger="Hover"><Images.GlitchImage /></PlaygroundCard>
            <PlaygroundCard title="Circle Reveal" trigger="Hover"><Images.CircleReveal /></PlaygroundCard>
            <PlaygroundCard title="Before/After" trigger="Drag"><Images.BeforeAfter /></PlaygroundCard>
            <PlaygroundCard title="Polaroid Stack" trigger="Hover"><Images.PolaroidStack /></PlaygroundCard>
            <PlaygroundCard title="Reflection" trigger="Hover"><Images.ReflectionImage /></PlaygroundCard>
            <PlaygroundCard title="Parallax" trigger="Hover"><Images.ParallaxHover /></PlaygroundCard>
            <PlaygroundCard title="Pixelate" trigger="Hover"><Images.PixelateImage /></PlaygroundCard>
            <PlaygroundCard title="Overlay Fade" trigger="Hover"><Images.OverlayFade /></PlaygroundCard>
            <PlaygroundCard title="Border Draw" trigger="Hover"><Images.BorderDrawImage /></PlaygroundCard>
            <PlaygroundCard title="Rotate In" trigger="Hover"><Images.RotateInImage /></PlaygroundCard>
            <PlaygroundCard title="Split Clip" trigger="Hover"><Images.SplitImage /></PlaygroundCard>
            <PlaygroundCard title="Gallery Stack" trigger="Auto"><Images.GalleryStack /></PlaygroundCard>
            <PlaygroundCard title="Ink Spread" trigger="Hover"><Images.InkSpread /></PlaygroundCard>
            <PlaygroundCard title="Lens Flare" trigger="Hover"><Images.LensFlare /></PlaygroundCard>
        </div>
       </section>

       {/* --- 12. ECOMMERCE --- */}
       <section id="ecom">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">12.</span>Ecommerce</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Add to Cart" trigger="Click"><Ecom.AddToCartBounce /></PlaygroundCard>
            <PlaygroundCard title="Product Lift" trigger="Hover"><Ecom.ProductCardHover /></PlaygroundCard>
            <PlaygroundCard title="Quantity" trigger="Click"><Ecom.QuantityStepper /></PlaygroundCard>
            <PlaygroundCard title="Price Flip" trigger="Hover"><Ecom.PriceTag /></PlaygroundCard>
            <PlaygroundCard title="Wishlist" trigger="Click"><Ecom.WishlistToggle /></PlaygroundCard>
            <PlaygroundCard title="Checkout" trigger="Static"><Ecom.CheckoutProgress /></PlaygroundCard>
            <PlaygroundCard title="Size Select" trigger="Click"><Ecom.SizeSelector /></PlaygroundCard>
            <PlaygroundCard title="Color Swatch" trigger="Click"><Ecom.ColorSwatch /></PlaygroundCard>
            <PlaygroundCard title="Shipping" trigger="Loop"><Ecom.ShippingTruck /></PlaygroundCard>
            <PlaygroundCard title="Coupon" trigger="Input"><Ecom.CouponInput /></PlaygroundCard>
            <PlaygroundCard title="Quick View" trigger="Hover"><Ecom.QuickView /></PlaygroundCard>
            <PlaygroundCard title="Rating" trigger="Hover"><Ecom.InteractiveRating /></PlaygroundCard>
            <PlaygroundCard title="Fly Cart" trigger="Click"><Ecom.FlyToCart /></PlaygroundCard>
            <PlaygroundCard title="Stock Meter" trigger="Static"><Ecom.StockMeter /></PlaygroundCard>
            <PlaygroundCard title="Payment" trigger="Click"><Ecom.PaymentSelect /></PlaygroundCard>
            <PlaygroundCard title="Filter Chip" trigger="Click"><Ecom.FilterChip /></PlaygroundCard>
            <PlaygroundCard title="Categories" trigger="Static"><Ecom.CategoryPill /></PlaygroundCard>
            <PlaygroundCard title="Mini Gallery" trigger="Hover"><Ecom.MiniGallery /></PlaygroundCard>
            <PlaygroundCard title="Order Status" trigger="Static"><Ecom.OrderStatus /></PlaygroundCard>
            <PlaygroundCard title="Compare" trigger="Sticky"><Ecom.CompareSticky /></PlaygroundCard>
        </div>
       </section>

       {/* --- 13. GAMIFICATION --- */}
       <section id="game">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">13.</span>Gamification</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="XP Bar" trigger="Click"><Game.XPBar /></PlaygroundCard>
            <PlaygroundCard title="Badge Unlock" trigger="Click"><Game.BadgeUnlock /></PlaygroundCard>
            <PlaygroundCard title="Card Flip" trigger="Click"><Game.GameCardFlip /></PlaygroundCard>
            <PlaygroundCard title="Coin Spin" trigger="Loop"><Game.CoinSpin /></PlaygroundCard>
            <PlaygroundCard title="Health Shake" trigger="Click"><Game.HealthBar /></PlaygroundCard>
            <PlaygroundCard title="Level Up" trigger="Click"><Game.LevelUp /></PlaygroundCard>
            <PlaygroundCard title="Loot Box" trigger="Hover"><Game.LootBox /></PlaygroundCard>
            <PlaygroundCard title="Streak" trigger="Loop"><Game.StreakFlame /></PlaygroundCard>
            <PlaygroundCard title="Mana Orb" trigger="Loop"><Game.ManaOrb /></PlaygroundCard>
            <PlaygroundCard title="Quest Item" trigger="Hover"><Game.QuestItem /></PlaygroundCard>
            <PlaygroundCard title="Achievement" trigger="Click"><Game.AchievementToast /></PlaygroundCard>
            <PlaygroundCard title="Char Select" trigger="Hover"><Game.CharacterSelect /></PlaygroundCard>
            <PlaygroundCard title="Cooldown" trigger="Click"><Game.SkillCooldown /></PlaygroundCard>
            <PlaygroundCard title="Inventory" trigger="Drag"><Game.InventorySlot /></PlaygroundCard>
            <PlaygroundCard title="Map Marker" trigger="Loop"><Game.MapMarker /></PlaygroundCard>
            <PlaygroundCard title="Combo" trigger="Click"><Game.ComboCounter /></PlaygroundCard>
            <PlaygroundCard title="Rank" trigger="Hover"><Game.RankRow /></PlaygroundCard>
            <PlaygroundCard title="Boss Warning" trigger="Loop"><Game.BossWarning /></PlaygroundCard>
            <PlaygroundCard title="Lock/Unlock" trigger="Click"><Game.LockUnlock /></PlaygroundCard>
            <PlaygroundCard title="Enemy HP" trigger="Static"><Game.EnemyHealth /></PlaygroundCard>
        </div>
       </section>

       {/* --- 14. MEDIA & AUDIO (NEW) --- */}
       <section id="media">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-primary mr-4 font-mono text-2xl">14.</span>Media & Audio</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Play/Pause Morph" trigger="Click"><Media.PlayPauseMorph /></PlaygroundCard>
            <PlaygroundCard title="Waveform" trigger="Loop"><Media.Waveform /></PlaygroundCard>
            <PlaygroundCard title="Vinyl Record" trigger="Hover"><Media.VinylRecord /></PlaygroundCard>
            <PlaygroundCard title="Volume Knob" trigger="Drag"><Media.VolumeKnob /></PlaygroundCard>
            <PlaygroundCard title="Equalizer" trigger="Loop"><Media.EqualizerColor /></PlaygroundCard>
            <PlaygroundCard title="Cassette Tape" trigger="Loop"><Media.CassetteTape /></PlaygroundCard>
            <PlaygroundCard title="Podcast Mic" trigger="Loop"><Media.PodcastMic /></PlaygroundCard>
            <PlaygroundCard title="Lyrics Karaoke" trigger="Loop"><Media.LyricsKaraoke /></PlaygroundCard>
            <PlaygroundCard title="Album 3D" trigger="Hover"><Media.AlbumCover3D /></PlaygroundCard>
            <PlaygroundCard title="Like Track" trigger="Click"><Media.LikeTrack /></PlaygroundCard>
            <PlaygroundCard title="Shuffle" trigger="Click"><Media.ShuffleToggle /></PlaygroundCard>
            <PlaygroundCard title="Airplay" trigger="Click"><Media.AirplayCast /></PlaygroundCard>
            <PlaygroundCard title="Video Scrubber" trigger="Hover"><Media.VideoScrubber /></PlaygroundCard>
            <PlaygroundCard title="Mute Toggle" trigger="Click"><Media.MuteToggle /></PlaygroundCard>
            <PlaygroundCard title="Radio Tuner" trigger="Loop"><Media.RadioTuner /></PlaygroundCard>
            <PlaygroundCard title="Mini Player" trigger="Click"><Media.MiniPlayer /></PlaygroundCard>
            <PlaygroundCard title="Playback Speed" trigger="Click"><Media.PlaybackSpeed /></PlaygroundCard>
            <PlaygroundCard title="Spectrum 3D" trigger="Loop"><Media.Spectrum3D /></PlaygroundCard>
            <PlaygroundCard title="Playlist Drag" trigger="Drag"><Media.PlaylistDrag /></PlaygroundCard>
            <PlaygroundCard title="CD Insert" trigger="Hover"><Media.CDInsert /></PlaygroundCard>
        </div>
       </section>

       {/* --- 15. DEVICE MOCKUPS (NEW) --- */}
       <section id="device">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-accent mr-4 font-mono text-2xl">15.</span>Device UI</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Dynamic Island" trigger="Click"><Device.DynamicIsland /></PlaygroundCard>
            <PlaygroundCard title="Notch Reveal" trigger="Hover"><Device.NotchReveal /></PlaygroundCard>
            <PlaygroundCard title="Phone Rotate" trigger="Loop"><Device.PhoneRotate /></PlaygroundCard>
            <PlaygroundCard title="Laptop Hinge" trigger="Click"><Device.LaptopHinge /></PlaygroundCard>
            <PlaygroundCard title="Fingerprint" trigger="Loop"><Device.ScreenFingerprint /></PlaygroundCard>
            <PlaygroundCard title="Face ID" trigger="Loop"><Device.FaceID /></PlaygroundCard>
            <PlaygroundCard title="Battery Charge" trigger="Loop"><Device.BatteryCharge /></PlaygroundCard>
            <PlaygroundCard title="Airplane Mode" trigger="Click"><Device.AirplaneToggle /></PlaygroundCard>
            <PlaygroundCard title="App Icon" trigger="Hover"><Device.AppSquircle /></PlaygroundCard>
            <PlaygroundCard title="Notification" trigger="Click"><Device.NotificationStack /></PlaygroundCard>
            <PlaygroundCard title="Home Indicator" trigger="Drag"><Device.HomeIndicator /></PlaygroundCard>
            <PlaygroundCard title="Camera Shutter" trigger="Click"><Device.CameraShutter /></PlaygroundCard>
            <PlaygroundCard title="Keyboard" trigger="Focus"><Device.KeyboardPopup /></PlaygroundCard>
            <PlaygroundCard title="Dark Mode" trigger="Click"><Device.DeviceDarkMode /></PlaygroundCard>
            <PlaygroundCard title="Split Screen" trigger="Hover"><Device.TabletSplit /></PlaygroundCard>
            <PlaygroundCard title="Watch Swipe" trigger="Drag"><Device.WatchSwipe /></PlaygroundCard>
            <PlaygroundCard title="Signal Search" trigger="Loop"><Device.SignalSearch /></PlaygroundCard>
            <PlaygroundCard title="App Library" trigger="Hover"><Device.AppLibrary /></PlaygroundCard>
            <PlaygroundCard title="Browser Tabs" trigger="Click"><Device.BrowserTabs /></PlaygroundCard>
            <PlaygroundCard title="Lock Screen" trigger="Click"><Device.LockScreen /></PlaygroundCard>
        </div>
       </section>

       {/* --- 16. TRANSITIONS --- */}
       <section id="transitions">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-secondary mr-4 font-mono text-2xl">16.</span>Transitions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PlaygroundCard title="Fade" trigger="Click"><Transitions.FadePage /></PlaygroundCard>
            <PlaygroundCard title="Slide Left" trigger="Click"><Transitions.SlideLeft /></PlaygroundCard>
            <PlaygroundCard title="Scale Up" trigger="Click"><Transitions.ScaleUp /></PlaygroundCard>
            <PlaygroundCard title="Wipe" trigger="Click"><Transitions.WipeReveal /></PlaygroundCard>
            <PlaygroundCard title="Flip" trigger="Click"><Transitions.FlipTransition /></PlaygroundCard>
            <PlaygroundCard title="Circle Mask" trigger="Click"><Transitions.CircleMask /></PlaygroundCard>
            <PlaygroundCard title="Blinds" trigger="Click"><Transitions.BlindsEffect /></PlaygroundCard>
            <PlaygroundCard title="Dissolve" trigger="Click"><Transitions.DissolvePixel /></PlaygroundCard>
            <PlaygroundCard title="Drawer" trigger="Click"><Transitions.DrawerUp /></PlaygroundCard>
            <PlaygroundCard title="Curtain" trigger="Click"><Transitions.CurtainOpen /></PlaygroundCard>
            <PlaygroundCard title="Zoom Out" trigger="Click"><Transitions.ZoomOutFade /></PlaygroundCard>
            <PlaygroundCard title="Folder Tab" trigger="Click"><Transitions.FolderTab /></PlaygroundCard>
            <PlaygroundCard title="Glitch" trigger="Click"><Transitions.GlitchTransition /></PlaygroundCard>
            <PlaygroundCard title="Morph" trigger="Click"><Transitions.MorphPage /></PlaygroundCard>
            <PlaygroundCard title="Tiles" trigger="Click"><Transitions.TilesReveal /></PlaygroundCard>
            <PlaygroundCard title="Clock Wipe" trigger="Click"><Transitions.ClockWipe /></PlaygroundCard>
            <PlaygroundCard title="Crossfade" trigger="Click"><Transitions.CrossfadeBlur /></PlaygroundCard>
            <PlaygroundCard title="Lines" trigger="Click"><Transitions.LinesSlide /></PlaygroundCard>
            <PlaygroundCard title="Cube Rotate" trigger="Click"><Transitions.RotateCube /></PlaygroundCard>
            <PlaygroundCard title="Elastic Snap" trigger="Click"><Transitions.ElasticSnap /></PlaygroundCard>
        </div>
       </section>

       {/* --- 17. MICRO (EXISTING) --- */}
       <section id="micro">
         <div className="mb-12 flex items-end gap-6 sticky top-0 bg-background/80 backdrop-blur-xl py-4 z-40 border-b border-white/5">
           <h2 className="text-4xl font-bold tracking-tight text-white"><span className="text-white/50 mr-4 font-mono text-2xl">17.</span>Micro-Interaction</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <PlaygroundCard title="Day/Night" trigger="Click"><Micro.DayNightToggle /></PlaygroundCard>
            <PlaygroundCard title="Elastic Switch" trigger="Click"><Micro.ElasticToggle /></PlaygroundCard>
            <PlaygroundCard title="Check Draw" trigger="Click"><Micro.CheckDraw /></PlaygroundCard>
            <PlaygroundCard title="Heart Pop" trigger="Click"><Micro.LikeButton /></PlaygroundCard>
            <PlaygroundCard title="Star Rating" trigger="Hover"><Micro.StarRating /></PlaygroundCard>
            <PlaygroundCard title="Volume" trigger="Drag"><Micro.VolumeSlider /></PlaygroundCard>
            <PlaygroundCard title="Trash Delete" trigger="Click"><Micro.TrashDelete /></PlaygroundCard>
            <PlaygroundCard title="Share Fan" trigger="Click"><Micro.ShareFan /></PlaygroundCard>
            <PlaygroundCard title="More Options" trigger="Hover"><Micro.MoreOptions /></PlaygroundCard>
            <PlaygroundCard title="Circular Slider" trigger="Static"><Micro.CircularSlider /></PlaygroundCard>
            <PlaygroundCard title="Download" trigger="Click"><Micro.DownloadButton /></PlaygroundCard>
            <PlaygroundCard title="Copy Icon" trigger="Click"><Micro.CopyIcon /></PlaygroundCard>
            <PlaygroundCard title="Drag Handle" trigger="Hover"><Micro.DragHandle /></PlaygroundCard>
            <PlaygroundCard title="Swipe Switch" trigger="Click"><Micro.SwipeSwitch /></PlaygroundCard>
            <PlaygroundCard title="Reactions" trigger="Hover"><Micro.ReactionPicker /></PlaygroundCard>
            <PlaygroundCard title="Accordion" trigger="Click"><Micro.AccordionChevron /></PlaygroundCard>
            <PlaygroundCard title="Upload Ring" trigger="Auto"><Micro.UploadRing /></PlaygroundCard>
            <PlaygroundCard title="Pin" trigger="Click"><Micro.PinToggle /></PlaygroundCard>
            <PlaygroundCard title="Brightness" trigger="Static"><Micro.BrightnessControl /></PlaygroundCard>
            <PlaygroundCard title="Confetti" trigger="Click"><Micro.ConfettiBtn /></PlaygroundCard>
        </div>
       </section>
    </div>
  );
}
