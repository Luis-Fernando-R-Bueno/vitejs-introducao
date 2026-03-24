/*
    Inserção(Escrita): Utilizamos um objeto form no estado.A função handleChange captura cada tecla digitada ou mudança 
    de opção e atualiza o estado em tempo real(Controlled Components).Ao clicar no button, esses dados são empurrados 
    para o array lista.

    Leitura(Visualização): O array lista(que poderia vir de um arquivo.json externo) é percorrido pelo método.map().
    Para cada objeto, as tags < tr >, <td> e <img> são renderizadas dinamicamente.

    Melhor Prática Vite: Para os input type date e number, o Vite/React garante que os valores sejam tratados como 
    strings ou números conforme a necessidade, mas lembre-se de sempre converter para o tipo correto antes de enviar 
    para um banco de dados real.
*/

import { useState, useEffect } from 'react';

export default function Exemplo10() {
    // 1. Estados para Leitura (Simulando API)
    const [lista, setLista] = useState([]);

    // 2. Estados para Inserção (State do Formulário)
    const [form, setForm] = useState({
        nome: '',
        email: '',
        nascimento: '',
        idade: 0,
        corFavorita: '#4f46e5',
        categoria: '',
        genero: 'Outro',
        ativo: true,
        bio: '',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
    });

    // Simulação de carregamento JSON inicial
    useEffect(() => {
        const dadosIniciais = [
            { id: 1, nome: 'Vite User', email: 'vite@dev.com', categoria: 'Admin', avatar: 'https://i.pravatar.cc/150?u=1' },
            { id: 2, nome: 'React Pro', email: 'react@dev.com', categoria: 'Editor', avatar: 'https://i.pravatar.cc/150?u=2' }
        ];
        setLista(dadosIniciais);
    }, []);

    // Handler genérico para inputs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSalvar = (e) => {
        e.preventDefault();
        const novoItem = { ...form, id: Date.now() };
        setLista([...lista, novoItem]); // Inserção de dados no estado
        alert('Dados salvos com sucesso!');
    };

    return (
        <div className="container">
            <h1>Gerenciador de Usuários</h1>

            {/* TAG: form */}
            <form onSubmit={handleSalvar}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

                    <section>
                        {/* TAG: label e input (text/email) */}
                        <label htmlFor="nome">Nome Completo</label>
                        <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} required />

                        <label htmlFor="email">E-mail Corporativo</label>
                        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />

                        {/* TAG: input (date/number) */}
                        <label htmlFor="nascimento">Data de Nascimento</label>
                        <input type="date" id="nascimento" name="nascimento" value={form.nascimento} onChange={handleChange} />

                        <label htmlFor="idade">Idade</label>
                        <input type="number" id="idade" name="idade" value={form.idade} onChange={handleChange} />
                    </section>

                    <section>
                        {/* TAG: select */}
                        <label htmlFor="categoria">Nível de Acesso</label>
                        <select id="categoria" name="categoria" value={form.categoria} onChange={handleChange}>
                            <option value="">Selecione...</option>
                            <option value="Admin">Administrador</option>
                            <option value="Editor">Editor</option>
                            <option value="Viewer">Visualizador</option>
                        </select>

                        {/* TAG: input (radio) */}
                        <label>Gênero</label>
                        <div className="inline-group">
                            <input type="radio" name="genero" value="M" onChange={handleChange} /> M
                            <input type="radio" name="genero" value="F" onChange={handleChange} /> F
                        </div>

                        {/* TAG: input (color) */}
                        <label>Cor do Perfil</label>
                        <input type="color" name="corFavorita" value={form.corFavorita} onChange={handleChange} style={{ height: '40px' }} />

                        {/* TAG: input (checkbox) */}
                        <div className="inline-group">
                            <input type="checkbox" id="ativo" name="ativo" checked={form.ativo} onChange={handleChange} />
                            <label htmlFor="ativo" style={{ marginTop: 0 }}>Conta Ativa</label>
                        </div>
                    </section>
                </div>

                {/* TAG: textarea */}
                <label htmlFor="bio">Biografia</label>
                <textarea id="bio" name="bio" rows="3" value={form.bio} onChange={handleChange}></textarea>

                {/* TAG: button */}
                <button type="submit">Cadastrar Usuário</button>
            </form>

            <hr style={{ margin: '40px 0', border: '0.5px solid #eee' }} />

            {/* TAG: table e image (Leitura de Dados) */}
            <h2>Usuários Cadastrados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.avatar} alt={item.nome} /></td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{item.categoria}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* TAG: vídeo */}
            <section style={{ marginTop: '40px' }}>
                <h3>Tutorial do Sistema</h3>
                <video controls width="100%" style={{ borderRadius: '8px' }}>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Seu navegador não suporta a tag vídeo.
                </video>
            </section>
        </div>
    );
}