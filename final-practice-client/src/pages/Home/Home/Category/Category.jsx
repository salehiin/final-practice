// import axios from "axios";
import useAuth from "../../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useReads from "../../../../hooks/useReads";

const Category = ({ item }) => {
    const { name, review, img, author, published_date, genre, ISBN, reading_time, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useReads();

    const handleAddToReadList = () => {
        if(user && user.email){
            // sent cart item to the database
            const bookItem = {
                bookId: _id,
                email: user.email,
                name,
                img,
                author,
                review,
                published_date,
                genre,
                reading_time,
                ISBN
            }
            axiosSecure.post('/reads', bookItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    toast.success(`${name} added to borrowed list`);
                    
                    // refetch cart
                    refetch()
                }
            })
        }
        else{
            toast.error("Please login");
            setTimeout(() => {
                navigate("/login", {state: {from: location}});
              }, 4500);
        }
    };
    return (
        // <div className="grid grid-cols-3">
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <img
                    // src="https://demo.fieldthemes.com/bookshop/demo1/home2/50-large_default/convallis-pharetra.jpg"
                    src={img}
                    className="w-full h-[443px]" />
                <p>{review}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={handleAddToReadList}
                        className="btn btn-primary">Borrow</button>
                </div>
            </div>
            <ToastContainer />
        </div>
        // </div>
    );
};

export default Category;