import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}

export const parseType = (type: RewardType) => {
	switch (type) {
		case 'first':
			return 'Giải đặc biệt'
		case 'second':
			return 'Giải may mắn 1'
		case 'third':
			return 'Giải may mắn 2'
		case 'consolation':
			return 'Giải khuyến khích'
	}
}
