/*
    - Lógica do validate: O value === watchSenha é uma forma elegante de comparar campos 
      (como senha e confirmação) sem precisar criar funções complexas fora do formulário.

    - Feedback Visual Condicional: A cor do texto de "Força" muda dinamicamente: 
      watchSenha.length >= 8 ? 'green' : 'orange'.

    - Validação de Checkbox: O checkbox valida o booleano (true/false). 
      Se obrigatório e desmarcado, ele gera erro. 

      "O que aconteceria se removêssemos o mode: 'onChange' do useForm?" (Resposta: A força da senha e os erros só apareceriam ao tentar enviar ou sair do campo).

    "Como poderíamos adicionar um campo de 'Idade' que só aceite maiores de 18 anos?" (Dica: usar valueAsNumber: true e min: 18 no register).
*/

import { useForm } from 'react-hook-form';

export default function Atividade10() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        mode: "onChange" // Validação em tempo real para feedback de força e comparação
    });

    // "Vigiando" a senha para a lógica de força e para comparar com a confirmação
    const watchSenha = watch("senha", "");

    const onSubmit = (data) => {
        console.log("Dados prontos para o Banco de Dados:", data);
        alert("Professor cadastrado com sucesso! Verifique o console.");
    };

    return (
        <div style={{ fontFamily: 'sans-serif', maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center' }}>Cadastro de Instrutor</h2>

            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                {/* 1. NOME COMPLETO */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Nome Completo:</label>
                    <input
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        {...register("nome", { required: "O nome é obrigatório" })}
                        placeholder="Ex: Ewerton Silva"
                    />
                    {errors.nome && <span style={{ color: 'red', fontSize: '12px' }}>{errors.nome.message}</span>}
                </div>

                {/* 2. E-MAIL */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>E-mail:</label>
                    <input
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        {...register("email", {
                            required: "E-mail é obrigatório",
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: "Formato de e-mail inválido"
                            }
                        })}
                    />
                    {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</span>}
                </div>

                {/* 3. SENHA E FORÇA DA SENHA */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Senha (mín. 8):</label>
                    <input
                        type="password"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        {...register("senha", {
                            required: "Senha obrigatória",
                            minLength: { value: 8, message: "A senha precisa de 8 caracteres" }
                        })}
                    />
                    {/* Lógica Visual de Força da Senha */}
                    <div style={{
                        marginTop: '5px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: watchSenha.length >= 8 ? 'green' : 'orange'
                    }}>
                        Força: {watchSenha.length >= 8 ? "Forte 💪" : "Fraca (mínimo 8)"}
                    </div>
                    {errors.senha && <span style={{ color: 'red', fontSize: '12px' }}>{errors.senha.message}</span>}
                </div>

                {/* 4. CONFIRMAÇÃO DE SENHA (SUBSTITUIU A DO EMAIL) */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Confirme a Senha:</label>
                    <input
                        type="password"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        {...register("confirmarSenha", {
                            required: "Você deve confirmar a senha",
                            validate: (value) => value === watchSenha || "As senhas não coincidem"
                        })}
                    />
                    {errors.confirmarSenha && <span style={{ color: 'red', fontSize: '12px' }}>{errors.confirmarSenha.message}</span>}
                </div>

                {/* 5. TERMOS DE USO (CHECKBOX) */}
                <div>
                    <label style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <input
                            type="checkbox"
                            {...register("termos", { required: "Você deve aceitar os termos" })}
                        />
                        Aceito os termos de uso da instituição.
                    </label>
                    {errors.termos && <p style={{ color: 'red', fontSize: '12px', margin: '5px 0' }}>{errors.termos.message}</p>}
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '10px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Finalizar Cadastro
                </button>

            </form>

            {/* Debug visual para os alunos entenderem o estado do formulário */}
            <hr />
            <p style={{ fontSize: '10px' }}>Debug dos dados:</p>
            <pre style={{ fontSize: '10px', background: '#f4f4f4', padding: '5px' }}>{JSON.stringify(watch(), null, 2)}</pre>

        </div>
    );
}