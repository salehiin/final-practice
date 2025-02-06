import CategoryTitle from "../../../../components/CategoryTitle/CategoryTitle";
import useBook from "../../../../hooks/useBook";
import Lead from "../Category/Lead/Lead";
import BookCategory from "./BookCategory/BookCategory";


const Categories = () => {
    const [books] = useBook();
    const classic = books.filter(item => item.genre === 'Classic');
    const fantasy = books.filter(item => item.genre === 'Fantasy');
    const fiction = books.filter(item => item.genre === 'Fiction');
    const non_fiction = books.filter(item => item.genre === 'Non-Fiction');

    // const [book, setBook] = useState([]);
    // useEffect(() =>{
    //     fetch('books.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const bookCategories = data.filter(item => item.genre === 'Fiction')
    //         setBook(bookCategories)})
    // }, [])
    return (


        <div>
            <Lead></Lead>
            <CategoryTitle title={"Fiction"} navigate={"/"}></CategoryTitle>
            <BookCategory items={fiction}></BookCategory>
            <CategoryTitle title={"Classic"} navigate={"/"}></CategoryTitle>
            <BookCategory items={classic}></BookCategory>
            <CategoryTitle title={"Non-Fiction"} navigate={"/"}></CategoryTitle>
            <BookCategory items={non_fiction}></BookCategory>
        </div>


    );
};

export default Categories;