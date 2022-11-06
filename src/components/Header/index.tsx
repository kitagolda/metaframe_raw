import Container from "components/Container";

import logo from "assets/images/logo.svg";

import "./styles.scss";

const Header = () => {
  return (
    <Container>
      <img className="logo-img" src={logo} alt="logo" />
    </Container>
  );
};

export default Header;
