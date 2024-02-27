import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full bg-[#DAE5F5] flex flex-col items-center justify-center">
      <div className="max-w-[600px] flex-1 flex flex-col justify-center items-center">
        <Image
          src="/blank-screen.png"
          alt="Pocket Notes"
          width={500}
          height={500}
        />
        <h1 className="font-bold text-4xl text-center py-4">Pocket Notes</h1>
        <div className="font-bold text-zinc-700 text-justify">
          Send and receive messages without keeping your phone online.
          <p> Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 py-5">
        <Image src={"/assets/lock.svg"} alt="lock" width={10} height={10} />
        <div>end-to-end encrypted</div>
      </div>
    </div>
  );
}
