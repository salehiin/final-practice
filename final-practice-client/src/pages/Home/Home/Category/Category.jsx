const Category = ({ item }) => {
    const { name, review } = item;
    return (
        // <div className="grid grid-cols-3">
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{review}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Borrow</button>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Category;