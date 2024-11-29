import React from 'react'
import { gradients, baseRating, demoData } from '@/utils';

const months = {'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sep', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec'};
const days = {'Sunday': 'Sun', 'Monday': 'Mon', 'Tuesday': 'Tue', 'Wednesday': 'Wed', 'Thursday': 'Thu', 'Friday': 'Fri', 'Saturday': 'Sat'};
const now = new Date();

export default function Calender(props) {
  const { demo, completeData, handleSetMood } = props
  const year = 2024;
  const month = 'September';
  const monthNow = new Date(year, Object.keys(months).indexOf(month), 1);
  const firstDayOfMonth = monthNow.getDay();
  const daysInMonth = new Date(year, Object.keys(months).indexOf(month) + 1, 0).getDate();

  const daysToDisplay = firstDayOfMonth + daysInMonth;
  const numRows = (Math.floor(daysToDisplay / 7)) + (daysToDisplay % 7 > 0 ? 1 : 0);

  const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className='flex flex-col gap-1 overflow-hidden justify-evenly border-2 border-indigo-900 rounded-2xl my-5 p-5'>
        {[...Array(numRows).keys()].map((row, rowIndex) => {
          return (
            <div key={rowIndex} className='grid grid-cols-7 gap-1'> 
            {dayList.map((dayOfWeek, dayOfWeekIndex) => {
              let dayIndex = rowIndex * 7 + dayOfWeekIndex - (firstDayOfMonth - 1);
             
              let dayDisplay = dayIndex > daysInMonth ? false : (row === 0 && dayOfWeekIndex < firstDayOfMonth) ? false : true;

              let isToday = dayIndex === now.getDate();

              // if (dayDisplay) {
              //   return (
              //     <div key={dayOfWeekIndex} className={`w-10 h-10 flex items-center justify-center rounded-full ${isToday ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : ''}`}>
              //     {dayIndex}
              //     </div>
              //   )
              // }

              if (!dayDisplay) {
                   return (
                     <div key={dayOfWeekIndex} className='bg-slate-900'>
                      
                     </div>
                   )
                 }

                 let color = demo ? gradients.indigo [baseRating [dayIndex]] : dayIndex in demoData ? gradients.indigo [demoData [dayIndex]] : 'white';

                 return (
                  <div style={{background: color}} key={dayOfWeekIndex} className={`flex items-center justify-center rounded-s border-2 border-indigo-900 p-5 ${isToday ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : ''} ${color === 'white' && !isToday ? 'text-indigo-400' : 'text-white'}`}>
                  {dayIndex}
                  </div>
                 )

            })}
            </div>
          )
          
        })
        
      } 
     
    </div>
    )
  
}
