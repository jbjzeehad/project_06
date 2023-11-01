import PropTypes from 'prop-types';

const List = ({ addList }) => {
    const { course_name } = addList;
    return (
        <div className=" text-slate-500 text-xs mt-1">
            <p> {course_name}</p>
        </div>
    );
};

List.propTypes = {
    addList: PropTypes.object
}


export default List;