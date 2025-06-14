import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Autocomplete,
  TextField,
  Button,
  Stack,
  Snackbar,
  Alert,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import Loading from './Loading';
import axios from 'axios';

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.2, 3),
  fontWeight: 'bold',
  fontSize: '1rem',
  borderRadius: '12px',
  textTransform: 'none',
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  minHeight: '60vh',
  gap: theme.spacing(3),
}));

export default function SearchBar() {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [artistOptions, setArtistOptions] = useState([]);
  const [titleOptions, setTitleOptions] = useState([]);
  const navigate = useNavigate();
  const [allArtistData, setAllArtistData] = useState({});


  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const res = await axios.get(`${process.env.PUBLIC_URL}/filterData.json`);
        setArtistOptions(Object.keys(res.data.artists)); // ✅ Array of artist names
setTitleOptions([]); // titles are now dynamic
setAllArtistData(res.data.artists); // <-- you'll need this to access titles later
      } catch (err) {
        console.error('Error loading filter data:', err);
      }
    };
    fetchFilterData();
  }, []);

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.title = "Search - Home - Lyrics by Akhil";
    }, []);

  const handleSearch = () => {
    if (!artist.trim() || !title.trim()) {
      setError('Please fill in both Artist and Song Title.');
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`/lyrics?artist=${encodeURIComponent(artist)}&title=${encodeURIComponent(title)}`);
    }, 1000);
  };

  const handleClear = () => {
    setArtist('');
    setTitle('');
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <StyledContainer>
      <Typography variant="h4" fontWeight={600} textAlign="center" sx={{ fontFamily: 'Savate, sans-serif' }}>
        Search Your Favorite Lyrics
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center">
        Enter an artist and song title to discover lyrics instantly.
      </Typography>

      <Stack spacing={2} width="100%" maxWidth={400}>
        <Autocomplete
          freeSolo
          options={artistOptions}
          inputValue={artist}
          onInputChange={(e, newValue) => {
  setArtist(newValue);
  const titles = allArtistData[newValue];
  setTitleOptions(Array.isArray(titles) ? titles : []);
}}

          renderInput={(params) => <TextField {...params} label="Artist" fullWidth />}
        />
        <Autocomplete
          freeSolo
          options={titleOptions}
          inputValue={title}
          onInputChange={(e, newValue) => setTitle(newValue)}
          renderInput={(params) => <TextField {...params} label="Song Title" fullWidth />}
        />

        <Stack direction="row" spacing={2} justifyContent="center">
          <StyledButton variant="contained" onClick={handleSearch} disabled={loading}>
            Search
          </StyledButton>
          <StyledButton variant="outlined" onClick={handleClear} disabled={loading}>
            Clear
          </StyledButton>
        </Stack>

        {loading && <Loading />}
      </Stack>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={handleCloseSnackbar} sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
}
