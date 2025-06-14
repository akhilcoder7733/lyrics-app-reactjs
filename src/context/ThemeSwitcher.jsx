import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { themeName, toggleTheme } = useThemeContext();

  return (
    <FormControl variant="standard" size="small" sx={{ ml: 2, minWidth: 50 }}>
      <InputLabel sx={{ color: "#fff", fontFamily:"cursive" }}>Theme</InputLabel>
      <Select
        value={themeName}
        onChange={(e) => toggleTheme(e.target.value)}
        sx={{
          color: "#fff",
          borderBottom: "1px solid #fff",
          "& .MuiSvgIcon-root": { color: "#fff" },
          fontFamily:"initial"
        }}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="teal">Teal</MenuItem>
        <MenuItem value="sky">Sky</MenuItem>
        <MenuItem value="pink">Pink</MenuItem>
        <MenuItem value="magenta">Magenta</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ThemeSwitcher;
