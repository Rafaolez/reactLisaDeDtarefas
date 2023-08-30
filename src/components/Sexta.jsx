import { useEffect, useState } from "react";
import Stile from "./css/global.module.css"
import DiaDeSemana from "./DiaDeSemana";
import Ulli from "./AlgumacoisaDAUl"

function Sexta() {

  const [listaTarefas, setListaTarefas] = useState ( [] );
  const [ tarefa, setTarefas] = useState ( { id: '', texto: "", status: "" } );

  function addTarefas(){
      if(tarefa.texto !== ""){
        setListaTarefas([...listaTarefas, tarefa ]);
      }
  }
  function excluirTarefa(id) {  
    const novaLista = listaTarefas.filter((tarefa) => tarefa.id !== id);
    setListaTarefas(novaLista);
  }

  function statusTarefa(id, status){
      const index = listaTarefas.findIndex( ( tarefa ) => tarefa.id === id);
      const novoStatus = status;
      listaTarefas[index].status = !status;
      setListaTarefas([...listaTarefas]);
  }

  useEffect(() => {
    setTarefas({id: "", texto: "", status: ""});
  }, [listaTarefas])

  return (
    <>
      <DiaDeSemana texto=" Tarefas de Sexta" type="text" npme="tarefa" placeholder="Digite sua tarefa"  value= {tarefa.texto} onChange= { (e) => setTarefas( {id: Math.random(), texto: e.target.value, status: false} ) } onChange2={addTarefas} btnEscrita="Adicionar" />
      <Ulli teste={listaTarefas.map( (item, index) => (
                  <div className={Stile.DiviviDeTarefa}><li className={item.status ? 'Ativi' :  'Desativo'}  key={index}>{item.texto} <button onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? <i class="fa-solid fa-circle" className={Stile.icon1}></i> : <i class="fa-regular fa-circle" className={Stile.icon2}></i> }</button> <button className={Stile.betnX} onClick={ () => excluirTarefa(item.id) }><i class="fa-regular fa-circle-xmark" ></i></button></li></div>
                  ))}/>
      
    </>
  );
}

export default Sexta;