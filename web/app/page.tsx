import { Maiden_Orange } from "next/font/google";
import Image from "next/image";
import { json } from "stream/consumers";

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
          <p key={habit} className="text-white">
            {habit} - {JSON.stringify(habitStreak)}
          </p>
        ))
      }
   </main>
  );
}
