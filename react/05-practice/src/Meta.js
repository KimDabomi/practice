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
        <meta property='og:image' content={props.image} />
        <meta property='og:url' content={props.url} />
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: 'React Example',
  description: 'React.js 예제입니다.',
  keywords: 'React',
  author: '호쌤',
  url: window.location.href
};

export default Meta;