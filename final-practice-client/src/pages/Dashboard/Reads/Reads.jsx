import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useReads from "../../../hooks/useReads";
import Swal from 'sweetalert2'

const Reads = () => {
    const [reads, refetch] = useReads();
    const totalReadingHours = reads.reduce((total, item) => total + item.reading_time, 0)
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/reads/${id}`)
                    .then(res => {
                        refetch();
                        if (res.data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl">Total Books: {reads.length}</h2>
                <h2 className="text-4xl">Total Reading Time: {totalReadingHours}</h2>
                <button className="btn btn-primary text-xl">BORROW</button>
            </div>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            reads.map((item, index) => <tr key={item._id}>
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
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-warning btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }

                        {/* row 2 */}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Reads;