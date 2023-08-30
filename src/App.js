import Domingo from "./components/Domingo";
import Quarta from "./components/Quarta";
import Quinta from "./components/Quinta";
import Sabado from "./components/Sabado";
import Sexta from "./components/Sexta";
import Terça from "./components/Terça";
import Teste from "./components/TesteParaDividir"
import Stile from "./components/css/global.module.css"
function App() {

  return (
    <>
    <div className={Stile.divMAiorMEnu}>
      <span className={Stile.Texto}>Tarefas para fazer </span>
    </div>
      <Domingo/>
      <br/>
      <Teste/>
      <br/>
      <Terça/>
      <br/>
      <Quarta/>
      <br/>
      <Quinta/>
      <br/>
      <Sexta/>
      <br/>
      <Sabado/>
    </>
  );
}

export default App;
