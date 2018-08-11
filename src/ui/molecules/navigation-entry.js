import React from 'react'
import PropTypes from 'prop-types'

import { NavigationEntrySection, NavigationEntrySubsection } from '../atoms'

const Molecule = ({ title, subtitle, selected }) => {
	const Component = subtitle ? NavigationEntrySubsection : NavigationEntrySection
	return <Component selected={ selected }>{ title }</Component>
}

Molecule.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.bool,
	selected: PropTypes.bool
}

Molecule.defaultProps = {
	title: 'value'
}

export default Molecule