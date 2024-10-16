'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { FC } from 'react'

import {
	Carousel,
	CarouselContent,
	CarouselItem
} from '@/components/ui/carousel'
import { parseType } from '@/lib/utils'

const CurrentReward: FC<Reward> = ({ type, name, images }) => {
	return (
		<div className='flex h-full w-full flex-col items-center gap-2 p-2'>
			<p className='text-center text-xs font-bold uppercase text-foreground/50'>
				{parseType(type)}
			</p>
			<p className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-lg font-bold uppercase text-transparent'>
				{name}
			</p>
			<Carousel
				opts={{
					align: 'start',
					loop: true
				}}
				plugins={[
					Autoplay({
						delay: 5000
					})
				]}
			>
				<CarouselContent>
					{images.map(image => (
						<CarouselItem
							key={image}
							className='flex items-center justify-center'
						>
							<div className='border border-foreground/10 overflow-hidden rounded-md'>
								<Image
									src={image}
									alt={image}
									width={500}
									height={500}
									className='w-48 object-contain'
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}

export default CurrentReward
