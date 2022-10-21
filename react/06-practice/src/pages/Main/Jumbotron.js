import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import JbrImg from '../../assets/img/top.jpg';

const JumbotronContainer = styled.div`
    width: 100%;
    padding: 0;
    
    img {
      width: 100%;
      margin-top: 3.5%;
    }
    figure {
      display: flex;
      position: relative;
      width: 100%;
      margin: 0;
    }
    figcaption {
      position: absolute;
      left: 2%;
      bottom: 0;

      h1 {
        font-size: 38px;
        letter-spacing: 0.1em;
        color: rgb(100,100,100);
        font-weight: 400;
      }
    }
    ${mq.maxWidth('sm')`
        flex-direction: column-reverse;
    `}
`;


const Main = () => {
  return (
    <JumbotronContainer>
        <div>
            <figure>
              <img src={JbrImg} alt="jbr" />
              <figcaption><h1>Le Catering</h1></figcaption>
            </figure> 
        </div>
    </JumbotronContainer>
  );
};

export default Main;