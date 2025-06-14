import { ClipLoader } from 'react-spinners';
import { Box } from '@mui/material';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <ClipLoader color="#1976d2" size={40} />
    </Box>
  );
}
