/*
 * React Simple Image Slider
-  https://github.com/kimcoder/react-simple-image-slider#readme
- yarn add react-simple-image-slider
*/

import React,{memo} from 'react';
import ImageSlider from 'react-simple-image-slider';
import slide01 from '../assets/img/01.jpg';
import slide02 from '../assets/img/02.jpg';
import slide03 from '../assets/img/03.jpg';
import slide04 from '../assets/img/04.jpg';

const Slider = memo(() => {
  const images = [
    {url:slide01},
    {url:slide02},
    {url:slide03},
    {url:slide04}
  ];

  return (
    <div>
      <ImageSlider 
        width={480}
        height={720}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2.0}
        loop={true}
        style={{margin: 'auto'}}
        />
    </div>
  );
});

export default Slider;