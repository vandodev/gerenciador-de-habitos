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

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

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
              {/* {['Dom', 'Seg','Terc', 'Qua', 'Qui', 'Sex', 'Sab'].map(day => ( */}
              {weekDays.map(day => (
                <span key={day} className="font-sans text-xs text-white text-center">{day}</span>
              ))}
            </section>
          </div>
        ))
      }
   </main>
  );
}
