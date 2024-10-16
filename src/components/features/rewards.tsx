'use client'

import Image from 'next/image'
import { Dispatch, FC, SetStateAction } from 'react'

import { rewardList } from '@/constants/reward-list'
import { cn, parseType } from '@/lib/utils'

interface RewardsProps {
	setCurrentReward: Dispatch<SetStateAction<Reward>>
}

const Rewards: FC<RewardsProps> = ({ setCurrentReward }) => {
	return (
		<div className='w-full h-full flex items-center gap-2'>
			{rewardList.map(reward => (
				<button
					onClick={() => setCurrentReward(reward)}
					key={reward.type}
					className={cn(
						'relative w-1/4 p-2 border flex flex-col items-center cursor-pointer bg-background rounded-md shadow-md border-foreground/20 h-full transition-all',
						'hover:shadow-2xl',
						'active:shadow-md'
					)}
				>
					{reward.medal ? (
						<Image
							src={reward.medal}
							alt='medal'
							width={100}
							height={100}
							className='size-10 absolute -top-2 -left-2.5'
						/>
					) : null}

					<p className='text-center font-bold text-xs text-foreground/50 uppercase'>
						{parseType(reward.type)}
					</p>
					<p className='my-2 text-center font-bold text-base text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text uppercase'>
						{reward.name}
					</p>

					<div className='border border-foreground/10 overflow-hidden rounded-md'>
						<Image
							src={reward.images[0]}
							alt='reward'
							width={500}
							height={500}
							className='object-cover size-48 self-center'
						/>
					</div>
				</button>
			))}
		</div>
	)
}

export default Rewards
