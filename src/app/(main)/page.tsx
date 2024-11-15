'use client'

import { useState } from 'react'

import CurrentReward from '@/components/features/current-reward'
import Drawn from '@/components/features/drawn'
import Rewards from '@/components/features/rewards'
import { rewardList } from '@/constants/reward-list'

export default function Home() {
	const [currentReward, setCurrentReward] = useState<Reward>(rewardList[2])

	return (
		<div className='w-full flex flex-col space-y-2 h-5/6 p-2 rounded-xl shadow-lg bg-gradient-to-tr from-primary via-secondary  to-secondary/70'>
			<div className='flex items-center space-x-2 h-1/2'>
				<div className='flex items-center justify-center bg-background w-2/3 border border-foreground/20 h-full rounded-tl-lg'>
					<Drawn currentReward={currentReward} />
				</div>
				<div className='bg-background border w-1/3 border-foreground/20 h-full rounded-tr-lg'>
					<CurrentReward {...currentReward} />
				</div>
			</div>
			<div className='bg-background p-2 w-full h-1/2 border border-foreground/20 rounded-b-lg'>
				<Rewards setCurrentReward={setCurrentReward} />
			</div>
		</div>
	)
}
