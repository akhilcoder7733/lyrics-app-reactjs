import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Snackbar,
  Alert,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import Loading from "../components/Loading";

// Styled Components
const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
  minHeight: "80vh",
}));

const ContentBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 700,
  width: "100%",
  textAlign: "center",
  backgroundColor: "transparent",
  backdropFilter: "blur(4px)",
  boxShadow: 1,
  borderRadius: theme.spacing(2),
}));

const LyricsText = styled(Typography)(({ theme }) => ({
  whiteSpace: "pre-line",
  textAlign: "center",
  marginTop: theme.spacing(3),
  lineHeight: 1.7,
  fontFamily: "Roboto Slab, serif",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.2, 3),
  fontWeight: "bold",
  fontSize: "1rem",
  borderRadius: "12px",
  textTransform: "none",
}));

export default function LyricsPage() {
  const [params] = useSearchParams();
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const artist = params.get("artist")?.toLowerCase();
  const title = params.get("title")?.toLowerCase();

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const response = await axios.get("/lyrics.json");
        const data = response.data;

        const song = data.find(
          (item) =>
            item.artist?.toLowerCase().trim() === artist?.trim() &&
            item.title?.toLowerCase().trim() === title?.trim()
        );

        if (!song || !song.lyrics) {
          throw new Error("Lyrics not found.");
        }

        setLyrics(song.lyrics);
      } catch (error) {
        if (!navigator.onLine) {
          setErrorMsg("No internet connection. Please check your network.");
        } else {
          setErrorMsg("Lyrics not found or an error occurred while loading.");
        }
        setLyrics("Lyrics not available..!");
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLyrics();
  }, [artist, title]);

  useEffect(() => {
    if (title && artist) {
      document.title = `${params.get("title")} - Lyrics by Akhil`;
    } else {
      document.title = "Lyrics by Akhil";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title, artist, params]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <ContentBox>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          {params.get("title")} - {params.get("artist")}
        </Typography>

        <Divider />

        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
          Enjoy the lyrics below. Let the music speak for your soul 🎵
        </Typography>

        {loading ? (
          <Box mt={4}>
            <Loading />
          </Box>
        ) : (
          <>
            <LyricsText variant="body1">{lyrics}</LyricsText>
            <StyledButton variant="outlined" onClick={() => navigate("/")}>
              Go Home
            </StyledButton>
          </>
        )}

        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            severity="warning"
            onClose={handleCloseSnackbar}
            sx={{ width: "100%" }}
          >
            {errorMsg}
          </Alert>
        </Snackbar>
      </ContentBox>
    </Container>
  );
}
