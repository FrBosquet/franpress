import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const ContentBodyImageLayout = styled.figure`
    width: 100%;
    padding: 0;
    margin: 0;

    & img {
      width: 100%
    }

    & figcaption {
      font-family: 'Barlow', sans-serif;
      font-size: 12px;
      color: #4B0013;
      font-weight: 700;
      text-align: center;
    }
  `

const ContentBodyImage = ({ content }) => <ContentBodyImageLayout>
	<img src={content.url} alt={content.caption}/>
	<figcaption>{content.caption}</figcaption>
</ContentBodyImageLayout>

ContentBodyImage.propTypes = {
	content: PropTypes.shape({
		url: PropTypes.string,
		caption: PropTypes.string
	})
}

export default ContentBodyImage