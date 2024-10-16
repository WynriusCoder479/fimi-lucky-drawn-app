import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='w-full bg-neutral-100/50 h-full flex flex-col items-center justify-center'>
			<header className='sticky inset-x-0 top-0 z-50 flex w-full items-center justify-center border-b border-foreground/10 bg-background shadow-md'>
				<div className='container flex items-center justify-between py-2.5'>
					<Image
						src='/logo/fimi.png'
						alt='logo'
						width={2454}
						height={1066}
						className='w-28'
					/>
				</div>
			</header>
			<main className='bg-neutral container px-72 flex items-center justify-center w-full h-full'>
				{children}
			</main>
		</div>
	)
}

export default MainLayout
