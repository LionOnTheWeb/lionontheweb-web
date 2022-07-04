type Tech = { 
	name?: string, 
	imgUrl?: string, 
	imgAlt?: string 
}

type Image = {
	imgUrl: string,
	altText?: string
}

export type WorksData = {
	title: string,
	subtitle: string,
	date?: string,
	summary?: string,
	tech?: Tech[],
	image?: Image,
	featured: boolean
}

export type BlurbsData = {
	title: 'Why I love svelte, and where it fits in web 3',
	date?: 'Monday, 4 May 2022',
	image?: Image,
	featured: true,
}