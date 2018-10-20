import React, { Fragment } from 'react'

const Logo = () =>
	(
		<Fragment>
			<defs>
				<clipPath id="_clipPath_JUKwV52oTaUH8ERMxsRmMq2LzgDYKCqd">
					<rect width="100" height="100" />
					<defs>
						<linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" >

							<stop offset="0%" stopColor="#CF5C79">
								<animate attributeName="stop-color" values="#CF5C79; #931A38; #4B0013; #931A38; #CF5C79;" dur="4s" repeatCount="indefinite"></animate>
							</stop>
							<stop offset="70%" stopColor="#931A38">
								<animate attributeName="stop-color" values="#931A38; #CF5C79; #931A38; #4B0013; #931A38;" dur="4s" repeatCount="indefinite"></animate>
							</stop>
							<stop offset="100%" stopColor="#4B0013">
								<animate attributeName="stop-color" values="#4B0013; #931A38; #CF5C79; #931A38; #4B0013;" dur="4s" repeatCount="indefinite"></animate>
							</stop>

						</linearGradient>

					</defs>
				</clipPath>
			</defs>
			<g clipPath="url(#_clipPath_JUKwV52oTaUH8ERMxsRmMq2LzgDYKCqd)">
				<rect width="100" height="100" fillOpacity="0" />
				<g>
					<path fill="url('#logo-gradient')" d=" M 10 100 L 73.04 60.6 C 82.4 54.75 81.038 50 70 50 L 60 50 L 75.858 34.142 C 83.663 26.337 81.038 20 70 20 L 20 20 L 20 50 L 60 50 L 0 100 L 0 0 L 85 0 C 93.279 0 100 6.721 100 15 L 100 85 C 100 93.279 93.279 100 85 100 L 0 100 L 10 100 Z " />
				</g>
			</g>
		</Fragment>
	)



export default Logo