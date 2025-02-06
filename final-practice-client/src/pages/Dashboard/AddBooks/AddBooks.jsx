import { useForm } from "react-hook-form";
import CategoryTitle from "../../../components/CategoryTitle/CategoryTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
// const image_hosting_key = import.meta.env.VITE_IMAGE_CLOUDINARY_URL;
// const image_hosting_api= `https://res.cloudinary.com/do1rtdrmu/image/upload/v12345/${image_hosting_key}`
// const image_hosting_api = "https://api.cloudinary.com/v1_1/do1rtdrmu/image/upload";
// const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET; // Get from .env


const AddBooks = () => {
    const formData = new FormData();
        // formData.append("file", data.img[0]);  // Append image file
        // formData.append("upload_preset", uploadPreset);  // Required for unsigned uploads
        // formData.append("cloud_name", "do1rtdrmu");

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // 
        const imageFile = { image: data.img[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            const booksCollection = {
                name: data.name,
                author: data.author,
                review: data.review,
                published_date: data.published_date,
                genre: data.genre,
                ISBN: data.ISBN,
                reading_time: parseFloat(data.reading_time),
                img: res.data.data.display_url
            }
            // 
            const bookRes = await axiosSecure.post('/books', booksCollection);
            console.log(bookRes.data)
            if(bookRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the catalog`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log(res.data);
    };
    return (
        <div className="">
            <CategoryTitle title="Add A Book"></CategoryTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-between gap-6">
                        {/* Name */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Book name*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Book name"
                                {...register("name")}
                                className="input input-bordered w-full" />
                        </label>
                        {/* author */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Book author*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Book author"
                                {...register("author")}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex justify-between gap-6">
                        {/* ISBN */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">ISBN*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="ISBN"
                                {...register("ISBN")}
                                className="input input-bordered w-full" />
                        </label>
                        {/* published_date */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Book Published Date*</span>
                            </div>
                            <input
                                type="date"
                                placeholder="Book Published Date"
                                {...register("published_date")}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex justify-between gap-6">
                        {/* genre */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Genre*</span>
                            </div>
                            <select defaultValue="default" {...register("genre")}
                                className="select select-bordered w-full">
                                <option disabled selected value="value">Select A Genre</option>
                                <option value="Classic">Classic</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Non-Fiction">Non-Fiction</option>
                                <option value="Fantasy">Fantasy</option>
                            </select>
                        </label>

                        {/* reading_time */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Reading Time*</span>
                            </div>
                            <input
                                type="number"
                                placeholder="Reading Time"
                                {...register("reading_time")}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* img */}
                    {/* <div className="form-control w-full">
                        
                    </div> */}
                    <label className="form-control w-full">

                        <div className="label">
                            <span className="label-text">Book Photo*</span>
                        </div>
                        <input
                            type="file"
                            placeholder="Book Photo"
                            {...register("img")}
                            className="file-input w-full" />
                    </label>
                    {/* review */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Book Review*</span>
                        </div>
                        <textarea
                            type="text"
                            placeholder="Book Review"
                            {...register("review")}
                            className="textarea textarea-bordered h-24" ></textarea>
                    </label>
                    {/*  */}
                    {/* <input className="btn btn-info mt-4" type="submit" /> */}
                    <button className="btn btn-info mt-4">
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBooks;
// Fiction, Fantasy, Non-Fiction, Classic
// name, author, ISBN, published_date, genre, reading_time, img, review