/*
    Validação com Estados (Controlled Components)
        Aqui é onde o React brilha. Nós monitoramos o que o usuário digita e validamos em tempo real usando o useState.

    Atividade: 
        7- Criar um estado password e exibir o número de caracteres da senha em tempo real abaixo do input.
        8- Por que validar no onChange (tempo real) vs no onSubmit (ao clicar)? Agora crie um formulário com e-mail, senha e confirmação de senha com  a validação sendo executada no onSubmit.
        
*/

import { useState } from 'react';

export default function Exemplo14() {
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');

  const validarEmail = (valor) => {
    setEmail(valor);
    if (!valor.includes('@')) {
      setErro('Por favor, insira um e-mail válido.');
    } else {
      setErro('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Cadastro</h2>
      <input
        type="text"
        value={email}
        onChange={(e) => validarEmail(e.target.value)}
        style={{ borderColor: erro ? 'red' : 'initial' }}
      />
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <button disabled={erro || !email}>Cadastrar</button>
    </div>
  );
}