import Image from "next/image";
import { PiMailbox, PiPassword } from "react-icons/pi";

export const LogoSection = () => {
  return (
    <div>
      <Image src={"/logoPomp.png"} width={100} height={100} alt="erro" />
    </div>
  );
};

export const WelcomeSection = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-white">Seja Bem vindo!</h1>
    </div>
  );
};

export const LoginSection = () => {
  return (
    <div className="flex flex-col gap-4 mt-10 w-full">
      <div className="w-full bg-white/30 h-10 rounded-lg text-zinc-900 flex flex-row items-center p-2">
        <PiMailbox size={24} className="text-zinc-600" />
        <input
          className="bg-transparent h-full w-full outline-none p-4 text-zinc-900 placeholder-zinc-500/40"
          type="email"
          placeholder="E-Mail"
        />
      </div>
      <div className="w-full bg-white/30 h-10 rounded-lg text-zinc-900 flex flex-row items-center p-2">
        <PiPassword size={24} className="text-zinc-600" />
        <input
          className="bg-transparent h-full w-full outline-none p-4 text-zinc-900 placeholder-zinc-500/40"
          type="password"
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export function ButtonCadastro() {
  return (
    <div className=" flex flex-col gap-2">
      <Image src={"/googlelogin.png"} width={260} height={300} alt="error" />
      <Image src={"/applelogin.png"} width={260} height={300} alt="error" />
    </div>
  );
}

export const ButtonLogin = () => {
  return <button className="mt-2 w-full py-2 bg-orange-600 hover:bg-orange-700 hover:text-zinc-300 duration-700 rounded-lg text-white flex items-center justify-center">Entrar</button>;
};

export const TermosSection = () => {
  return <></>;
};
