export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  category: string[]
  image?: string[]
  video?: string
  github?: string
  demo?: string
  details?: string | {
  features?: string[]
  iot?: string[]
  techHighlights?: string[]
  useCases?: string[]
  }
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
