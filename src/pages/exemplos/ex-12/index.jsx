import { useState, useEffect } from 'react';

import styles from './index.module.css';

function Exemplo12() {

  // 1. READ (Carregamento Inicial)
  // Usamos uma função anônima no useState para ler o localStorage apenas uma vez no load
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('meu_crud_data');
    return savedItems ? JSON.parse(savedItems) : [
      { id: 1, text: 'Aprender Vite.js' },
      { id: 2, text: 'Persistir dados no LocalStorage' }
    ];
  });

  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);

  // 2. SYNC (Persistência Automática)
  // Toda vez que a lista 'items' mudar, salvamos no localStorage
  useEffect(() => {
    localStorage.setItem('meu_crud_data', JSON.stringify(items));
  }, [items]);

  // --- MÉTODOS DO CRUD ---

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (editingId) {
      setItems(items.map(item =>
        item.id === editingId ? { ...item, text: inputValue } : item
      ));
      setEditingId(null);
    } else {
      const newItem = { id: Date.now(), text: inputValue };
      setItems([...items, newItem]);
    }
    setInputValue('');
  };

  const deleteItem = (id) => {
    if (window.confirm("Deseja realmente excluir?")) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setInputValue(item.text);
  };

  return (
    <div className={styles.container}>
      <h1>CRUD + LocalStorage</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite algo..."
        />
        <button type="submit">
          {editingId ? 'Salvar Edição' : 'Adicionar'}
        </button>
        {
          editingId &&
          <button onClick={() => { setEditingId(null); setInputValue(''); }}>
            Cancelar
          </button>
        }
      </form>

      <ul className={styles.lista}>
        {items.map((item) => (
          <li key={item.id} className={styles.linha}>
            <span className={styles.conteudo}>{item.text}</span>
            <button onClick={() => startEdit(item)}>Editar</button>
            <button onClick={() => deleteItem(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exemplo12;