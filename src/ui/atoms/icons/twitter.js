import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const TwitterIcon = ({ color }) =>
	(
		<Fragment>
			<defs>
				<clipPath id="_clipPath_ImKH9VeGZ12Bv1f9cPTOoiokSEXH02aK">
					<rect width="100" height="100"/>
				</clipPath>
			</defs>
			<g clipPath="url(#_clipPath_ImKH9VeGZ12Bv1f9cPTOoiokSEXH02aK)">
				<rect width="100" height="100" fillOpacity="0"/>
				<path d=" M 100 18.996 C 96.319 20.627 92.37 21.733 88.221 22.227 C 92.458 19.69 95.701 15.666 97.238 10.885 C 93.264 13.235 88.877 14.941 84.203 15.866 C 80.46 11.873 75.136 9.386 69.231 9.386 C 57.901 9.386 48.716 18.571 48.716 29.894 C 48.716 31.5 48.897 33.069 49.247 34.569 C 32.2 33.712 17.084 25.545 6.967 13.135 C 5.199 16.159 4.193 19.684 4.193 23.445 C 4.193 30.563 7.817 36.843 13.316 40.517 C 9.954 40.405 6.792 39.48 4.024 37.943 L 4.024 38.199 C 4.024 48.135 11.098 56.427 20.477 58.314 C 18.759 58.776 16.947 59.033 15.072 59.033 C 13.747 59.033 12.466 58.901 11.21 58.651 C 13.822 66.806 21.396 72.736 30.369 72.899 C 23.352 78.398 14.503 81.666 4.893 81.666 C 3.237 81.666 1.606 81.566 0 81.385 C 9.08 87.215 19.859 90.614 31.444 90.614 C 69.181 90.614 89.808 59.358 89.808 32.25 L 89.74 29.594 C 93.77 26.72 97.257 23.108 100 18.996 Z " fill={ color }/>
			</g>
		</Fragment>
	)

TwitterIcon.propTypes = {
	color: PropTypes.string
}
  
TwitterIcon.defaultProps = {
	color: '#931A38'
}
  
export default TwitterIcon