import { Box } from '@mui/material'
import React from 'react'
import SearchBar from '../components/SearchBar'

function HomePage() {
  return (
   <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <SearchBar />
    </Box>
  )
}

export default HomePage
