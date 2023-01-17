import { DateTime } from "./luxon.js";


const clock = document.querySelector('#clock')
 
/* Get the object and it's properties */ 
export const setTime = () => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  clock.innerHTML = date;
};
