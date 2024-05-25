export interface Book {
    readonly id?: number
    author: string
    title: string
    isbn: string
    year: number | undefined
    pages: number | undefined
    available?: boolean
}