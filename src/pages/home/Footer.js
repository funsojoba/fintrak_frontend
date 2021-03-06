import styled from "styled-components";
import ImageBox from "../../components/imageBox";
import Img from "../../components/img/img";

const FooterDiv = styled.div`
  background: #fff;
  padding: 50px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const FooterFlex = styled.div`
  flex: 1;
  display: flex;
`;

const A = styled.a`
  padding: 5px;
  background: #1c246d;
  display: inline-block;
  color: #f6dc7d;
  border-radius: 5px;
  margin: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all ease-in 100ms;

  &:hover {
    transform: scale(1.1);
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <FooterFlex>
        <ImageBox width="70px">
          <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629388877/fintrak/FinLogoG_wtxguc.png" />
        </ImageBox>
      </FooterFlex>

      <FooterFlex>
        <A href="https://www.facebook.com/funsojoba" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </A>
        <A href="https://twitter.com/funsoJoba" target="_blank">
          <i className="fab fa-twitter"></i>
        </A>
        <A
          href="https://www.linkedin.com/in/funso-joba-784b2914b/"
          target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </A>
        <A href="https://www.instagram.com/funsojoba/" target="_blank">
          <i className="fab fa-instagram"></i>
        </A>
      </FooterFlex>
    </FooterDiv>
  );
};

export default Footer;
