import './header.css'
import { CiMenuKebab } from "react-icons/ci";





const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1><span>Blb</span> coffe</h1>
      </div>
      <div className="search">
        <input type="text" placeholder='serhe'/>
        <button>serch</button>
      </div>
      <div className="profile">
        <div className="userprof">
        <div className="pic">
          <img src="https://i.ibb.co/nQ7zFCB/download-1-modified.png" alt="" />
        </div>
        <div className="userName">
          <h3>abdellah jellouli</h3>
        </div>
        </div>
        <div className="log-set">
        <CiMenuKebab />
        </div>
      </div>
    </header>
  );
}

export default Header;
