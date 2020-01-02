import React, { useState, useRef } from 'react'
import { Flex, Text } from './system'


export const Pillar = props => {
	
	const [setActive, setActiveState] = useState('')
	const [setHeight, setHeightState] = useState('0px')
	const [setOpacity, setOpacityState] = useState(0)
	const [setTransition, setTransitionState] = useState('opacity .05s ease')
	const [setToggle, setToggleState] = useState('"+"')

	const paragraph = useRef(null)

	const toggleItem = () => {
		setActiveState(setActive === '' ? 'active' : '')
		setHeightState(setActive === 'active' ? '0px' : `${paragraph.current.scrollHeight}px`)
		setOpacityState(setActive === 'active' ? 0 : 1)
		setTransitionState(setActive === 'active' ? 'opacity .2s ease' : 'opacity .3s ease .05s')
		setToggleState(setActive === 'active' ? '"+"' : '"–"')
	}
	
	return (
		<Flex
			as='section'
			py={{all: 5, md: 7}}
			px={{all: 2, md: 3}}
			mx={{all: 2, md: 3}}
			mt='0'
			flexes='css'
			sx={{
				borderTop: '1px dashed',
				borderLeft: '1px dashed',
				borderRight: '1px dashed',
				borderColor: 'blue',
				':last-child': {borderBottom: '1px dashed'}
			}}
		>
			
			<Flex
				as='header'
				width='100%'
				flexes='css'
				sx={{ 'cursor': 'pointer' }}
				onClick={toggleItem}
			>

				<Text
					as='h3'
					variant='heading'
					sx={{
						':after': {
							content: setToggle,
							right: [3, null, null, 5],
							position: 'absolute',
						}
					}}
				>
				 {props.heading}
				</Text>
				<Text
					variant='body'
					pt={{all: 1, md: 3}}
				>
					{props.subheading}
				</Text>

			</Flex>
			
				<Flex
					flexes='css'
					ref={paragraph}
					sx={{
							overflow: 'hidden',
							maxHeight: setHeight,
							transition: 'max-height .2s ease',
						}}
				>
					<Text
						as='p'
						width={{all: 1, lg: 2/3}}
						pt='3'
						pb={{all: 0, md: 3}}
						variant='desc'
						sx={{
							opacity: setOpacity,
							transition: setTransition,
							}}
					>
						{props.paragraph}
					</Text>
				</Flex>

		</Flex>
		)
}