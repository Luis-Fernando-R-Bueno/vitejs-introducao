import { useState, useEffect } from 'react'; 

import styles from './index.module.css';

export default function Exemplo08() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        // Simulando JSON de API
        const dadosApi = [
            { id: 1, nome: "Notebook", preco: 4500, img: "https://images.pexels.com/photos/943596/pexels-photo-943596.jpeg?_gl=1*8pnskw*_ga*ODk3NTE1NzA1LjE3NzQzMDcyNDI.*_ga_8JE65Q40S6*czE3NzQzMDcyNDEkbzEkZzEkdDE3NzQzMDczMTYkajU5JGwwJGgw" },
            { id: 2, nome: "Mouse", preco: 150, img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?_gl=1*1qlwv95*_ga*ODk3NTE1NzA1LjE3NzQzMDcyNDI.*_ga_8JE65Q40S6*czE3NzQzMDcyNDEkbzEkZzEkdDE3NzQzMDczNjIkajEzJGwwJGgw" }
        ];
        setProdutos(dadosApi);
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map(p => (
                    <tr key={p.id}>
                        <td><div className={styles.controlImg}><img src={p.img} alt={p.nome} style={{ borderRadius: '50%' }} /></div></td>
                        <td>{p.nome}</td>
                        <td>R$ {p.preco}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}