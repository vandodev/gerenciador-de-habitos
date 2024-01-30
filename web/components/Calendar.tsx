import ArrowIcon from "@/components/ArrowIcon";

/* https://stackoverflow.com/questions/13146418/find-all-the-days-in-a-month-with-date-object */
function getDaysInMonth(month: number, year: number) {
    const date = new Date(year, month, 1);
    const firstDayWeekDay = date.getDay();
    const numberOfEmptyDays = Array(firstDayWeekDay).fill(null);
    const days = [...numberOfEmptyDays];
    // const days = [null, null, null, Date, Date];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  } 

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

function Calendar(){
    const daysInMonth =  getDaysInMonth(currentMonth, currentYear);
    const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    console.log(daysInMonth)
    return(     

        <section className="w-full my-2 rounded-md bg-neutral-800">
          <div className="flex justify-between mx-2 my-4 font-sans text-neutral-400">
            <button >
              <ArrowIcon className="stroke-neutral-400" width={12} height={12} />
            </button>
            <span>Janeiro de 2024</span>
            <button>
              <ArrowIcon width={12} height={12} className="rotate-180 stroke-neutral-400"/>
            </button>
          </div>

          <div className="grid w-full grid-cols-7 mt-2">
            {weekDays.map((day) => (
              <div key={day} className="flex flex-col items-center p-2">
                <span className="font-sans text-xs font-light text-neutral-200">
                  {day}
                </span>
              </div>
            ))}

            {daysInMonth.map((day, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-2"
                  >
                  <span className="font-sans text-xs font-light text-neutral-400 text-center">
                    {day?.getDate()}
                  </span>
              
                </div>
            ))}

          </div>
        </section>
    )
}

export default Calendar;