import Stile from "./css/diaDaSemana.module.css"
function DiaDeSemana(props) {
    return (
     <>
        <div className={Stile.DivMaior}>
            <span className={Stile.Texto}>{props.texto}</span>
        </div> 
        <div className={Stile.Mae}>
          <input className={Stile.Imput} type={props.type} name={props.nome} placeholder={props.placeholder} value={props.value} onChange={props.onChange }/>
          <button className={Stile.BtnAdd} onClick={props.onChange2}>{props.btnEscrita}</button>
      </div>               
     </>
    );
}
export default DiaDeSemana;