import './globals.css'

import type { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

export const metadata: Metadata = {
	title: 'FIMI Lucky',
	description: 'Generated by create next app'
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang='en'>
			<body className={` antialiased`}>{children}</body>
		</html>
	)
}

export default RootLayout