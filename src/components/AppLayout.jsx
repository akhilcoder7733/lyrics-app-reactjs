// src/components/AppLayout.jsx
import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import BackImg from '../assets/woods.jpg';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${BackImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'blur(8px)',
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: -2,
}));

const Overlay = styled(Box)(() => ({
  position: 'fixed',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.2)', // optional dark overlay
  zIndex: -1,
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  zIndex: 0,
}));

export default function AppLayout({ children }) {
  return (
    <Box>
      <BackgroundContainer />
      <Overlay />
      <ContentWrapper>{children}</ContentWrapper>
    </Box>
  );
}
