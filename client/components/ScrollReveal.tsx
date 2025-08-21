import { motion } from "framer-motion";
import { useScrollReveal, fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "staggerContainer";
  delay?: number;
  className?: string;
}

const animations = {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer
};

export function ScrollReveal({ 
  children, 
  animation = "fadeInUp", 
  delay = 0,
  className = ""
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const selectedAnimation = animations[animation];
  
  // Add delay to the animation
  const animationWithDelay = {
    ...selectedAnimation,
    visible: {
      ...selectedAnimation.visible,
      transition: {
        ...selectedAnimation.visible.transition,
        delay: delay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={animationWithDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
