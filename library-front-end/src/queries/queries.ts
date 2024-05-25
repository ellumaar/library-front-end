import {Book, RentalPayload} from "../models/models.ts";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";

const queryKeys = {
  all: ["all"] as const,
  lists: () => [queryKeys.all, "list"] as const,
  list: () => [queryKeys.lists()] as const,
  myLists: () => [queryKeys.all, "myList"] as const,
  myList: () => [queryKeys.myLists()] as const,
};

export function useGetBooksQuery() {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: async () => {
      const { data } = await axios.get<Book[]>(`books/`);
      return data;
    },
  });
}

export function useGetMyRentedBooksQuery() {
  return useQuery({
    queryKey: queryKeys.myList(),
    queryFn: async () => {
      const { data } = await axios.get<Book[]>(`books/myBooks/`);
      return data;
    },
  });
}

export function useAddBookMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (book: Book) => {
      const { data } = await axios.post<Book>(`books/`, book);
      return data;
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: queryKeys.list() });
    },
  });
}

export function useSubmitRentalMutation() {
  return useMutation({
    mutationFn: async (payload: RentalPayload) => {
      const { data } = await axios.post<Book>(`rentals/`, payload);
      return data;
    },
  });
}
