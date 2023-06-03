// include the prop type of MuiButton
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

type MotionButtonType = {
  children: React.ReactNode; // props from motion.div
  motionProps?: React.ComponentProps<typeof motion.div>;
} & React.ComponentProps<typeof Button>;
export const MoButton: React.FC<MotionButtonType> = ({
  children,
  motionProps,
  ...props
}) => (
  <motion.div
    style={{ cursor: 'pointer', borderRadius: '50000px' }}
    whileHover={{ scale: 1.07 }}
    whileTap={{
      scale: 0.89,
    }}
    {...motionProps}
  >
    <Button variant="contained" color="primary" size="large" {...props}>
      {children}
    </Button>
  </motion.div>
);
