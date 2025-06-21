export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  category: string[]
  image?: string
  github?: string
  demo?: string

}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  link?: string
}

export interface Experience {
  id: string
  title: string
  organization: string
  description: string
  period: string
  link?: string
}
