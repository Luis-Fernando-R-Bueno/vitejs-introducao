/*
    - onChange (Tempo Real): Bom para validações simples (ex: "tem @?"). Ruim para validações complexas ou de banco de dados, 
    pois pode ser irritante mostrar erro enquanto a pessoa ainda está digitando o primeiro caractere.

    - onSubmit (Ao clicar): Melhor para validações de comparação (como confirmar senha) e para manter a interface "limpa" até 
    que o usuário termine sua intenção de envio.

    - formData: em vez de criar 3 useState diferentes, usar um objeto para o formulário é uma prática comum em React para manter 
    o código organizado quando o número de campos cresce.
*/

import { useState } from 'react';

export default function Atividade08() {
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
        confirmarSenha: ''
    });
    const [erro, setErro] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Importante: evita o refresh da página
        setErro(''); // Limpa erros anteriores

        const { email, senha, confirmarSenha } = formData;

        // Lógica de validação disparada apenas aqui
        if (!email.includes('@')) {
            setErro("E-mail inválido.");
            return;
        }
        if (senha.length < 6) {
            setErro("A senha deve ter no mínimo 6 caracteres.");
            return;
        }
        if (senha !== confirmarSenha) {
            setErro("As senhas não conferem!");
            return;
        }

        alert("Formulário validado e enviado com sucesso!");
        console.log("Dados prontos para API:", formData);
    };

    // Função genérica para atualizar qualquer campo do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h3>Validação no onSubmit</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    name="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                />
                <input
                    name="senha"
                    type="password"
                    placeholder="Senha"
                    onChange={handleChange}
                />
                <input
                    name="confirmarSenha"
                    type="password"
                    placeholder="Confirme a Senha"
                    onChange={handleChange}
                />

                {erro && <p style={{ color: 'red', fontWeight: 'bold' }}>{erro}</p>}

                <button type="submit">Cadastrar Usuário</button>
            </form>
        </div>
    );
}