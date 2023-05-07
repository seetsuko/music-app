import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MailIcon from '@mui/icons-material/Mail';

export const NavbarData = [
  {
    title: "HOME",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "お酒一覧",
    icon: <AccountCircleIcon />,
    link: "/alchol-list",
  },
  {
    title: "HOBBY",
    icon: <MusicNoteIcon />,
    link: "/hobby",
  },
  {
    title: "CONTACT",
    icon: <MailIcon />,
    link: "/contact",
  },

];