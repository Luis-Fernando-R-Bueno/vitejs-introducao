import { Link } from "react-router";
import styles from'./index.module.css';

function Home() {

return(
  <div className={styles.container}>

    <div className={styles.containerLista}>
      
      <h1>Exemplos</h1>
      <Link to="/exemplo/1">Exemplo 1</Link>
      <Link to="/exemplo/2">Exemplo 2</Link>
      <Link to="/exemplo/3">Exemplo 3</Link>
    </div>

    <div className={styles.containerLista}>
      <h1>Atividades</h1>
      <Link to="/atividade/1">Atividade 1</Link>
    </div>

  </div>
  )
}

export default Home;