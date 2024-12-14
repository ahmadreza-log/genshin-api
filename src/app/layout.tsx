import type { Metadata } from 'next'
import '../../public/css/globals.css'
import { ReactNode } from 'react'

export const metadata: Metadata = {
	title:       'Genshin Impact API',
	description: 'A Fan Made Genshin Impact api',
}

interface RootInterface {
	children: ReactNode
}

export default function RootLayout( { children }: Readonly<RootInterface> ) {
	return (
	  <html lang="en">
		  <body>
			  { children }
		  </body>
	  </html>
	)
}
