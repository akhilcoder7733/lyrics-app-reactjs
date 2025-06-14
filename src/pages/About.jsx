import React, { useEffect } from 'react';
import { Box, Typography, Avatar, Container, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material/styles';

// Sample avatar or logo (use your own image path here)
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(14),
  height: theme.spacing(14),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  marginBottom: theme.spacing(2),
  placeSelf:"center"
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  color: '#0064cf',
  marginBottom: theme.spacing(1),
  fontFamily:"Rubik, sans-serif"
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: '#555',
  marginBottom: theme.spacing(2),
  textAlign: 'center',
    fontFamily:"Rubik, sans-serif"

}));

const InfoBox = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.2), // 10% opacity of primary color
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  textAlign: 'center',
}));


function About() {
    const navigate =useNavigate();
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "About Us - Lyrics by Akhil";
  }, []);
  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 6 }}>
      <InfoBox>
        <StyledAvatar alt="App Logo" src={`${process.env.PUBLIC_URL}/Akhil.jpg`} />

        <Title>Lyrics by Akhil</Title>
        <Subtitle>Your gateway to discovering song lyrics quickly and easily.</Subtitle>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" sx={{ color: '#444',   fontFamily:"Rubik, sans-serif" }}>
          This website was built using <strong>React.js</strong> and <strong>Material UI</strong> for a smooth and modern experience.
          Search for your favorite songs and artists, explore lyrics, and enjoy the rhythm of your favorite tunes.
        </Typography>

        <Typography variant="body2" sx={{ mt: 3, color: '#777' }}>
          Created with ❤️ by Akhil &nbsp;|&nbsp; © {new Date().getFullYear()}
        </Typography>
        <Subtitle sx={{mt:2, cursor:"pointer", textDecoration:"underline"}} onClick={()=>navigate('/')}>Back to search</Subtitle>
      </InfoBox>
    </Container>
  );
}

export default About;
