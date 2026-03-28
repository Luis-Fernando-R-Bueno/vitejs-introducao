/*
    - O uso do watch: O watch é preferível ao useState dentro do React Hook Form porque ele evita renderizações 
    desnecessárias em outros componentes da página, focando apenas no que é necessário para o formulário.

    - Expressões Regulares / RegEx: O campo pattern utiliza uma RegEx padrão para validar e-mails.
    Validações complexas (como CPF ou CEP) geralmente utilizam esse formato.

    - Propriedade mode: No useForm, usei o mode: "onBlur". Isso faz com que a validação ocorra 
    quando o usuário clica fora do campo, melhorando a experiência. 

    -Na função validate: Dentro do register, usamos validate: (value) => .... O parâmetro value é o que o usuário digitou 
    no campo atual (Confirmação), e comparamos com a senha que estamos "vigiando" com o watch.

    - Feedback Condicional: Se o retorno da função for uma String, o React Hook Form entende que aquilo é a mensagem de erro a ser exibida no objeto errors.

    - O watch funciona como um "olheiro" que avisa ao React toda vez que o valor de um campo muda, permitindo comparações dinâmicas entre inputs diferentes.
*/

import { useForm } from 'react-hook-form';

export default function Atividade09() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        mode: "onBlur"
    });

    // Monitorando a senha para a lógica de confirmação e contador
    const senhaPrincipal = watch("senha", "");

    const onSubmit = (dados) => {
        console.log("Dados validados:", dados);
        alert("Cadastro realizado com sucesso!");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gap: '15px', width: '350px', padding: '20px' }}>

            {/* Campo de E-mail */}
            <div>
                <label>E-mail:</label>
                <input
                    type="text"
                    {...register("email", {
                        required: "O e-mail é obrigatório",
                        pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: "Formato de e-mail inválido"
                        }
                    })}
                />
                {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</p>}
            </div>

            {/* Campo de Senha com Contador */}
            <div>
                <label>Senha:</label>
                <input
                    type="password"
                    {...register("senha", {
                        required: "Senha obrigatória",
                        minLength: { value: 6, message: "Mínimo de 6 caracteres" }
                    })}
                />
                <p style={{ fontSize: '12px', color: '#666' }}>
                    Caracteres: <strong>{senhaPrincipal.length}</strong>
                </p>
                {errors.senha && <p style={{ color: 'red', fontSize: '12px' }}>{errors.senha.message}</p>}
            </div>

            {/* ATIVIDADE: Confirmação de Senha */}
            <div>
                <label>Confirme sua Senha:</label>
                <input
                    type="password"
                    {...register("confirmarSenha", {
                        required: "Confirmação de senha obrigatória",
                        validate: (value) =>
                            value === senhaPrincipal || "As senhas não coincidem"
                    })}
                />
                {errors.confirmarSenha && <p style={{ color: 'red', fontSize: '12px' }}>{errors.confirmarSenha.message}</p>}
            </div>

            <button type="submit" style={{ cursor: 'pointer', padding: '10px' }}>
                Finalizar Cadastro
            </button>
        </form>
    );
}