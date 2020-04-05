import React from 'react'
import { Grid, Text } from './system'
import styled from '@emotion/styled'

export const Layout = props => {
	return (
		<Grid
			width='100%'
			px={{all: 2, sm: 3}}
			gridTemplateColumns={`repeat(${props.columns}, 1fr)`}
			gridColumnGap={{all: 1, md: 3}}
			{...props}
		/>
	)
}

Layout.defaultProps = {
	gridTemplateColumns: 'repeat(12, 1fr)',
}