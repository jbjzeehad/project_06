import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi2';

const Card = ({ card }) => {
    const { image, course_name, credit, price, course_details } = card;
    return (
        <div className='p-2 bg-white m-2 rounded-xl'>
            <img src={image} />
            <div className=''>
                <p className='font-semibold text-sm my-2'>{course_name}</p>
                <p className='text-xs text-slate-500'>{course_details}</p>
            </div>
            <div className='flex items-center font-medium  my-2 gap-2'>
                <FiDollarSign></FiDollarSign>
                <p className='text-xs text-slate-600'>Price: {price}</p>
                <HiOutlineBookOpen></HiOutlineBookOpen>
                <p className='text-xs text-slate-600'>Credit: {credit}hr</p>

            </div>
            <button className="font-semibold text-sm bg-sky-600 text-white p-1 w-full rounded-lg">Select</button>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired
}


export default Card;