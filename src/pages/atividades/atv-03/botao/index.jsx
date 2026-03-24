import styles from './index.module.css';

function Botao({ texto, aoClicar }) {

    let style = [styles.botao];

    if (texto === 'Cancelar') style.push(styles.anulacao);
    if (texto === 'Cadastrar') style.push(styles.cadastro);
    if (texto === 'Editar') style.push(styles.edicao);
    if (texto === 'Listar') style.push(styles.listagem);
    if (texto === 'Excluir') style.push(styles.exclusao);
    

    return (
        <button
            className={style.join(' ')}
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;