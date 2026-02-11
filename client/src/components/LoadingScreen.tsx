import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[hsl(var(--gold)/0.08)] via-background to-background" />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: Math.random() * 100 + 50,
                  x: Math.random() * window.innerWidth
                }}
                animate={{
                  opacity: [0, 0.6, 0],
                  y: -100,
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute w-1 h-1 rounded-full bg-[hsl(var(--gold))]"
                style={{ left: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          {/* Orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] border border-[hsl(var(--gold)/0.1)] rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] border border-[hsl(var(--gold)/0.15)] rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-[200px] h-[200px] border border-[hsl(var(--gold)/0.2)] rounded-full"
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo with glow effect */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Glow backdrop */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 60px 20px rgba(201, 162, 77, 0.1)",
                    "0 0 80px 30px rgba(201, 162, 77, 0.2)",
                    "0 0 60px 20px rgba(201, 162, 77, 0.1)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full"
              />

              {/* Logo */}
              <motion.img
                src="/favicon1.png"
                alt="Rivendell AI"
                className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10"
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(201, 162, 77, 0.3))",
                    "drop-shadow(0 0 20px rgba(201, 162, 77, 0.5))",
                    "drop-shadow(0 0 10px rgba(201, 162, 77, 0.3))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Brand name with shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold-gradient shimmer-text">
                Rivendell AI
              </h1>
            </motion.div>

            {/* Greeting text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-4 text-center"
            >
              <p className="text-muted-foreground text-lg italic font-serif">
                Welcome, traveler...
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="mt-8 w-48 h-0.5 bg-[hsl(var(--gold)/0.2)] rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-6 text-sm text-muted-foreground/60 tracking-widest uppercase"
            >
              Crafting Digital Sanctuaries
            </motion.p>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[hsl(var(--gold)/0.2)] rounded-tl-xl" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[hsl(var(--gold)/0.2)] rounded-tr-xl" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[hsl(var(--gold)/0.2)] rounded-bl-xl" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[hsl(var(--gold)/0.2)] rounded-br-xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
