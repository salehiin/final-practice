import { useEffect, useState } from "react";

const useBook = () => {

    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);
        useEffect(() =>{
            fetch('books.json')
            .then(res => res.json())
            .then(data => {
                setBook(data);
                setLoading(false);
            })
        }, [])
        return [book, loading]
}

export default useBook;