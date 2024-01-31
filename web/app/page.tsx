import DayState from "@/components/DayState";
import { kv } from "@vercel/kv";
import { Maiden_Orange } from "next/font/google";
import Image from "next/image";
import { json } from "stream/consumers";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";

export type Habits = {
  [habit: string]: Record<string, boolean>;
} | null;

export default async function Home() {
  const habits: Habits = await kv.hgetall("habits");
  const today = new Date();//dia atual
  // const todayWeekDay = 3;
  const todayWeekDay = today.getDay();// indice de 0 1 6
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const sortedWeekDays = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));

  const last7Days = weekDays
    .map((_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - index);

      return date.toISOString().slice(0, 10);
  }).reverse();


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

              <DeleteButton habit={habit} />

            </div>
            <Link href={`habito/${habit}`}>
              <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
                {sortedWeekDays.map((day, index) => (
                  <div key={day} className="flex flex-col last:font-bold">
                    <span className="font-sans text-xs text-white text-center">{day}</span>
                    <DayState day={habitStreak[last7Days[index]]} />
                  </div>
                ))}
              </section>
            </Link>
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
