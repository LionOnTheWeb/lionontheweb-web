type Tech = { 
	name?: string, 
	imgUrl?: string, 
	imgAlt?: string 
}

type Image = {
	imgUrl: string,
	altText?: string
}

export type Profile = {
	name: string,
	image: Image,
	tags: Array<string>
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
	title: string,
	date?: string,
	image?: Image,
	featured: boolean,
}