import { Link } from "react-router-dom";


const CategoryTitle = ({title, navigate}) => {
    return (
        <div className="text-2xl text-green-400">
            <Link to={navigate}>{title}</Link>
        </div>
    );
};

export default CategoryTitle;