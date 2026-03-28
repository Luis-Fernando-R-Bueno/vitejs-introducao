/*
    Por que validar?
        Antes do código, é importante entender que a validação acontece em dois momentos:
        Client-side (Navegador): Melhora a experiência do usuário (UX), dando feedback imediato.
        Server-side (API): É a única que garante a segurança real dos dados.

    Validação Nativa (HTML5)
        A maneira mais simples é usar os atributos que o próprio navegador oferece. O React apenas gerencia o envio.
*/

export default function Exemplo13() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        required 
        placeholder="Seu e-mail" 
      />
      <input 
        type="password" 
        required 
        minLength="6" 
        placeholder="Senha (mín. 6 caracteres)" 
      />
      <button type="submit">Enviar</button>
    </form>
  );
}