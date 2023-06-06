import React from "react"
import Box from "@mui/material/Box";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

import Typography from "@mui/material/Typography";

export const Header = () => {

  return(
    <Box sx={{ flexGrow: 1,height:
  "80px", bgcolor:"skyblue" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            音楽アプリ
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
    </Box>

  )
}