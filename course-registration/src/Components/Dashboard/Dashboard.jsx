import PropTypes from 'prop-types';
import List from '../List/List';

const Dashboard = ({ dashboard, courseCredit, remainingCredit, courcePrice }) => {

    // total credit hour, remaining credit, enrolled course

    return (
        <div className='w-1/4 mr-3 mt-3
         rounded-xl '>
            <div className='bg-white rounded-t-xl px-4 pt-3'>
                <h2 className='pb-2 font-bold text-sm text-sky-600'>Credit Hour Remaining {remainingCredit} hr</h2>
                <hr className='border-slate-200 border' />
            </div>

            <div className='bg-white px-4 pb-4'>
                <h2 className='font-bold text-base py-3'>Course Name</h2>
                {
                    dashboard.map((addList, idx) =>
                        <List key={idx} addList={addList} ></List>
                    )
                }
                <hr className='border-slate-200 border mt-4' />
            </div>

            <div className='bg-white px-4 text-xs font-medium text-slate-600'>
                <h2>Total Credit Hour : {courseCredit}</h2>
                <hr className='border-slate-200 border mt-3' />
            </div>

            <div className='bg-white rounded-b-xl px-4 py-4 text-xs font-semibold text-slate-600'>
                <h2>Total Price : {courcePrice.toFixed(2)} USD</h2>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    dashboard: PropTypes.array,
    courseCredit: PropTypes.number,
    remainingCredit: PropTypes.number,
    courcePrice: PropTypes.number,
}

export default Dashboard;