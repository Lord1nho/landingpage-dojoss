import Header from "@/app/components/Header";
import Equipe from "@/app/components/Equipe";
import Funcionalidades from "@/app/components/Funcionalidades";
import Objetivo from "@/app/components/Objetivo";
import Pitch from "@/app/components/Pitch";
import Diferenciais from "@/app/components/Diferenciais";

export default function Home() {
  return (
      <>
        <Header></Header>
        <Objetivo></Objetivo>
        <Diferenciais></Diferenciais>
        <Funcionalidades></Funcionalidades>
        <Pitch></Pitch>
        <Equipe></Equipe>
      </>
  );
}
