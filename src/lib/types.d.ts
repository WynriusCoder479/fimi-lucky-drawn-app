type User = {
	code: string
	name: string
}

type RewardType = 'first' | 'second' | 'third' | 'consolation'

type Reward = {
	name: string
	type: RewardType
	images: string[]
	medal?: string
}
