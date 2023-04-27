import "./scss/Header.scss";
import { Link } from "react-router-dom";


export const Header = () => {

  return(
    <div className="header">
      <h1>お酒のアプリ</h1>
      <Link to="/login">ログイン</Link><br/>
      <Link to="/signup">新規登録</Link> 
    </div>
  );
};