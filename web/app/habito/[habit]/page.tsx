import { kv } from "@vercel/kv";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";

async function Habit({ params: { habit } }: { params: { habit: string } }) {
    const decodedHabit = decodeURI(habit);
    const habitStreak = await kv.hget("habits", decodedHabit);
    const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

    return(
      <main className="container relative flex flex-col gap-8 px-12 pt-16">
        <h1 className="text-2xl font-light text-center text-white font-display">
          {decodedHabit}
        </h1>
  
        <Link
          className="flex items-center font-sans text-xs text-neutral-300 gap-2"
          href="/"
        >
          <ArrowIcon width={12} height={12} />
          Voltar
        </Link>

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

          </div>
        </section>

   
      </main>
    )
}

export default Habit;