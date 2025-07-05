// src/components/TourCalendar.jsx
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function TourCalendar({ tours }) {
  const localizer = momentLocalizer(moment);
  const events = tours.map(tour => ({
    title: tour.title,
    start: new Date(tour.date),
    end: new Date(tour.date),
  }));
  return (
    <div className="bg-white p-4 rounded shadow">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}