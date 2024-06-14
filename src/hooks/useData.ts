import { DependencyList, useEffect, useState } from "react";
import axios, { CanceledError } from "axios";



interface query{
  query: string;
}

const GRAPHQL_ENDPOINT = "https://graphql-books-server-ig8u.vercel.app/graphql";


interface GraphQLResponse<T> {
  data: T;
}

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

const useData = (query?: query, deps?: DependencyList) => {
  
  const [data, setData] = useState<Book[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    
    // Introduce a delay of 4000 milliseconds (4 seconds)
    setTimeout(() => {
      axios
       .post<GraphQLResponse<{ books: Book[] }>>(
          GRAPHQL_ENDPOINT,
          query,
        )
       .then((res) => {
          setData(res.data.data.books);
          setLoading(false);
        })
       .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
    }, 4000); // Delay added here

    return () => controller.abort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps? [...deps] : []);

  return { data, error, isLoading };
};


export default useData;
