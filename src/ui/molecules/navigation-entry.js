import React from 'react'
import PropTypes from 'prop-types'

import { NavigationEntrySection, NavigationEntrySubsection } from '../atoms'

const Molecule = ({ title, subtitle, selected, onClick }) => {
	const Component = subtitle ? NavigationEntrySubsection : NavigationEntrySection
	return <Component onClick={ onClick } selected={ selected }>{ title }</Component>
}

Molecule.propTypes = {
	onClick: PropTypes.func,
	title: PropTypes.string,
	subtitle: PropTypes.bool,
	selected: PropTypes.bool
}

Molecule.defaultProps = {
	title: 'value'
}

export default Molecule