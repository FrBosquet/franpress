import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Content = ({ title, subtitle, date, photoAuthor, tags, content }) => (
	<div>

	</div>
)

Content.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	date: PropTypes.string,
	photoAuthor: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string),
	content: PropTypes.object
}

export default Content