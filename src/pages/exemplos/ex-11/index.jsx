import { useState } from 'react'; 

import styles from './index.module.css';

function Exemplo11() {
  // Mock de dados inicial (READ)
  const [items, setItems] = useState([
    { id: 1, text: 'Aprender Vite.js' },
    { id: 2, text: 'Estudar CRUD' }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);

  // --- MÉTODOS DO CRUD ---

  // CREATE ou UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (editingId) {
      // Lógica de UPDATE
      setItems(items.map(item => 
        item.id === editingId ? { ...item, text: inputValue } : item
      ));
      setEditingId(null);
    } else {
      // Lógica de CREATE
      const newItem = {
        id: Date.now(),
        text: inputValue
      };
      setItems([...items, newItem]);
    }
    setInputValue('');
  };

  // DELETE
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Prepara o formulário para edição
  const startEdit = (item) => {
    setEditingId(item.id);
    setInputValue(item.text);
  };

  return (
    <div className={styles.container}>
      <h1>Mockup CRUD Vite</h1>

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
            <button onClick={() => {setEditingId(null); setInputValue('');}}>
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

export default Exemplo11;