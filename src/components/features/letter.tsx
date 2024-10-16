'use client'

import { FC, useState } from 'react'
import { useTimeout } from 'usehooks-ts'

import { cn } from '@/lib/utils'

interface LetterProps {
	letter: string
	delay: number
}

const Letter: FC<LetterProps> = ({ letter, delay }) => {
	const [result, setResult] = useState<string>('')
	const [isPending, setIsPending] = useState(true)

	useTimeout(() => {
		setIsPending(false)
		setResult(letter)
	}, delay)

	return (
		<div
			className={cn(
				'flex items-center justify-center text-2xl font-semibold size-10 bg-gradient-to-r from-primary to-secondary text-white rounded-md',
				{
					'animate-spin': isPending
				}
			)}
		>
			{result}
		</div>
	)
}

export default Letter
