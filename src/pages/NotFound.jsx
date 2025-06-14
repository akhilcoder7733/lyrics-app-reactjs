import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Wrapper = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const ErrorBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'light' 
    ? theme.palette.grey[100] 
    : theme.palette.grey[900],
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  maxWidth: 500,
}));

const Icon = styled(ErrorOutlineIcon)(({ theme }) => ({
  fontSize: 80,
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

function NotFound() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ErrorBox>
        <Icon />
        <Typography variant="h3" gutterBottom>
          404
        </Typography>
        <Typography variant="h6" gutterBottom>
          Oops! Page not found.
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate('/')}
        >
          Go Home
        </Button>
      </ErrorBox>
    </Wrapper>
  );
}

export default NotFound;
