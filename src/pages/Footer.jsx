function Footer() {
  return (
    <>
      <footer className="ft">
        <div className="footCon mw">
          <img
            className="foot_logo"
            src={`${process.env.PUBLIC_URL}/img/main_logo.png`}
            alt="footer_logo"
          />
          <p>footer</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
