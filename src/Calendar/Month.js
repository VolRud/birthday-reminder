import { Week } from "./Week";
import uniqid from 'uniqid';

export const Month = (props) => {
    const { month, } = props;
    return(
        <div className='month-wrapper'>
            {month.map(item => {
                return(
                    <Week
                        setActiveDate={props.setActiveDate}
                        weekDays={item}
                        key={uniqid()}
                    />
                )
            })}
        </div>
    );
}