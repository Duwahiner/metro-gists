import { Routes, Route } from 'react-router-dom'
import { Global, css } from '@emotion/react'
import { Box } from '@mui/material'

import { Home } from './pages'
import { DetailGists } from './pages/DetailGists'

const App = (props) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail-gist' element={<DetailGists />} />
      </Routes>
  
      <Global
        styles={
          css`
            body {
              background-color: ${'theme.colors.bgInput'};
            }
            
            body::-webkit-scrollbar {
              display: block;
              background:  ${'theme.colors.bgColor'};
              width: 8px;
              border-radius: 5px;
            }
            
            body::-webkit-scrollbar-thumb {
              background: #D6DBDF;
              border-radius: 6px;
            }
          `
        }
      />
    </Box>
  )
}

export default App
