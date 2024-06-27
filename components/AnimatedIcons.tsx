
import { motion } from 'framer-motion';

interface IconProps {
  icon: string; // URL for the icon image
  alt: string; // Alt text for accessibility
  delay: number; // Animation delay in seconds
  left: number; // Horizontal position
  top: number; // Vertical position
}

const AnimatedIcon: React.FC<IconProps> = ({ icon, alt, delay, left, top }) => {
  return (
    <motion.div
      style={{
        opacity: 0,
        translateY: `${top}px`,
        translateX: `${left}px`, // Adjust horizontal position
      }}
      initial={{
        opacity: 0,
        translateY: `${top}px`,
        translateX: `${left}px`, // Adjust initial position
      }}
      animate={{ opacity: 1, translateY: 0, translateX: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      <img src={icon} alt={alt} style={{ width: '40px', height: '40px', margin: '10px', transform: 'rotate(0deg)' }} />
    </motion.div>
  );
};

export default AnimatedIcon;






