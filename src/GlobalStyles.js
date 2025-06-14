// src/GlobalStyles.js
import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      'body': {
        transition: 'background-color 0.4s ease, color 0.4s ease',
      },
      '#root': {
        transition: 'background-color 0.4s ease, color 0.4s ease',
      }
    }}
  />
);

export default GlobalStyles;
