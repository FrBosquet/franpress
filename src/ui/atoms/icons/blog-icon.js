import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const BlogIcon = ({ color }) =>
	(
		<Fragment>
			<defs>
				<clipPath id="_clipPath_ImKH9VeGZ12Bv1f9cPTOoiokSEXH02aK">
					<rect width="100" height="100"/>
				</clipPath>
			</defs>
			<g clipPath="url(#_clipPath_ImKH9VeGZ12Bv1f9cPTOoiokSEXH02aK)">
				<rect width="100" height="100" fillOpacity="0"/>
				<path d=" M 10.463 52.705 C 11.2 53.472 12.218 53.906 13.281 53.906 C 14.345 53.906 15.362 53.472 16.099 52.705 L 25.474 42.94 C 26.172 42.212 26.563 41.243 26.563 40.234 L 26.563 3.906 C 26.563 1.749 24.814 0 22.656 0 L 3.906 0 C 1.749 0 0 1.749 0 3.906 L 0 40.234 C 0 41.243 0.39 42.212 1.088 42.94 L 10.463 52.705 Z  M 7.813 7.813 L 18.75 7.813 L 18.75 38.663 L 13.281 44.36 L 7.813 38.663 L 7.813 7.813 Z " fill={ color }/>
				<path d=" M 40.234 7.813 L 96.094 7.813 C 98.251 7.813 100 6.064 100 3.906 C 100 1.749 98.251 0 96.094 0 L 40.234 0 C 38.077 0 36.328 1.749 36.328 3.906 C 36.328 6.064 38.077 7.813 40.234 7.813 Z " fill={ color }/>
				<path d=" M 96.094 92.188 L 3.906 92.188 C 1.749 92.188 0 93.936 0 96.094 C 0 98.251 1.749 100 3.906 100 L 96.094 100 C 98.251 100 100 98.251 100 96.094 C 100 93.936 98.251 92.188 96.094 92.188 Z " fill={ color }/>
				<path d=" M 96.094 69.141 L 3.906 69.141 C 1.749 69.141 0 70.889 0 73.047 C 0 75.204 1.749 76.953 3.906 76.953 L 96.094 76.953 C 98.251 76.953 100 75.204 100 73.047 C 100 70.889 98.251 69.141 96.094 69.141 Z " fill={ color }/>
				<path d=" M 96.094 23.047 L 40.234 23.047 C 38.077 23.047 36.328 24.796 36.328 26.953 C 36.328 29.111 38.077 30.859 40.234 30.859 L 96.094 30.859 C 98.251 30.859 100 29.111 100 26.953 C 100 24.796 98.251 23.047 96.094 23.047 Z " fill={ color }/>
				<path d=" M 96.094 46.094 L 40.234 46.094 C 38.077 46.094 36.328 47.843 36.328 50 C 36.328 52.157 38.077 53.906 40.234 53.906 L 96.094 53.906 C 98.251 53.906 100 52.157 100 50 C 100 47.843 98.251 46.094 96.094 46.094 Z " fill={ color }/>
			</g>
		</Fragment>
	)

BlogIcon.propTypes = {
	color: PropTypes.string
}
  
BlogIcon.defaultProps = {
	color: '#931A38'
}
  
export default BlogIcon