import React,{memo,useCallback} from 'react';
import noImg from '../assets/img/noImg.png';

const ImageView = memo(({src,alt}) => {
    const onImgError = useCallback(e => {
        e.currentTarget.src = noImg;
    },[]);
    
    return (
        <img src={src||noImg} onError={onImgError} alt={alt} />
    );
});

export default ImageView;