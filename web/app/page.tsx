import DayState from "@/components/DayState";
import { Maiden_Orange } from "next/font/google";
import Image from "next/image";
import { json } from "stream/consumers";
import Link from "next/link";


export default function Home() {
  const habits = {
    'beber água':{
      '2024-19-01':true,
      '2024-20-01':false,
      '2024-21-01':true,
    },
    'Estudar programação':{
      '2024-19-01':true,
      '2024-20-01':true,
      '2024-21-01':true,
    },
  }
  const today = new Date();//dia atual
  // const todayWeekDay = 3;
  const todayWeekDay = today.getDay();// indice de 0 1 6
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const sortedWeekDays = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
        {habits === null ||
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
            Você não tem hábitos cadastrados
          </h1>
        ))}

      {habits !== null &&
      Object.entries(habits).map(
        ([habit, habitStreak]) => (
          <div key={habit}>
            <div className="flex justify-between items-center">
              <span className="text-xl font-light text-white font-sans">
                  {habit}
              </span>

              <button><Image src="/images/trash.svg" width={20} height={20} alt="icone de lixeira para apagar habito"/></button>
            </div>

            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {sortedWeekDays.map(day => (
                <div key={day} className="flex flex-col last:font-bold">
                  <span className="font-sans text-xs text-white text-center">{day}</span>
                  <DayState day={false} />
                </div>
              ))}
            </section>
          </div>
        ))
      }

<     Link
        href="novo-habito"
        className="fixed text-center bottom-10 w-2/3 left-1/2 -translate-x-1/2 text-neutral-900 bg-[#45EDAD] font-display font-regular text-2xl p-2 rounded-md"
      >
        Novo hábito
      </Link>
   </main>
  );
}
