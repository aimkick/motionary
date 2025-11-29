import { useCallback, useEffect, useRef } from 'react';

export const useBubbleSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initialize AudioContext only on client side
    if (typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        audioContextRef.current = new AudioContextClass();
      }
    }
    
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  const playPop = useCallback(() => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    
    // Resume context if suspended (browser policy)
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        // Water drop / Bubble effect
        // Sine wave dropping in pitch rapidly
        const now = ctx.currentTime;
        osc.type = 'sine';
        
        // Start high, drop low
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.1);
        
        // Short envelope
        gain.gain.setValueAtTime(0.1, now); // Keep volume low-ish
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

        osc.start(now);
        osc.stop(now + 0.1);
    } catch (e) {
        console.error("Audio play error", e);
    }
  }, []);

  return playPop;
};

