import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  padding: theme.spacing(4, 2),
  marginTop: 'auto',
  textAlign: 'center',
  boxShadow: '0 -2px 6px rgba(0,0,0,0.1)',
  transition: "all 0.8s ease",
}));

function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Typography variant="body1" fontWeight={500}>
          © {new Date().getFullYear()} Lyrics by Akhil. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          Made with ❤️ using React & Material UI
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          | Terminal Wizard |
        </Typography>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
