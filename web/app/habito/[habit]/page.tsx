
async function Habit({ params: { habit } }: { params: { habit: string } }) {
    const decodedHabit = decodeURI(habit);
    return(
        <h1 className="text-white">{decodedHabit}</h1>
    )
}

export default Habit;