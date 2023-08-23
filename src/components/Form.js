import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const Nome = (event) => {
    setNome(event.target.value);
  };

  const Email = (event) => {
    setEmail(event.target.value);
  };

  const Senha = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lide com os dados do formulário
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nome:</label>
        <input type="text" className="form-control" value={nome} onChange={Nome} />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input type="email" className="form-control" value={email} onChange={Email} />
      </div>

      <div className="form-group">
        <label>Senha:</label>
        <input type="password" className="form-control" value={senha} onChange={Senha} />
      </div>

      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default Form;
