import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

//  fetching data from json

const Cards = ({ addCourseToList, addCredit, addCoursePrice, disButton }) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="grid grid-cols-3 p-1 w-3/4">
            {
                courses.map(card => <Card
                    key={card.id}
                    card={card}
                    addCourseToList={addCourseToList}
                    addCredit={addCredit}
                    addCoursePrice={addCoursePrice}
                    disButton={disButton}
                ></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    addCourseToList: PropTypes.func,
    addCredit: PropTypes.func,
    addCoursePrice: PropTypes.func,
    disButton: PropTypes.bool
}

export default Cards;