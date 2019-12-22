/** @jsx jsx */
import React from 'react'
import { Flex } from 'rebass'
import { jsx } from '@emotion/core'

export const IconFind = props => {
	return (
		<Flex py={5} sx={{ position: 'relative' }}>
				<Flex
					sx={{
						m: 'auto',
						width: '100px',
						height: '100px',
						position: 'absolute',
						top: 0,
						right: 0,
						bottom: 0,
						left: 0,
						animation: 'rotate 40s infinite linear',
						'@keyframes rotate': {
							from: {transform: 'rotate(0deg)'},
							to: {transform: 'rotate(360deg)'},
						},
						':before': {
							content: `""`,
							top: 0,
							left: 0,
							transform: 'translate(-80%, 0)',
							width: '100px',
							height: '100px',
							borderRadius: '999px',
							border: '1px solid white',
							background: 'radial-gradient(87.17% 87.17% at 50% 50%, rgba(255, 255, 255, 0.16) 0%, #FFFFFF 100%)',
						}
						}}
				/>

			<svg
				width="100%"
				height="100%"
				viewBox="0 0 332 332"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M331.5 166C331.5 257.403 257.403 331.5 166 331.5C74.5969 331.5 0.5 257.403 0.5 166C0.5 74.5969 74.5969 0.5 166 0.5C257.403 0.5 331.5 74.5969 331.5 166Z"
					fill="url(#paint0_radial)"
					stroke="white"
				/>
				<defs>
					<radialGradient
						id="paint0_radial"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(166 166) rotate(90) scale(289.398)"
					>
						<stop stopColor="white" stopOpacity="0.16" />
						<stop offset="1" stopColor="white" />
					</radialGradient>
					<radialGradient
						id="paint1_radial"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(112.906 112.906) rotate(90) scale(120.128)"
					>
						<stop stopColor="white" stopOpacity="0.16" />
						<stop offset="1" stopColor="white" />
					</radialGradient>
				</defs>
			</svg>
		</Flex>
	)
}

export const IconCreate = props => {
	return (
		<Flex pb={5} pt={5}>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 332 332"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M256.257 0.924768C298.247 -3.9412 335.941 33.7534 331.075 75.7433C327.644 105.353 325.88 135.471 325.88 166C325.88 196.53 327.644 226.647 331.075 256.257C335.941 298.247 298.247 335.941 256.257 331.075C226.647 327.644 196.53 325.88 166.001 325.88C135.471 325.88 105.353 327.644 75.7431 331.075C33.7532 335.941 -3.94119 298.247 0.924761 256.257C4.356 226.647 6.11972 196.53 6.11972 166C6.11972 135.471 4.35602 105.353 0.924761 75.7435C-3.94118 33.7534 33.7533 -3.94124 75.7433 0.924768C105.353 4.3561 135.471 6.11991 166.001 6.11991C196.53 6.11991 226.648 4.35603 256.257 0.924768Z"
					fill="url(#paint0_linear)"
					stroke="white"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="166"
						y1="-83"
						x2="166"
						y2="332"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" stopOpacity="0" />
						<stop offset="1" stopColor="white" />
					</linearGradient>
				</defs>
			</svg>
		</Flex>
	)
}

export const IconConnect = props => {
	return (
		<Flex pb={5} pt={5}>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 332 332"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<mask id="path-2-inside-1" fill="white">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M332 60.2422C332 35.2556 311.744 15 286.758 15H45.2422C20.2556 15 0 35.2556 0 60.2422V60.2422C0 85.2288 20.2556 105.484 45.2422 105.484H93.2857C97.5702 105.484 101.043 108.958 101.043 113.242V113.242C101.043 117.527 97.5702 121 93.2857 121H45.2422C20.2556 121 0 141.256 0 166.242C0 191.229 20.2556 211.484 45.2422 211.484H159.273C163.558 211.484 167.031 214.958 167.031 219.242V219.242C167.031 223.527 163.558 227 159.273 227H45.2422C20.2556 227 0 247.256 0 272.242V272.242C0 297.229 20.2556 317.484 45.2422 317.484H286.758C311.744 317.484 332 297.229 332 272.242V272.242C332 247.256 311.744 227 286.758 227H240.776C236.492 227 233.019 223.527 233.019 219.242V219.242C233.019 214.958 236.492 211.484 240.776 211.484H286.758C311.744 211.484 332 191.229 332 166.242C332 141.256 311.744 121 286.758 121H174.789C170.504 121 167.031 117.527 167.031 113.242V113.242C167.031 108.958 170.504 105.484 174.789 105.484H286.758C311.744 105.484 332 85.2288 332 60.2422V60.2422Z"
					/>
				</mask>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M332 60.2422C332 35.2556 311.744 15 286.758 15H45.2422C20.2556 15 0 35.2556 0 60.2422V60.2422C0 85.2288 20.2556 105.484 45.2422 105.484H93.2857C97.5702 105.484 101.043 108.958 101.043 113.242V113.242C101.043 117.527 97.5702 121 93.2857 121H45.2422C20.2556 121 0 141.256 0 166.242C0 191.229 20.2556 211.484 45.2422 211.484H159.273C163.558 211.484 167.031 214.958 167.031 219.242V219.242C167.031 223.527 163.558 227 159.273 227H45.2422C20.2556 227 0 247.256 0 272.242V272.242C0 297.229 20.2556 317.484 45.2422 317.484H286.758C311.744 317.484 332 297.229 332 272.242V272.242C332 247.256 311.744 227 286.758 227H240.776C236.492 227 233.019 223.527 233.019 219.242V219.242C233.019 214.958 236.492 211.484 240.776 211.484H286.758C311.744 211.484 332 191.229 332 166.242C332 141.256 311.744 121 286.758 121H174.789C170.504 121 167.031 117.527 167.031 113.242V113.242C167.031 108.958 170.504 105.484 174.789 105.484H286.758C311.744 105.484 332 85.2288 332 60.2422V60.2422Z"
					fill="url(#paint0_linear)"
				/>
				<path
					d="M45.2422 16H286.758V14H45.2422V16ZM93.2857 104.484H45.2422V106.484H93.2857V104.484ZM93.2857 120H45.2422V122H93.2857V120ZM45.2422 120C19.7034 120 -1 140.703 -1 166.242H1C1 141.808 20.8079 122 45.2422 122V120ZM-1 166.242C-1 191.781 19.7033 212.484 45.2422 212.484V210.484C20.8079 210.484 1 190.677 1 166.242H-1ZM45.2422 212.484H159.273V210.484H45.2422V212.484ZM159.273 226H45.2422V228H159.273V226ZM45.2422 318.484H286.758V316.484H45.2422V318.484ZM286.758 226H240.776V228H286.758V226ZM240.776 212.484H286.758V210.484H240.776V212.484ZM286.758 212.484C312.297 212.484 333 191.781 333 166.242H331C331 190.677 311.192 210.484 286.758 210.484V212.484ZM333 166.242C333 140.703 312.297 120 286.758 120V122C311.192 122 331 141.808 331 166.242H333ZM286.758 120H174.789V122H286.758V120ZM286.758 104.484H174.789V106.484H286.758V104.484ZM286.758 106.484C312.297 106.484 333 85.7811 333 60.2422H331C331 84.6765 311.192 104.484 286.758 104.484V106.484ZM168.031 113.242C168.031 109.51 171.057 106.484 174.789 106.484V104.484C169.952 104.484 166.031 108.405 166.031 113.242H168.031ZM174.789 120C171.057 120 168.031 116.974 168.031 113.242H166.031C166.031 118.079 169.952 122 174.789 122V120ZM234.019 219.242C234.019 215.51 237.044 212.484 240.776 212.484V210.484C235.94 210.484 232.019 214.405 232.019 219.242H234.019ZM240.776 226C237.044 226 234.019 222.974 234.019 219.242H232.019C232.019 224.079 235.94 228 240.776 228V226ZM45.2422 226C19.7033 226 -1 246.703 -1 272.242H1C1 247.808 20.8079 228 45.2422 228V226ZM166.031 219.242C166.031 222.974 163.005 226 159.273 226V228C164.11 228 168.031 224.079 168.031 219.242H166.031ZM159.273 212.484C163.005 212.484 166.031 215.51 166.031 219.242H168.031C168.031 214.405 164.11 210.484 159.273 210.484V212.484ZM100.043 113.242C100.043 116.974 97.0179 120 93.2857 120V122C98.1225 122 102.043 118.079 102.043 113.242H100.043ZM93.2857 106.484C97.0179 106.484 100.043 109.51 100.043 113.242H102.043C102.043 108.405 98.1225 104.484 93.2857 104.484V106.484ZM333 272.242C333 246.703 312.297 226 286.758 226V228C311.192 228 331 247.808 331 272.242H333ZM-1 60.2422C-1 85.7811 19.7034 106.484 45.2422 106.484V104.484C20.8079 104.484 1 84.6765 1 60.2422H-1ZM286.758 318.484C312.297 318.484 333 297.781 333 272.242H331C331 296.677 311.192 316.484 286.758 316.484V318.484ZM286.758 16C311.192 16 331 35.8079 331 60.2422H333C333 34.7034 312.297 14 286.758 14V16ZM-1 272.242C-1 297.781 19.7033 318.484 45.2422 318.484V316.484C20.8079 316.484 1 296.677 1 272.242H-1ZM45.2422 14C19.7034 14 -1 34.7034 -1 60.2422H1C1 35.8079 20.8079 16 45.2422 16V14Z"
					fill="white"
					mask="url(#path-2-inside-1)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="198.994"
						y1="-123.601"
						x2="198.994"
						y2="323.263"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" stopOpacity="0" />
						<stop offset="1" stopColor="white" />
					</linearGradient>
				</defs>
			</svg>
		</Flex>
	)
}
