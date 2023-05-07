import { useRecoilState } from "recoil";
import "./css/Header.css";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { menuOpenState } from "./atom/menuOpenState";

export const Header = () => {

  const [ open, setOpen ] = useRecoilState(menuOpenState);

  return(
    <header>
      <div className="icon">
      <IconButton
        size="large"
        color="inherit"
        onClick={()=>setOpen(!open)}
        >
        {open ? <></>:<MenuIcon/>}
      </IconButton>
      </div>
      <div className="title">
        <Link to="/" className="title"><h1>お酒のアプリ</h1></Link>
      </div>
    </header>
  );
};