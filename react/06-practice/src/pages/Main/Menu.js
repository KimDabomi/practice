import React from 'react';
import styled from 'styled-components';
import MenuImg from '../../assets/img/menu.jpg';
import mq from '../../MediaQuery';

const MenuContainer = styled.div`
    img {
        border-radius: 5px;
        width: 40%;
        margin: 100px 80px 8% 5%;
        opacity: 0.75;
    }
    .menu_content {
        text-align: left;
        letter-spacing: 0.2em;
        float: left;
        width: 40%;
        margin-left: 5%;
        
        h1 {
            font-size: 40px;
            margin-top: 100px;
        }
        p {
            font-size: 14px;
            color: gray;
        }
    }
    ${mq.maxWidth('sm')`
        width: 100%;
        padding-left: 5%;
        padding-bottom: 100px;
        box-sizing: border-box;
        .menu_content {
            width: 90%;
            margin: auto;
        }
        img {
            margin: auto;
            margin-bottom: 50px;
        }
    `}
    ${mq.maxWidth('lg')`
        margin-top: 70px;
        .menu_content {
            width: 90%;
            margin: auto;
            margin-left: 5%;
            h1 {
                margin-top: 0;
            }
        }
        img {
            width: 90%;
            margin: auto;
            margin-left: 5%;
            margin-top: 30px;
        }
    `}
`;
const Menu = () => {
  return (
        <MenuContainer>
            <div>
                <div className="menu_content">
                    <h1>Our Menu</h1>
                    <br />
                    <h4>Bread Basket</h4>
                    <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
                    <br />
                    <h4>Honey Almond Granola with Fruits</h4>
                    <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
                    <br />
                    <h4>Belgian Waffle</h4>
                    <p>Vanilla flavored batter with malted flour 7.50</p>
                    <br />
                    <h4>Scrambled eggs</h4>
                    <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                    <br />
                    <h4>Blueberry Pancakes</h4>
                    <p>With syrup, butter and lots of berries 8.50</p>
                </div>
                <img src={MenuImg} alt="menu" />
            </div>
        </MenuContainer>
  );
};

export default Menu;