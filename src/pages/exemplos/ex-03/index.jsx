import { useState } from "react";

import styles from './index.module.css';

export default function Exemplo03() {  

    const [num, setNum] = useState(100);

    function handleIncrementa () {
        setNum(num + 1);
    }

    return (
        <div className={styles.container}>
            <label className={styles.texto}>{`Contador: ${num}`}</label>            
            <label 
                onClick={() => handleIncrementa()}
                className={styles.botao}
            >+1</label>
        </div>
    );
}