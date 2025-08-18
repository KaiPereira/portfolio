import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between flex-col h-[90px]">
      <div className="w-full h-1/5 bg-black"></div>
      <div className="font-sans inline-flex flex-nowrap gap-2 h-3/5 text-6xl text-nowrap">
        <p className="infinite-scroll">WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME!</p>
        <p className="infinite-scroll">WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME! WELCOME!</p>
      </div>
      <div className="w-full h-1/5 bg-black"></div>
    </div>
  );
}
