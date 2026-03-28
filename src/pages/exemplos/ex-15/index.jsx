/*
    O Padrão de Mercado (React Hook Form)
    npm install react-hook-form

    Atividade 9 :        
        - Criar um estado password e exibir o número de caracteres da senha em tempo real abaixo do input. 
        - Integra uma validação para e-mail completa com react-hook-form.
*/

import { useForm } from 'react-hook-form';

export default function Exemplo15() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (dados) => {
        console.log("Dados do Formulário:", dados);
        alert("Cadastro realizado!");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gap: '15px', width: '300px' }}>
            <div>
                <label>Nome Completo:</label>
                <input
                    {...register("nome", { required: "O nome é obrigatório" })}
                    placeholder="Ex: João Silva"
                />
                {errors.nome && <p style={{ color: 'orange' }}>{errors.nome.message}</p>}
            </div>

            <div>
                <label>Senha (mín. 6 caracteres):</label>
                <input
                    type="password"
                    {...register("senha", {
                        required: "Senha obrigatória",
                        minLength: { value: 6, message: "Mínimo de 6 caracteres" }
                    })}
                />
                {errors.senha && <p style={{ color: 'orange' }}>{errors.senha.message}</p>}
            </div>

            <button type="submit">Cadastrar</button>
        </form>
    );
}