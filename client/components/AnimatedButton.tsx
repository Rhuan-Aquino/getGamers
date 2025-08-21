import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  animationType?: "pulse" | "bounce" | "scale" | "glow" | "slide";
  children: React.ReactNode;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, animationType = "scale", children, asChild, ...props }, ref) => {
    const getAnimation = () => {
      switch (animationType) {
        case "pulse":
          return {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            animate: { 
              boxShadow: [
                "0 0 0 0 rgba(168, 85, 247, 0.4)",
                "0 0 0 10px rgba(168, 85, 247, 0)",
                "0 0 0 0 rgba(168, 85, 247, 0)"
              ]
            },
            transition: { 
              boxShadow: { repeat: Infinity, duration: 2 },
              scale: { duration: 0.2 }
            }
          };
        
        case "bounce":
          return {
            whileHover: { 
              scale: 1.1,
              rotate: [0, -2, 2, -2, 0],
              transition: { rotate: { duration: 0.3 } }
            },
            whileTap: { scale: 0.9 }
          };
        
        case "glow":
          return {
            whileHover: { 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
              transition: { duration: 0.3 }
            },
            whileTap: { scale: 0.95 }
          };
        
        case "slide":
          return {
            whileHover: { 
              scale: 1.05,
              x: [0, -2, 2, 0],
              transition: { x: { duration: 0.3 } }
            },
            whileTap: { scale: 0.95 }
          };
        
        default: // scale
          return {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            transition: { duration: 0.2 }
          };
      }
    };

    // If asChild is true, we need to handle it differently
    if (asChild) {
      return (
        <motion.div {...getAnimation()}>
          {children}
        </motion.div>
      );
    }

    return (
      <motion.div {...getAnimation()}>
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden transition-all duration-300",
            className
          )}
          {...props}
        >
          <motion.span
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.9 }}
            className="relative z-10 flex items-center justify-center"
          >
            {children}
          </motion.span>
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
            whileHover={{
              translateX: "200%",
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
          />
        </Button>
      </motion.div>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
