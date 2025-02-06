import { Link } from "react-router-dom";
import CategoryTitle from "../../../components/CategoryTitle/CategoryTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useBook from "../../../hooks/useBook";
import Swal from "sweetalert2";



const ManageBooks = () => {
    const [books, loading, refetch] = useBook();
    const axiosSecure = useAxiosSecure();

    const handleDeleteBook = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/books/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to updatethe the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }

        });
    }

    const handleUpdateBook = (item) => {

    }

    return (
        <div>
            <CategoryTitle title="Manage Books"></CategoryTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>Genre</th>
                                <th>Published Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                books.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.img}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                                <div className="text-sm opacity-50">{item.author}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.genre}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{item.ISBN}</span>
                                    </td>
                                    <td>{item.published_date}</td>
                                    <th>
                                        <Link to={`/dashboard/updateBooks/${item._id}`}>
                                            <button
                                                onClick={() => handleUpdateBook(item._id)}
                                                className="btn btn-info btn-xs">Update</button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => handleDeleteBook(item._id)}
                                            className="btn btn-warning btn-xs">Delete</button>
                                    </th>
                                </tr>)
                            }

                            {/* row 2 */}

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBooks;