import { useState } from 'react';

export default function Atividade07() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erroEmail, setErroEmail] = useState('');

    const validarEmail = (valor) => {
        setEmail(valor);
        setErroEmail(!valor.includes('@') ? 'E-mail inválido' : '');
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px' }}>
            <h3>Contador de Caracteres (Tempo Real)</h3>
            <input
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => validarEmail(e.target.value)}
            />
            {erroEmail && <p style={{ color: 'red' }}>{erroEmail}</p>}

            <br /><br />

            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {/* Exibição do número de caracteres em tempo real */}
            <p>Comprimento da senha: <strong>{password.length}</strong> caracteres</p>
        </div>
    );
}