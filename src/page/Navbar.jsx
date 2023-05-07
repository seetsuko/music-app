import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { NavbarData } from "../NavbarDeta";
import { menuOpenState } from "../atom/menuOpenState";
import "../css/Navbar.css";


export const Navbar = () => {

  const [ open, setOpen ] = useRecoilState(menuOpenState);

  return(
    <div className="sidebar">
      <IconButton
        size="large"
        color="inherit"
        onClick={()=> setOpen(!open)}
      >
        <CloseIcon/>
      </IconButton>
      <ul className="sidebar-list">
      {NavbarData.map((value, key)=>{
        return(
          <li 
            key={key}
            id={window.location.pathname === value.link ? "active" : ""} 
            className="row" 
          >
            <Link to={value.link} onClick={()=>setOpen(false)} className='link'>
            <div id="icon">{value.icon}</div>
            <div id="title">{value.title}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
  );
};