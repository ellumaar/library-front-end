import { Book } from "../models/models.ts"
import axios from 'axios'
import { useQuery } from "@tanstack/vue-query"

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