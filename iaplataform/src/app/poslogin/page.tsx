import { PiCameraPlus } from "react-icons/pi";


export default function Poslogin() {
  return (
    <section className="flex flex-row">
      {/* SIDEBAR */}
      <div className="w-2/12 bg-zinc-300 h-screen"></div>

      {/* TEXTS INPUTS */}
      <div className="w-full bg-zinc-200 flex flex-col justify-between p-6 items-center">
        <div>jenjde</div>

        {/* input */}
        <div className="w-2/4 h-20 bg-zinc-300 rounded-lg flex flex-col p-4 gap-2">
          <div className="w-full h-1/2 flex justify-center items-center">
            <input
              type="text"
              placeholder="Faça uma pergunta para o PompAI"
              className="w-full bg-transparent outline-none placeholder-slate-400"
            />
          </div>
          {/* FOTO */}
          <div className="w-full h-1/2 flex flex-row items-center">
            <PiCameraPlus size={20}/>
          </div>
        </div>
      </div>
    </section>
  );
}
