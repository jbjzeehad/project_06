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
        <div className="border border-red-500 p-6 w-3/4">
            <h1 className="border">Cards: {courses.length}</h1>
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