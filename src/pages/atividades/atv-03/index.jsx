import { useState } from 'react';

import Botao from './botao';

import styles from './index.module.css';


const acoes = ['Cancelar', 'Cadastrar', 'Editar', 'Listar', 'Excluir'];

// Alternativa para atividade uso do utilitário CLSX: npm install clsx

function Atividade03() {
    
    const [acao, setAcao] = useState(0);

    return (
        <div className={styles.container}>
            <h1>Atividade 3</h1>
            <h2>Ação selecionada: {acoes[acao]}</h2>

            <div>
                <Botao texto={acoes[1]} aoClicar={() => setAcao(1)} />
                <Botao texto={acoes[2]} aoClicar={() => setAcao(2)} />
                <Botao texto={acoes[3]} aoClicar={() => setAcao(3)} />
                <Botao texto={acoes[4]} aoClicar={() => setAcao(4)} />
                <Botao texto={acoes[0]} aoClicar={() => setAcao(0)} />
            </div>
        </div>
    );
}

export default Atividade03;