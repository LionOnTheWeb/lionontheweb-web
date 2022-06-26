type Tech = { 
	name?: string, 
	imgUrl?: string, 
	imgAlt?: string 
}

type Image = {
	imgUrl: string,
	altText?: string
}

export type PostData = {
	title: string,
	subtitle?: string,
	date?: string,
	summary?: string,
	tech?: Tech[],
	image?: Image
}
