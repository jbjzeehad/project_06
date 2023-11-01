import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (

        <div className="border grid grid-cols-3 border-red-500 p-2 w-3/4">
            {
                courses.map(card => <Card key=
                    {card.id}
                    card={card}
                ></Card>)
            }
        </div>
    );
};

export default Cards;