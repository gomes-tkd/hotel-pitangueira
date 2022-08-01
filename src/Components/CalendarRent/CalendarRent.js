import React, {useState} from 'react';
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

const CalendarRent = ({start, end, setStart, setEnd}) => {

    const minDate = new Date();

    function handleDates(e) {
        setStart(e.value[0]);
        setEnd(e.value[1]);
    }

    console.log("start: ", start);
    console.log("end: ", end);

    return (
        <div>
            <h2>Informe as datas</h2>
            <DateRangePickerComponent
                placeholder={"Informe as datas"}
                startDate={start}
                endDate={end}
                min={minDate}
                minDays={1}
                format="dd-MM-yyyy"
                onChange={handleDates}
            ></DateRangePickerComponent>
        </div>
    );
};

export default CalendarRent;