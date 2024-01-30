import { kv } from "@vercel/kv";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import Calendar from "@/components/Calendar";

async function Habit({ params: { habit } }: { params: { habit: string } }) {
    const decodedHabit = decodeURI(habit);
    const habitStreak = await kv.hget("habits", decodedHabit);
   
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

        <Calendar />
   
      </main>
    )
}

export default Habit;