
import React from 'react'
import {Typography,Link,Box }from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, backgroundColor: '#f8f8f8', padding: '10px 0', textAlign: 'center' }} >
        <Typography variant="body2" color="secondary" align="center"  sx={{ position:"fixd ", bottom:0, }}>
        Copyright ©<Link href="https://www.clarusway.com/">Clarusway</Link>
        {new Date().getFullYear()}
      </Typography> {/* from inteties page (html entities)*/}
    </Box>
  )
}
