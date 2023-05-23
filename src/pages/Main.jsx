import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <body className="main_bg">
        <div className="wrap">
          <div className="mainIndex mw">
            <main className="index_center">
              <div className="main_logo">
                <img
                  src={`${process.env.PUBLIC_URL}/img/main_center_logo.png`}
                  alt="main_logo"
                />
                <p>나만의 대전명소를 MAP’sMART에서 담아보세요!</p>
              </div>
              <div className="persona">
                <img
                  className="swing"
                  src={`${process.env.PUBLIC_URL}/img/Personas1.png`}
                  alt="Personas1"
                />
                <img
                  className="swing2"
                  src={`${process.env.PUBLIC_URL}/img/Personas2.png`}
                  alt="Personas2"
                />
                <img
                  className="swing3"
                  src={`${process.env.PUBLIC_URL}/img/Personas3.png`}
                  alt="Personas3"
                />
                <img
                  className="swing4"
                  src={`${process.env.PUBLIC_URL}/img/Personas4.png`}
                  alt="Personas4"
                />
              </div>
            </main>
            <div className="main_btn">
              <button>
                <Link to="/Self">장소 담으러가기</Link>
              </button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Main;
