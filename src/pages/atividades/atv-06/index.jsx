import React, { useState } from 'react';
import styles from './index.module.css';
import { UserPlus, Save, X } from 'lucide-react';

const CadastroUsuario = () => {
    // Estado inicial limpo para o formulário
    const estadoInicialForm = {
        nome: '',
        email: '',
        avatar: 'https://i.pravatar.cc/150',
        idade: 0,
        nascimento: '',
        nivelAcesso: '',
        genero: '',
        corFavorita: '#5a4ad1',
        biografia: '',
        ativo: true
    };

    const [formData, setFormData] = useState(estadoInicialForm);
    const [usuarios, setUsuarios] = useState([
        {
            id: 1,
            nome: 'Ewerton Prof',
            email: 'ewerton@etec.sp.gov.br',
            nivelAcesso: 'Admin',
            avatar: 'https://i.pravatar.cc/150?u=ewerton',
            idade: 30,
            nascimento: '1994-01-01',
            genero: 'M',
            corFavorita: '#5a4ad1',
            biografia: 'Professor de TI',
            ativo: true,
            online: true
        }
    ]);

    // NOVO ESTADO: Armazena o ID do usuário que está sendo editado
    const [idEmEdicao, setIdEmEdicao] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // FUNÇÃO DE EDIÇÃO: Preenche o formulário com os dados do usuário selecionado
    const prepararEdicao = (user) => {
        setFormData(user);
        setIdEmEdicao(user.id);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola para o topo para facilitar
    };

    const cancelarEdicao = () => {
        setFormData(estadoInicialForm);
        setIdEmEdicao(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (idEmEdicao) {
            // Lógica de ATUALIZAÇÃO
            setUsuarios(usuarios.map(user =>
                user.id === idEmEdicao ? { ...formData, id: idEmEdicao } : user
            ));
            alert('Cadastro atualizado com sucesso!');
        } else {
            // Lógica de CRIAÇÃO
            const novoUsuario = {
                id: Date.now(),
                ...formData,
                online: true
            };
            setUsuarios([...usuarios, novoUsuario]);
            alert('Utilizador cadastrado com sucesso!');
        }

        // Limpa o formulário e o estado de edição
        cancelarEdicao();
    };

    const excluirUsuario = (id) => {
        if (window.confirm("Tem certeza que deseja excluir?")) {
            setUsuarios(usuarios.filter(user => user.id !== id));
            if (idEmEdicao === id) cancelarEdicao();
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <UserPlus color="#5a4ad1" size={32} />
                <h1>{idEmEdicao ? 'Editar Usuário' : 'Cadastrar Usuário'}</h1>
            </header>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.grid}>
                    {/* Coluna Esquerda */}
                    <div className={styles.column}>
                        <div className={styles.field}>
                            <label>Nome Completo</label>
                            <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required />
                        </div>
                        <div className={styles.field}>
                            <label>E-mail</label>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div className={styles.field}>
                            <label>URL do Avatar</label>
                            <input type="text" name="avatar" value={formData.avatar} onChange={handleInputChange} />
                        </div>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Idade</label>
                                <input type="number" name="idade" value={formData.idade} onChange={handleInputChange} />
                            </div>
                            <div className={styles.field}>
                                <label>Nascimento</label>
                                <input type="date" name="nascimento" value={formData.nascimento} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>

                    {/* Coluna Direita */}
                    <div className={styles.column}>
                        <div className={styles.field}>
                            <label>Nível de Acesso</label>
                            <select name="nivelAcesso" value={formData.nivelAcesso} onChange={handleInputChange} required>
                                <option value="" disabled>Selecione...</option>
                                <option value="Admin">Admin</option>
                                <option value="Editor">Editor</option>
                                <option value="Comum">Comum</option>
                            </select>
                        </div>
                        <div className={styles.optionsRow}>
                            <div className={styles.field}>
                                <label>Gênero:</label>
                                <div className={styles.radioGroup}>
                                    <label><input type="radio" name="genero" value="M" checked={formData.genero === 'M'} onChange={handleInputChange} /> M</label>
                                    <label><input type="radio" name="genero" value="F" checked={formData.genero === 'F'} onChange={handleInputChange} /> F</label>
                                </div>
                            </div>
                            <div className={styles.field}>
                                <label>Cor Favorita:</label>
                                <input type="color" name="corFavorita" className={styles.colorPicker} value={formData.corFavorita} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className={styles.field}>
                            <label>Biografia</label>
                            <textarea name="biografia" rows="4" value={formData.biografia} onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                </div>

                <div className={styles.activeUserRow}>
                    <label className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            name="ativo"
                            checked={formData.ativo}
                            onChange={handleInputChange}
                        />
                        <span className={styles.checkmark}></span>
                        Usuário Ativo
                    </label>
                </div>

                <div className={styles.buttonGroup}>
                    {idEmEdicao && (
                        <button type="button" onClick={cancelarEdicao} className={styles.cancelBtn}>
                            Cancelar Edição
                        </button>
                    )}
                    <button type="submit" className={styles.submitBtn}>
                        {idEmEdicao ? 'Salvar Alterações' : 'Finalizar Cadastro'}
                    </button>
                </div>
            </form>

            <section className={styles.listSection}>
                <h2>Listagem de Registros</h2>
                <div className={styles.tableResponsive}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Perfil</th>
                                <th>Detalhes</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        <img src={user.avatar} alt="Perfil" className={styles.avatarImg} />
                                    </td>
                                    <td className={styles.detailsCell}>
                                        <strong>{user.nome}</strong>
                                        <span>{user.email} | {user.nivelAcesso}</span>
                                    </td>
                                    <td>
                                        <span className={user.online ? styles.statusOnline : styles.statusOffline}>
                                            ● {user.online ? 'Online' : 'Offline'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            {/* BOTAO EDITAR AGORA FUNCIONAL */}
                                            <button className={styles.editBtn} onClick={() => prepararEdicao(user)}>
                                                Editar
                                            </button>
                                            <button className={styles.deleteBtn} onClick={() => excluirUsuario(user.id)}>
                                                Excluir
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default CadastroUsuario;