import PropTypes from 'prop-types';

const Card = ({ card }) => {
    const { image, course_name, credit, price, course_details } = card;
    return (
        <div>
            <img src={image} />
            <div>
                <p>{course_name}</p>
                <p>{course_details}</p>
            </div>
            <div>
                <div>Price: {price}</div>
                <div>Credit: {credit}hr</div>
            </div>
            <button className="p-3 bg-cyan-400 text-white">Select</button>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired
}


export default Card;