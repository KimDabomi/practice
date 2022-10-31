/*
* FsLightBoxEx
- 어떤 요소(img,button,a 등)를 클릭했을 때 지정된 이미지, 영상 등을 모달 팝업으로 표시하는 기능
- https://fslightbox.com/
- yarn add fslightbox-react

[Youtube 썸네일]
- 동영상 배경 썸네일(480x360): https://img.youtube.com/vi/영상코드/0.jpg
- 동영상 시작지점 썸네일(120x90): https://img.youtube.com/vi/영상코드/1.jpg
- 동영상 중간지점 썸네일(120x90): https://img.youtube.com/vi/영상코드/2.jpg
- 동영상 끝지점 썸네일(120x90): https://img.youtube.com/vi/영상코드/3.jpg
- 고해상도 썸네일(1280x720): https://img.youtube.com/vi/영상코드/maxresdefault.jpg
- 중간해상도 썸네일(640x480): https://img.youtube.com/vi/영상코드/sddefault.jpg
- 고품질 썸네일(480x360): https://img.youtube.com/vi/영상코드/hqdefault.jpg
- 중간품질 썸네일(320x180): https://img.youtube.com/vi/영상코드/mqdefault.jpg
- 보통품질 썸네일(120x90): https://img.youtube.com/vi/영상코드/default.jpg
*/


import React,{memo,useState} from 'react';
import styled from 'styled-components';
import FsLightbox from 'fslightbox-react';
import img01 from '../assets/img/01.jpg';
import img02 from '../assets/img/02.jpg';
import img03 from '../assets/img/03.jpg';
import img04 from '../assets/img/04.jpg';
import img05 from '../assets/img/05.jpg';

const Button = styled.button`
    border: 0;
    outline: none;
    cursor:pointer;
    padding: 0;
    margin: 0 5px;
`;

const FsLightboxEx = memo(() => {
    // 단일 이미지를 사용할 경우 모달창 표시 여부에 대한 상태값
    const [singleToggler, setSingleToggler] = useState(false);

    // 복수 이미지를 사용할 경우 모달창 표시 여부와 몇 번째 이미지를 표시할지에 대한 상태값
    const [multiToggler, setMultiToggler] = useState({
        open: false,
        index: 1
    });

    // 단일 Youtube 영상을 사용할 경우 모달창 표시 여부에 대한 상태값
    const [youtubeToggler, setYoutubeToggler] = useState(false);

    // 복수 Youtube영상을 사용할 경우 모달창 표시 여부와 몇 번째 영상을 표시할지에 대한 상태값
    const [youtubeMultiToggler, setYoutubeMultiToggler] = useState({
        open: false,
        index: 1
    });

  return (
    <div>
        <h2>FsLightbox</h2>
        
        <h3>Single Gallery</h3>
        <div>
            <Button onClick={e => {setSingleToggler(!singleToggler)}}>
                <img src={img01} width="150" alt="img01" />
            </Button>
            <FsLightbox sources={[img01]} toggler={singleToggler} />
        </div>

        <h3>Multi Gallery</h3>
        <div>
            <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 1})}>
                <img src={img01} width="150" alt="img01" />
            </Button>
            <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 2})}>
                <img src={img02} width="150" alt="img02" />
            </Button>
            <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 3})}>
                <img src={img03} width="150" alt="img03" />
            </Button>
            <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 4})}>
                <img src={img04} width="150" alt="img04" />
            </Button>
            <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 5})}>
                <img src={img05} width="150" alt="img05" />
            </Button>
            <FsLightbox toggler={multiToggler.open} sources={[img01,img02,img03,img04,img05]} slide={multiToggler.index} /> 
        </div>

        <h3>Youtube Single link</h3>
        <div>
            <Button onClick={e => setYoutubeToggler(!youtubeToggler)}>
                <img src='https://img.youtube.com/vi/7Syt5cvxzcg/maxresdefault.jpg' width='150' alt='img01' />
            </Button>
            <FsLightbox toggler={youtubeToggler} sources={['https://www.youtube.com/watch?v=7Syt5cvxzcg']} />
        </div>
        <div>
            <Button onClick={e => setYoutubeMultiToggler({open:!youtubeMultiToggler.open, index:1})}>
                <img src='https://img.youtube.com/vi/04ZxzSZ-Uvw/hqdefault.jpg' width='150' alt='img01' />
            </Button>
            <Button onClick={e => setYoutubeMultiToggler({open:!youtubeMultiToggler.open, index:2})}>
                <img src='https://img.youtube.com/vi/2Kwv0xvJqUw/hqdefault.jpg' width='150' alt='img01' />
            </Button>
            <Button onClick={e => setYoutubeMultiToggler({open:!youtubeMultiToggler.open, index:3})}>
                <img src='https://img.youtube.com/vi/l4jTnnQJy1s/hqdefault.jpg' width='150' alt='img01' />
            </Button>
            <FsLightbox toggler={youtubeMultiToggler} sources={[
                'https://www.youtube.com/watch?v=04ZxzSZ-Uvw',
                'https://www.youtube.com/watch?v=2Kwv0xvJqUw',
                'https://www.youtube.com/watch?v=l4jTnnQJy1s']} />
        </div>
    </div>
  );
});

export default FsLightboxEx;