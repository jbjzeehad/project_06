import PropTypes from 'prop-types';
import List from '../List/List';

const Dashboard = ({ dashboard }) => {
    return (
        <div className='w-1/4 mr-3 mt-3
         rounded-xl '>
            <div className='bg-white rounded-t-xl px-4 pt-3'>
                <h2 className='pb-2 font-bold text-sm text-sky-600'>Credit Hour Remaining 20 hr</h2>
                <hr className='border-slate-200 border' />
            </div>

            <div className='bg-white px-4 pb-4'>
                <h2 className='font-bold text-base py-3'>Course Name</h2>
                {/* <h2 className='font-bold text-lg py-3'>Course Name {dashboard.length}</h2> */}
                {
                    dashboard.map((addList, idx) =>
                        <List key={idx} addList={addList} ></List>
                    )
                }
                <hr className='border-slate-200 border mt-4' />
            </div>
            <div className='bg-white px-4 text-xs font-medium text-slate-600'>
                <h2>Total Credit Hour : 13</h2>
                <hr className='border-slate-200 border mt-3' />
            </div>
            <div className='bg-white rounded-b-xl px-4 py-4 text-xs font-semibold text-slate-600'>
                <h2>Total Price : 48000 USD</h2>
            </div>

        </div>
    );
};

Dashboard.propTypes = {
    dashboard: PropTypes.array
}

export default Dashboard;