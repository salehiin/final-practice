import Category from '../../Category/Category';
import CategoryTitle from '../../../../../components/CategoryTitle/CategoryTitle';

const BookCategory = ({ items, title  }) => {
    return (
        <div>
                {/* {title && <CategoryTitle title={title} navigate={"/"} ></CategoryTitle>} */}
            <div className='grid grid-cols-3'>

                {
                    items.map((item) => <Category
                        key={item.ISBN}
                        item={item}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default BookCategory;