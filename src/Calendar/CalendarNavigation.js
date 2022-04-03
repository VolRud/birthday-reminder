import { connect } from 'react-redux';
import { calendarAC } from '../store/AC';

const CalendarNavigation = (props) => {
    const prev = () => {
        props.toPreviousMonth();
    }
    return(
        <div className='calendar-nav'>
            <div onClick={prev}>
                To previous
            </div>

            <div onClick={props.toNextMonth}>
                To next
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = dispatch => (
	{
        toNextMonth: () => dispatch(calendarAC.switchToNextsMonth()),
        toPreviousMonth: () => dispatch(calendarAC.switchToPreviousMonth()),
	}
);
  
export default connect(mapStateToProps, mapDispatchToProps)(CalendarNavigation);
