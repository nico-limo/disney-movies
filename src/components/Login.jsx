import React from "react";
import styled from "styled-components";
const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <Logos>
            <ImageHulu src="/images/hulu.png" alt="" />
            <ImageDisney src="/images/logo.svg" alt="" />
            <ImageEspn src="/images/espn.png" alt="" />
          </Logos>
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

//Styled Components
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/bg.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Logos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;

`;

const ImageDisney = styled.img`
  margin-bottom: 12px;
  color: white;
  max-width: 280px;
  display: block;
  width: 100%;
  opacity: 1;
  transition: 0.5s ease;
  animation-name: floating;
  animation-duration: 3.4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  &:hover {
    transition: 0.5s ease;
    opacity: 0.5;
  }
`;

const ImageHulu = styled.img`
  color: white;
  max-width: 120px;
  margin-top: 35px;
  height: 40%;
  display: block;
  width: 100%;
  opacity: 1;
  transition: 0.5s ease;
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  &:hover {
    transition: 0.5s ease;
    opacity: 0.5;
  }
  @keyframes floating {
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }    
}
`;


const ImageEspn = styled.img`
  color: white;
  max-width: 200px;
  margin-top: 20px;
  height: 100%;
  display: block;
  width: 100%;
  opacity: 1;
  transition: 0.5s ease;
  animation-name: floating;
  animation-duration: 2.4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  &:hover {
    transition: 0.5s ease;
    opacity: 0.5;
  }
  @keyframes floating {
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }    
}
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    background-color: #0483ee;
    transition: 0.5s ease;
  }
  @keyframes floating {
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }    
}
`;

const Description = styled.p`
  color: #f9f9f9;
  font-size: 11px;
  font-weight:800;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  align-self: center;
  width: 100%;
`;
export default Login;
