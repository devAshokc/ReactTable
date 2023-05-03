import React from 'react'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export const GloblFilter = ( {filter, setFilter}) => {
  return (
    <Box className='GlobalFilter' >
        <TextField  label="Global Search" type="search" value= {filter || ''} id='Search' sx={{width:{md:"400px", xs:"200px",sm:"200px"}}} onChange={(e)=> setFilter 
        (e.target.value)}/>
    </Box>
  )
}
