// import { Link } from "react-router-dom";

// export const Header = () => {

//   return(
//     <header>
//       <div className="title">
//         <Link to="/" className="title"><h1>お酒のアプリ</h1></Link>
//       </div>
//     </header>
//   );
// };

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';

export const Header = ()=> {
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            おとサーチ
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};