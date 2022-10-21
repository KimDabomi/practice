import React from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';

const FooterContainer = styled.footer`
    text-align: center;
    background-color: #eee;
    padding: 30px 0;
    box-sizing: border-box;
    ${mq.maxWidth('sm')`
        margin-top: 100px;
    `}
    ${mq.maxWidth('lg')`
        margin-top: 100px;
    `}

    p {
        color:black;
        font-size: 14px;
        a {
            color: black;
        }
    }
`;


const Footer = () => {
  return (
    <FooterContainer>
        <p>
            Powered by <a href="#">w3.css</a>
        </p>
    </FooterContainer>
  );
};

export default Footer;