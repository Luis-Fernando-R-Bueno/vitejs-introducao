import { Link } from "react-router";

import styles from './index.module.css';

function Home() {

  return (
    <div className={styles.container}>      
      <div className={styles.containerLista}>
        <h1>Exemplos</h1>
        <Link to="/exemplo/1">Exemplo 1 - Componente básico</Link>
        <Link to="/exemplo/2">Exemplo 2 - Estilização com module</Link>
        <Link to="/exemplo/3">Exemplo 3 - State</Link>
        <Link to="/exemplo/4">Exemplo 4 - Componentes</Link>
        <Link to="/exemplo/5">Exemplo 5 - Formulário básico</Link>
        <Link to="/exemplo/6">Exemplo 6 - Diferentes tipos de input, select e textArea</Link>
        <Link to="/exemplo/7">Exemplo 7 - Seletores</Link>
        <Link to="/exemplo/8">Exemplo 8 - Uso de tabela</Link>
        <Link to="/exemplo/9">Exemplo 9 - Vídeo Player</Link>
        <Link to="/exemplo/10">Exemplo 10 - Dashboard</Link>
        <Link to="/exemplo/11">Exemplo 11 - Mockup</Link>
        <Link to="/exemplo/12">Exemplo 12 - Mockup + Local Storage</Link>
      </div>
      <div className={styles.containerLista}>
        <h1>Atividades</h1>
        <Link to="/atividade/1">Atividade 1 - Estilização básica</Link>
        <Link to="/atividade/2">Atividade 2 - State</Link>
        <Link to="/atividade/3">Atividade 3 - Componentes dinâmicos</Link>
        <Link to="/atividade/4">Atividade 4 - Formulário livre</Link>
        <Link to="/atividade/5">Atividade 5 - Formulário simulação</Link>
        <Link to="/atividade/6">Atividade 6 - Local Storage</Link>
      </div>
    </div>
  )
}

export default Home;