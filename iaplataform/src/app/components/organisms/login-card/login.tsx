import {
  LogoSection,
  WelcomeSection,
  LoginSection,
  ButtonCadastro,
  ButtonLogin,
  TermosSection,
} from "../../molecules/Login/login-sections";

export default function CardLogin() {
  return (
    <div className="w-1/4 h-3/4 bg-white/30 backdrop-blur-md rounded-lg border border-white/20 p-6 shadow-lg flex flex-col">
      <div className="w-full p-2 flex flex-col justify-center items-center gap-5">
        <LogoSection />
        <WelcomeSection />
        <LoginSection />
        <p className="text-white text-sm font-semibold">Ou</p>
        <ButtonCadastro/>
        <ButtonLogin />
        <TermosSection />
      </div>
    </div>
  );
}
