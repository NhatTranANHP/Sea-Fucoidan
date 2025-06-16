// components/DeliveryDatePicker.tsx

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addDays, isSameDay, parseISO } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  holidayDates: string[];
};

export default function DeliveryDatePicker({ holidayDates }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [enableDatePick, setEnableDatePick] = useState(false);

  const minDate = addDays(new Date(), 4);
  const maxDate = addDays(new Date(), 14);

  const isHoliday = (date: Date) =>
    holidayDates.some((holiday) => isSameDay(date, parseISO(holiday)));

  const dayClassName = (date: Date) => {
    if (date.getDay() === 0) return 'day-sunday';
    if (date.getDay() === 6) return 'day-saturday';
    if (isHoliday(date)) return 'day-holiday';
    return 'day-weekday';
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="attributes[delivery-date-select]"
            value="指定する"
            onChange={() => setEnableDatePick(true)}
          />
          指定する
        </label>

        <label>
          <input
            type="radio"
            name="attributes[delivery-date-select]"
            value="指定しない"
            onChange={() => {
              setEnableDatePick(false);
              setSelectedDate(null);
            }}
          />
          指定しない
        </label>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <input
          id="datepicker"
          name="attributes[delivery-date]"
          className="form-control"
          disabled={!enableDatePick}
          value={selectedDate ? selectedDate.toLocaleDateString('ja-JP') : ''}
          readOnly
        />

        {enableDatePick && (
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={minDate}
            maxDate={maxDate}
            dayClassName={dayClassName}
            inline
          />
        )}
      </div>
    </div>
  );
}
