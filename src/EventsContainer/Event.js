import { format, getHours, getMinutes, getTime } from "date-fns";
import { useState } from "react";
import { EventForm } from "./EventForm";

export const Event = (props) => {
    const [editFormIsOpen, setOpmEditForm] = useState(false);
    const { chosenDate, eventData: { title, description, date, id, }, } = props;
    const deleteEvent = () => {
        props.mutation.mutate({
            method: 'DELETE',
            data: {id},
        });
    }
    const openEventForm = () => {
        setOpmEditForm(!editFormIsOpen);
    }
    const eventDataProp = {title, description, date, id, };
    const getTime = () => {
        return format(new Date(eventDataProp.date), 'HH:mm');}
    return editFormIsOpen ? (<EventForm
        openEventForm={openEventForm}
        chosenDate={chosenDate}
        mutation={props.mutation}
        eventDataProp={eventDataProp}
        isEditForm={true}
    />
    ):(
        <div className="event-body">
            <span className="event-title">
                <span>{getTime()}</span>
                <span>{title}</span>
                <div>
                    <button
                        onClick={openEventForm}
                    >Edit</button>
                    <button
                        onClick={deleteEvent}
                    >Delete</button>
                </div>
            </span>
            <p>{description}</p>
        </div>
    );
}

