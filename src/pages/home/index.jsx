import { Link } from "react-router";
import styles from'./index.module.css';

function Home() {

return(
  <div className={styles.container}>

    <div className={styles.containerLista}>
      <h1>Exemplos</h1>
      <Link to="/exemplo/1">Exemplo 1</Link>
      <Link to="/exemplo/2">Exemplo 2</Link>
    </div>

    <div className={styles.containerLista}>
      <h1>Atividades</h1>
    </div>

  </div>
  )
}

export default Home;