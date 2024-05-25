import { Book } from "../models/models.ts"
import axios from 'axios'
import {useMutation, useQuery} from "@tanstack/vue-query"

const queryKeys = {
    all: ['all'] as const,
    lists: () => [ queryKeys.all, 'list' ] as const,
    list: () => [ queryKeys.lists() ] as const,
}

export function useGetBooksQuery() {
    return useQuery({
        queryKey: queryKeys.list(),
        queryFn: async () => {
            const { data } = await axios.get<Book[]>(`books/`)
            return data
        },
    })
}

export function useAddBookMutation() {
    return useMutation({
        mutationFn: async (book: Book) => {
            const { data } = await axios.post<Book>(`books/`, book)
            return data
        },
    })
}