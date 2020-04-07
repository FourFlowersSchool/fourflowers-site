import React from 'react'
import { Flex, Text, Link } from './system'
import { Heading, Copy, Layout } from './bridge'

export default function Partners(props) {
	return (
		<Flex
			as='section'
			minHeight={{ all: 'auto', sm: '100vh' }}
			flexes='css'
			bg='white'
			color='orange'
		>
			<Heading color='#FB4926'>{Copy.partners.heading}</Heading>
			<Flex
				width='100%'
				flexes='ccc'
				minHeight={{ all: 'auto', sm: '100vh' }}
				py={{ all: 5, sm: 0 }}
			>
				<Layout flexes='rcc'>
					<Text
						gridColumn={{ all: '1/-1', sm: '1/7' }}
						variant='body'
						pb={{ all: 4, sm: 0 }}
					>
						{Copy.partners.desc}
					</Text>
					<Link
						flexes='ccc'
						gridColumn={{ all: '1/-1', sm: '7/-1' }}
						variant='body'
						decoration='default'
						py={{ all: 6, sm: 8 }}
						textAlign='center'
						sx={{
							display: 'flex',
							border: '1px dashed orange',
							borderRadius: '999px',
							':hover': {
								bg: 'orange',
								color: 'white',
							},
						}}
					>
						<Text as='span'>Write us</Text>
					</Link>
				</Layout>
			</Flex>
		</Flex>
	)
}
