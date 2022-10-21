import React from 'react';
import styled from 'styled-components';
import Jumbotron from './Jumbotron';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';

const MainContainer = styled.section`
    width: 100%;
`;


const Main = () => {
  return (
    <MainContainer>
        <Jumbotron />
        <About />
        <hr color="#eee" />
        <Menu />
        <hr color="#eee"/>
        <Contact />
    </MainContainer>
  );
};

export default Main;