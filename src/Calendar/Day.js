import { getDate } from "date-fns";
import { connect } from "react-redux";
import { isSameDay } from 'date-fns';

const Day = (props) => {
    const { date, chosenDate, } = props;
    const isChoosenDay = isSameDay(date, chosenDate);
    return(
        <div
            onClick={()=>props.setActiveDate(date)}
            className={isChoosenDay ? 'choosen-day' : 'day'}
        >
            {getDate(date)}
        </div>
    );
}

const mapStateToProps = (state) => {
	const { chosenDate, } = state.calendar;
	return {
        chosenDate,
	};
};

const mapDispatchToProps = dispatch => (
	{

    }
);
  
export default connect(mapStateToProps, mapDispatchToProps)(Day);
