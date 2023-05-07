import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./css/Footer.css";

export const Footer = () => {

  return(
    <footer>
      <div>
        <a className='icon-link' href="https://twitter.com/drop_drop_stc">
          <TwitterIcon/><p>Twitter</p>
        </a>
        <a className='icon-link' href="https://github.com/seetsuko">
          <GitHubIcon /><p>GitHub</p>
        </a>
      </div>
      <p>ⓒ 2023 Setsuko</p>
    </footer>
  );
};