
import styles from './index.module.css';

function Exemplo02() {

  return (
    <div className={styles.container}>
      <h1>Aula Introdução Vite JS</h1>      
      <h2>Preparo do projeto</h2>
      <h3>Estilização</h3>
      <p>Entendendo uso de css dentro do projeto.</p>
      <label>Exemplo Label</label>
      <small>Exemplo Small</small>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, blanditiis delectus. Nihil sed consequuntur voluptate maiores, enim voluptates, deleniti voluptatum facere possimus facilis, molestiae nostrum placeat quidem consectetur suscipit sunt!. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nemo explicabo dicta sequi maiores nam laudantium? Doloremque deserunt voluptates quidem nulla delectus nam illum. Tenetur quisquam placeat consequuntur expedita quasi. 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat magnam incidunt fugit reprehenderit dolor quidem natus, iste eveniet inventore accusantium rerum culpa. Nisi tempore consequuntur suscipit quia maiores ab. Fugiat!
      </p>
      <div className={styles.containerBlocos}>
        <div className={styles.brancoBranco}></div>
        <div className={styles.brancoCinza}></div>
        <div className={styles.pretoPreto}></div>
        <div className={styles.pretoCinza}></div>
      </div>
    </div>
  )
}

export default Exemplo02;