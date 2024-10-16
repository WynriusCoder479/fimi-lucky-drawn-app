import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}

export const parseType = (type: RewardType) => {
	switch (type) {
		case 'first':
			return 'Giải nhất'
		case 'second':
			return 'Giải nhì'
		case 'third':
			return 'Giải ba'
		case 'consolation':
			return 'Giải khuyến khích'
	}
}
