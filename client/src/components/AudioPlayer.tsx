import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.2); // Start with low volume
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        // Attempt to auto-play on mount if already interacted (unlikely on first load)
        // or set up interaction listener
        const handleInteraction = () => {
            if (!hasInteracted) {
                setHasInteracted(true);
                // Try to play if not already playing
                if (audioRef.current && !isPlaying) {
                    audioRef.current.play().then(() => {
                        setIsPlaying(true);
                    }).catch(err => {
                        console.log("Audio autoplay prevented:", err);
                        // Expected behavior in many browsers until user interaction
                    });
                }
            }
        };

        window.addEventListener('click', handleInteraction);
        return () => window.removeEventListener('click', handleInteraction);
    }, [hasInteracted, isPlaying]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(err => console.error("Play error:", err));
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <audio
                ref={audioRef}
                loop
                src="/ambient.mp3" // Ensure this file exists in public/
            />

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-[hsl(var(--gold)/0.2)] flex items-center justify-center text-[hsl(var(--gold))] shadow-lg hover:shadow-[hsl(var(--gold)/0.2)] transition-all"
                aria-label={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
            >
                <AnimatePresence mode="wait">
                    {isPlaying ? (
                        <motion.div
                            key="playing"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            <Volume2 className="w-5 h-5" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="muted"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            <VolumeX className="w-5 h-5" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
