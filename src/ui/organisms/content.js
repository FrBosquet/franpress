import React from 'react'
import PropTypes from 'prop-types'

import { ContentBodyParagraph, ContentBodyTitle } from '../atoms'
import { ContentHeading, ContentMetadata, ContentBody } from '../molecules'

const Content = ({ title, subtitle }) => (
	<div>
		<ContentHeading
			title={ title }
			subtitle={ subtitle }
		/>
		<ContentMetadata />
		<ContentBody>
			<ContentBodyParagraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet velit consectetur, ultricies nisi in, tempus neque. Praesent neque ex, maximus euismod dictum non, dapibus a purus. Quisque rhoncus lectus at enim aliquet feugiat eu tristique lorem. Curabitur ut finibus eros, sit amet mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque, felis eu finibus lacinia, eros magna aliquam diam, quis tincidunt felis dolor vel ligula. Mauris tincidunt mollis arcu id auctor. Sed faucibus ut est id ultricies. Maecenas suscipit nisl in leo ultricies, sed sollicitudin libero feugiat. Aliquam pretium mi in nibh congue rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam scelerisque tincidunt nisl at vestibulum.
			</ContentBodyParagraph>
			<ContentBodyTitle>Subtitle 1</ContentBodyTitle>
			<ContentBodyParagraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet velit consectetur, ultricies nisi in, tempus neque. Praesent neque ex, maximus euismod dictum non, dapibus a purus. Quisque rhoncus lectus at enim aliquet feugiat eu tristique lorem. Curabitur ut finibus eros, sit amet mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque, felis eu finibus lacinia, eros magna aliquam diam, quis tincidunt felis dolor vel ligula. Mauris tincidunt mollis arcu id auctor. Sed faucibus ut est id ultricies. Maecenas suscipit nisl in leo ultricies, sed sollicitudin libero feugiat. Aliquam pretium mi in nibh congue rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam scelerisque tincidunt nisl at vestibulum.
			</ContentBodyParagraph>
			<ContentBodyParagraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet velit consectetur, ultricies nisi in, tempus neque. Praesent neque ex, maximus euismod dictum non, dapibus a purus. Quisque rhoncus lectus at enim aliquet feugiat eu tristique lorem. Curabitur ut finibus eros, sit amet mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque, felis eu finibus lacinia, eros magna aliquam diam, quis tincidunt felis dolor vel ligula. Mauris tincidunt mollis arcu id auctor. Sed faucibus ut est id ultricies. Maecenas suscipit nisl in leo ultricies, sed sollicitudin libero feugiat. Aliquam pretium mi in nibh congue rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam scelerisque tincidunt nisl at vestibulum.
			</ContentBodyParagraph>
			<ContentBodyTitle>Subtitle 2</ContentBodyTitle>
			<ContentBodyParagraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet velit consectetur, ultricies nisi in, tempus neque. Praesent neque ex, maximus euismod dictum non, dapibus a purus. Quisque rhoncus lectus at enim aliquet feugiat eu tristique lorem. Curabitur ut finibus eros, sit amet mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque, felis eu finibus lacinia, eros magna aliquam diam, quis tincidunt felis dolor vel ligula. Mauris tincidunt mollis arcu id auctor. Sed faucibus ut est id ultricies. Maecenas suscipit nisl in leo ultricies, sed sollicitudin libero feugiat. Aliquam pretium mi in nibh congue rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam scelerisque tincidunt nisl at vestibulum.
			</ContentBodyParagraph>
			<ContentBodyParagraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet velit consectetur, ultricies nisi in, tempus neque. Praesent neque ex, maximus euismod dictum non, dapibus a purus. Quisque rhoncus lectus at enim aliquet feugiat eu tristique lorem. Curabitur ut finibus eros, sit amet mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque, felis eu finibus lacinia, eros magna aliquam diam, quis tincidunt felis dolor vel ligula. Mauris tincidunt mollis arcu id auctor. Sed faucibus ut est id ultricies. Maecenas suscipit nisl in leo ultricies, sed sollicitudin libero feugiat. Aliquam pretium mi in nibh congue rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam scelerisque tincidunt nisl at vestibulum.
			</ContentBodyParagraph>
		</ContentBody>
	</div>
)

Content.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
}

export default Content
