import React from 'react';
import s from './layout.module.scss';
import FixedLayer from '@/components/commons/FixedLayer';
import { motion } from 'framer-motion';
import Footer from '@/components/commons/Footer';
import { Toaster } from 'react-hot-toast';

import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <FixedLayer />
      <motion.div className={s.root}>
        <div className={s.wrapper}>
          <main>{children}</main>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default Layout;
