import Day from "./Day";
import uniqid from 'uniqid';

export const Week = (props) => {
    const { weekDays, } = props;
    return(
        <div className='week'>
            {weekDays.map((item, i) => {
                return (
                        <Day
                            setActiveDate={props.setActiveDate}
                            date={item}
                            key={uniqid()}
                        />
                    )
            })}
        </div>
    );
}