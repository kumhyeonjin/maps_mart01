import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="hd">
        <div className="hdCon mw">
          <Link to="/">
            <img
              className="hdLogo"
              src={`${process.env.PUBLIC_URL}/img/header_logo.png`}
              alt="header_logo"
            />
          </Link>
          <div className="per">
            <a>로그인</a>
            <a>마이페이지</a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
