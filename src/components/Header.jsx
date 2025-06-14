import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Fade,
  Box,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "../context/ThemeSwitcher";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  // background: "#0064cf",
  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  minHeight: 100,
  justifyContent: "center",
  transition: "all 0.8s ease",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Edu NSW ACT Hand Pre, cursive",
  fontWeight: 600,
  letterSpacing: "1px",
  color: "#ffffff",
  fontSize: "1.5rem",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  fontWeight: 500,
  textDecoration: "none",
  fontSize: "1rem",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const ScrollToTopButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  zIndex: 9999,
  "&:hover": {
    backgroundColor: "#004bb5",
  },
}));

function Header() {
  const [showScroll, setShowScroll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <StyledAppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Title>Lyrics by Akhil</Title>
              <Box display="flex" alignItems="center" gap={2}>
                <ThemeSwitcher />
                <StyledLink href="#about" onClick={() => navigate("/about")}>
                  About
                </StyledLink>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Fade in={showScroll}>
        <ScrollToTopButton
          onClick={scrollToTop}
          size="large"
          aria-label="back to top"
        >
          <KeyboardArrowUpIcon fontSize="inherit" />
        </ScrollToTopButton>
      </Fade>
    </>
  );
}

export default Header;
