/*
    Desafio Final: Sistema de Cadastro de Instrutor
    Cenário: Você foi contratado para criar a página de cadastro de novos professores da instituição. O formulário deve ser robusto e não permitir envios com dados incorretos.

    Requisitos do Formulário:
    Nome Completo: Obrigatório.

    E-mail: Deve ser um e-mail válido.

    Confirmação de E-mail: Deve ser exatamente igual ao campo acima.

    Senha: Mínimo de 8 caracteres.

    Força da Senha (Visual): Exibir uma mensagem em tempo real:

    Fraca (menos de 8 caracteres) - Cor Vermelha.

    Forte (8 ou mais caracteres) - Cor Verde.

    Termos de Uso: Um checkbox obrigatório que deve estar marcado para o botão "Cadastrar" funcionar.

    Estrutura de Código Sugerida:     

*/

import { useForm } from 'react-hook-form';

export default function Atividade10() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onChange"
    });

    const watchEmail = watch("email");
    const watchSenha = watch("senha", "");

    const onSubmit = (data) => {
        console.log("Sucesso!", data);
        alert("Professor cadastrado com sucesso!");
    };

    return (
        <div className="container">
            <h2>Cadastro de Instrutor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* 1. NOME */}
                <input {...register("nome", { required: "Nome é obrigatório" })} placeholder="Nome" />
                {errors.nome && <span>{errors.nome.message}</span>}

                {/* 2. E-MAIL */}
                {/* Implementar aqui... */}

                {/* 3. SENHA */}
                <input type="password" {...register("senha", { minLength: 8 })} />

                {/* 4. CONFIRMAÇÃO SENHA */}
                {/* Implementar usando validate: (val) => val === watchSenha || "..." */}                

                {/* 5. LÓGICA DE FORÇA DA SENHA */}
                <p style={{ color: watchSenha.length >= 8 ? 'green' : 'red' }}>
                    Força da senha: {watchSenha.length >= 8 ? 'Forte' : 'Fraca'}
                </p>

                {/* 6. CHECKBOX TERMOS */}
                <label>
                    <input type="checkbox" {...register("termos", { required: true })} />
                    Aceito os termos e condições
                </label>
                {errors.termos && <p>Você precisa aceitar os termos.</p>}

                <button type="submit">Finalizar</button>
            </form>
        </div>
    );
}