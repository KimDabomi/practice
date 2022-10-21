import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';

const ContactContainer = styled.div`
    clear: both;
    margin: 90px 70px 90px 70px;
    ${mq.maxWidth('sm')`
        margin: 0;
        width: 90%;
        margin: auto;
    `}
    ${mq.maxWidth('lg')`
        margin: 0;
        width: 90%;
        margin: auto;
    `}
    h1 {
        letter-spacing: 0.2em;
        margin-bottom: 20px;
        font-size: 40px;
        margin-top: 80px;
    }
    p {
        font-size: 14px;
        margin-top: 20px;
        b {
            font-weight: bold;
            font-size: 18px;
            color: rgb(0, 99, 107);
        }
    }
    .contact_form {
        input {
            text-decoration: none;
            list-style: none;
            font-size: 14px;
            border: 0;
        }
        input[type="datetime-local"] {
            width: 100%;
        }
        button {
            border: 0;
            width: 150px;
            height: 40px;
            font-size: 15px;
            
            &:hover {
                background-color: #ccc;
            }
        }
    }
    
`;
const Contact = () => {
  return (
        <ContactContainer>
            <div>
                <div className="contact">
                    <h1>Contact</h1>
                    <br />
                    <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
                    <p>
                        <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
                    </p>
                    <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
                    <form className="contact_form">
                        <p><input type="text" name="name" placeholder="Name" /></p>
                        <hr />
                        <p><input type="number" name="number" placeholder="How many people" /></p>
                        <hr />
                        <p><input type="datetime-local" name="datetime" defaultValue="2020-12-30T19:10"/></p>
                        <hr />
                        <p><input type="text" name="message" placeholder="Message \ Special requirements" /></p>
                        <hr />
                        <p><button type="submit">SEND MESSAGE</button></p>
                    </form>
                </div>
            </div>
        </ContactContainer>
  );
};

export default Contact;