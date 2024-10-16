'use client'

import Image from 'next/image'
import { FC, useState } from 'react'

import Letter from '@/components/features/letter'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { userList } from '@/constants/user-list'
import { parseType } from '@/lib/utils'

interface DrawnProps {
	currentReward: Reward
}

const Drawn: FC<DrawnProps> = ({ currentReward }) => {
	const [user, setUser] = useState<User | undefined>(undefined)
	const [onOpen, setOnOpen] = useState<boolean>(false)

	const getRandom = () => {
		const res = userList[Math.floor(Math.random() * userList.length)]

		setUser(res)

		setTimeout(() => setOnOpen(true), 2500 + 13 * 200)
	}

	return (
		<>
			<div className='flex flex-col gap-2'>
				<div className='flex flex-col gap-6'>
					<p className='text-2xl drop-shadow-lg text-center text-transparent bg-gradient-to-r from-primary to-secondary font-bold uppercase tracking-tight bg-clip-text'>
						Quay số trúng thưởng
					</p>
					<div className='flex items-center justify-center space-x-2'>
						{!user ? (
							<>
								{[...Array(10)].map((_, i) => (
									<div
										key={i}
										className='flex items-center justify-center text-2xl font-semibold size-10 bg-gradient-to-r from-primary to-secondary text-white rounded-md'
									></div>
								))}
							</>
						) : (
							<>
								{user.code.split('').map((letter, i) => (
									<Letter
										key={i}
										letter={letter}
										delay={2500 + (i + 1) * 200}
									/>
								))}
							</>
						)}
					</div>
				</div>
				<div className='w-full flex items-center gap-x-4 justify-center py-6'>
					<Button
						disabled={!!user}
						onClick={getRandom}
					>
						Rút thăm
					</Button>
				</div>
			</div>
			{user ? (
				<AlertDialog
					open={onOpen}
					onOpenChange={setOnOpen}
				>
					<AlertDialogContent>
						<div className='absolute -top-7 left-1/2 -translate-x-1/2 -rotate-6 transform rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-2.5 text-xl font-bold uppercase text-white'>
							Chúc mừng{' '}
						</div>
						<AlertDialogHeader className='mt-8'>
							<AlertDialogTitle className='text-center'>
								Chúc mừng{' '}
								<span className='bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold uppercase text-transparent'>
									{user.name}
								</span>{' '}
								đã trúng giải
							</AlertDialogTitle>
						</AlertDialogHeader>
						<div className='flex flex-col gap-4'>
							<ul className='rounded-lg border border-foreground/20 bg-foreground/5 p-4'>
								<li>
									<span className='font-bold'>MSSV:</span> {user.code}
								</li>
								<li>
									<span className='font-bold'>Họ và tên:</span> {user.name}
								</li>
							</ul>
							{currentReward && (
								<div className='flex items-start gap-4 rounded-lg border border-foreground/20 bg-foreground/5 p-2 shadow-md'>
									<Image
										src={
											currentReward.images[
												Math.floor(Math.random() * currentReward.images.length)
											]
										}
										alt={currentReward.name}
										width={500}
										height={500}
										className='w-52'
									/>
									<div className='flex flex-col gap-4'>
										<p className='text-center font-bold uppercase'>
											{parseType(currentReward.type)}{' '}
										</p>
										<ul>
											<li>
												<p className='text-xs'>
													<span className='font-bold'>Tên sản phẩm: </span>
													{currentReward.name}
												</p>
											</li>
										</ul>
									</div>
								</div>
							)}
						</div>
						<AlertDialogFooter>
							<AlertDialogAction onClick={() => setUser(undefined)}>
								Quay tiếp !!!
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			) : null}
		</>
	)
}

export default Drawn
