import React from 'react';
import styled from 'styled-components';
import AboutImg from '../../assets/img/about.jpg';
import mq from '../../MediaQuery';

const AboutContainer = styled.div`
    float: right;

    img {
        float: left;
        width: 40%;
        margin: 0 50px 90px 90px;
        border-radius: 5px;
        opacity: 0.75;
    }
    .about_content {
        text-align: center;
        margin-right: 90px;
        margin-top: 100px;
        line-height: 2em;
        padding-top: 30px;
        box-sizing: border-box;

        span {
            background-color: #eee;
        }
        h1 {
            font-size: 32px;
            letter-spacing: 0.3em;
            font-weight: 200;
            margin-bottom: 0;
        }
        h5 {
            font-size: 20px;
            font-weight: 100;
            letter-spacing: 0.2em;
        }
        p {
            font-size: 16px;
            letter-spacing: 0.1em;
            text-align: left;

            &:last-child {
                color: rgba(0,0,0,.6);
            }
        }
    }
    ${mq.maxWidth('sm')`
        img {
            display: none;
        }
        .about_content {
            display: block;
            width: 90%;
            text-align: center; 
            margin-left: 5%;
            h1,h5 {
                text-align: center;
            }
            p{
                text-align: justify;
                &:last-child {
                    margin-bottom: 25%;
                }
            }
        }
    `}
    ${mq.maxWidth('lg')`
        margin: 0;
        width: 100%;
        float: left;
        
        h1 {
            link-height: 1.5em;
        }
        img {
            margin: 0 5% 99%;
        }
        .about_content {
            margin-bottom: 15%;
        }
    `}
    
`;
const About = () => {
  return (
        <AboutContainer>
            <div>
                <img src={AboutImg} alt="about" />
                <div className="about_content">
                    <h1>About Catering</h1>
                    <br />
                    <h5>Tradition since 1889</h5>
                    <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span>seasonal</span> ingredients.</p>
                    <br />
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </AboutContainer>
  );
};

export default About;