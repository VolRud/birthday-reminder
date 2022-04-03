import { connect } from "react-redux";
import { EventForm } from "./EventForm";
import { Event } from "./Event";
import { useEffect, useState } from "react";
import { mainRequest } from "../services/mainRequest";
import { calendarAC } from "../store/AC";
import { isSameDay } from "date-fns";
import { useMutation, useQueryClient, useQuery, } from "react-query";
import { sortByDate } from "../utils/helpers";
import { ToPrevNextDay } from "./ToPrevNextDay";

const EventsList = (props) => {
    const [eventFormIsOpen, setEventFormOpen] = useState(false);

    const queryClient = useQueryClient();
    const { isLoading, error, data, isSuccess } = useQuery("eventList", () =>
        mainRequest('get')
    );
    const mutation = useMutation(requestData => {
        const { method, data, } = requestData;
        return mainRequest(method, data)
    }, {
      onSuccess: (data, variable) => {
            queryClient.invalidateQueries('eventList');
      }
    });
    const { chosenDate, } = props;
    const dayEvents = isSuccess && sortByDate(data.filter(item=>isSameDay(new Date(item.date), chosenDate)));
    const openEventForm = () => {
        setEventFormOpen(!eventFormIsOpen);
    }
    return(
        <div className="eventsList">
            <ToPrevNextDay
                chosenDate={chosenDate}
                setActiveDate={props.setActiveDate}
            />
            {isSuccess && dayEvents.map((item) => {
                return(
                    <Event
                        chosenDate={chosenDate}
                        mutation={mutation}
                        eventData={item}
                        key={item.id} 
                    />
                )
            })}
            {eventFormIsOpen
                ? (<EventForm
                    openEventForm={openEventForm}
                    isCreateForm={true}
                    mutation={mutation}
                    chosenDate={props.chosenDate}
                />)
                : (<button
                    onClick={openEventForm}
                >Add new event</button>)
            }
            
            
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
        setActiveDate: (date) => dispatch(calendarAC.setActiveDate(date)),
    }
);
  
export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
