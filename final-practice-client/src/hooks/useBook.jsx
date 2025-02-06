// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBook = () => {
    const axiosPublic = useAxiosPublic();

    // const [book, setBook] = useState([]);
    // const [loading, setLoading] = useState(true);
    //     useEffect(() =>{
    //         fetch('http://localhost:5000/books')
    //         .then(res => res.json())
    //         .then(data => {
    //             setBook(data);
    //             setLoading(false);
    //         })
    //     }, [])

    const {data: books = [], isPending: loading, refetch} = useQuery({
        queryKey: ['books'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/books')
            return res.data;
        }
    })

        return [books, loading, refetch]
}

export default useBook;