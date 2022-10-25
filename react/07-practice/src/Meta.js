import React from 'react'
import {Helmet,HelmetProvider} from 'react-helmet-async';

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset='utf-8' />
        <title>{props.title}</title>
        {/* SEO 태그 */}
        <meta name='description' content={props.description} />
        <meta name='keywords' content={props.keywords} />
        <meta name='author' content={props.author} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={props.title} />
        <meta property='og:description' content={props.description} />
        <meta property='og:url' content={props.url} />
        
        {/* 구글 웹폰트 적용 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />

        {/* Helmet 안에서 CSS 적용 */}
        <style type="text/css">{`
        * {
          font-family: 'Noto Sans', sans-serif;
        }
        body {
          margin: 0;
          padding: 30px;
        }
        `}</style>
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: 'React Example',
  description: 'React.js 예제입니다.',
  keywords: 'React',
  author: '호쌤',
  subject: 'React.js Frontend Programming',
  copyright: "Lee K.H",
  url: window.location.href,
  image: null,
  icon: null,
  shortcutIcon: null,
  appleTouchIcon: null
};

export default Meta;