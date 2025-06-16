'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, parseISO } from 'date-fns';
import { useTranslation } from '@/hook/useTranslation';

type DeliverySectionProps = {
  holidayDates: string[];
};

export default function DeliverySection({ holidayDates }: DeliverySectionProps) {
    const { t } = useTranslation()
  const [isDateEnabled, setIsDateEnabled] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [deliveryTime, setDeliveryTime] = useState('指定なし');

  const minDate = addDays(new Date(), 4);
  const maxDate = addDays(new Date(), 14);
  const holidays = holidayDates.map((d) => parseISO(d));

  const isHoliday = (date: Date) => {
    return holidays.some(
      (h) =>
        h.getFullYear() === date.getFullYear() &&
        h.getMonth() === date.getMonth() &&
        h.getDate() === date.getDate()
    );
  };

  const filterDate = (date: Date) => {
    // Allow weekends and holidays
    return (
      date >= minDate &&
      date <= maxDate &&
      (date.getDay() === 0 || date.getDay() === 6 || isHoliday(date))
    );
  };

  const getDayClass = (date: Date) => {
    if (date.getDay() === 0) return 'day-sunday';
    if (date.getDay() === 6) return 'day-saturday';
    if (isHoliday(date)) return 'day-holiday';
    return 'day-weekday';
  };

  return (
    <div className='cart__footer' style={{display: 'flex', flexDirection: 'column'}}>
      <p className="red picker-notice">
        ※{t("メール便・レターパックはご指定頂いても対応不可となります。予めご了承くださいませ。")}
      </p>

      <div className="towa-picker">
        <span className="towa-picker-ttl day">{t("配送希望日")}</span>
        <input
          type="radio"
          name="attributes[delivery-date-select]"
          value="指定しない"
          defaultChecked
          id="datePicker__label--true"
          onChange={() => {
            setIsDateEnabled(false);
            setSelectedDate(null);
          }}
        />
        <label htmlFor="datePicker__label--true">{t("指定しない")}</label>

        <input
          type="radio"
          name="attributes[delivery-date-select]"
          value="指定する"
          id="datePicker__label--false"
          onChange={() => setIsDateEnabled(true)}
        />
        <label htmlFor="datePicker__label--false">{t("指定する")}</label>

        <DatePicker
          id="datepicker"
          name="attributes[delivery-date]"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy/MM/dd"
          placeholderText={t("配送希望日を選択する")}
          className={`hasDatepicker ${selectedDate ? getDayClass(selectedDate) : ''}`}
          disabled={!isDateEnabled}
          minDate={minDate}
          maxDate={maxDate}
          filterDate={filterDate}
        />
      </div>

      <div className="towa-picker towa-picker-2">
        <span className="towa-picker-ttl time">{t("配送希望時間帯（佐川急便）")}</span>
        <select
          id="delivery-time"
          name="attributes[delivery-time]"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
        >
          <option value="指定なし">{t("指定しない")}</option>
          <option value="08:00〜12:00">08:00〜12:00</option>
          <option value="12:00〜14:00">12:00〜14:00</option>
          <option value="14:00〜16:00">14:00〜16:00</option>
          <option value="16:00〜18:00">16:00〜18:00</option>
          <option value="18:00〜20:00">18:00〜20:00</option>
          <option value="19:00〜21:00">19:00〜21:00</option>
        </select>
      </div>

      <div className="cart__note field">
        <label htmlFor="Cart-note">{t("備考欄")}</label>
        <textarea
          className="text-area field__input"
          name="note"
          id="Cart-note"
          placeholder={t("備考欄")}
        />
      </div>
    </div>
  );
}
