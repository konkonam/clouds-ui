export type AppLink = {
    id: number
    slug: string
    name: string
    description?: string
    children?: AppLink[]
}
