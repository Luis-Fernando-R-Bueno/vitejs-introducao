import { useState } from "react";

import styles from './index.module.css';

export default function Atividade02() {

    const [num, setNum] = useState(100);

    function handleIncrementa() {
        setNum(num + 1);
    }

    function handleDecrementa() {
        setNum(num - 1);
    }

    return (
        <div className={styles.container}> 
        <h1>Atividade 2</h1>
        <p>Contardor incrementando e decrementando com uso de useState do React</p>
        <br /><br /><br />
            <div className={styles.containerOperacoes}>
                <div className={styles.containerLabel}>
                    <label
                        onClick={() => handleDecrementa()}
                        className={styles.botao}
                    >-1</label>
                </div>
                <div className={styles.containerLabel}>
                    <label className={styles.texto}>{`Contador: ${num}`}</label>
                </div>
                <div className={styles.containerLabel}>
                    <label
                        onClick={() => handleIncrementa()}
                        className={styles.botao}
                    >+1</label>
                </div>
            </div>
        </div>
    );
}