import Image from "next/image";

function DayState({ day }: { day: boolean | undefined }) {
  return (
    <div className="flex items-center justify-center h-9">
      <Image src="/images/check.svg" width={12} height={12} alt="Green checkmark" />
    </div>
  );
}

export default DayState;