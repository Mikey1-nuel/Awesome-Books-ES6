import { DateTime } from './luxon.js';

const date = document.getElementById('date-time');
const live = () => {
  const now = DateTime.now();
  const newDate = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  date.innerHTML = newDate;
};
setInterval(live, 1000);
