import React from 'react';
import axios from 'axios'

import { FormModel } from '../styles';

const DB_URL = 'http://localhost:8080/subscribers';

const initState= {
subscriber: { name:'', email:'', phone: '', comment: ''},
  list: []
}

export default function Form({onSubmit}){
  return (
    <FormModel id="subForm">
      <Subscription />
    </FormModel>
  );
}

export function FormField({ label, type, name ,value, onChange }){
  return(
    <label>
      {label && label}
      <input 
        type={type || 'text'} 
        name={name} // Utilizado como chave em setValue
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </label>
  )
}

class Subscription extends React.Component{

  state = { ...initState }

  /* Chamada quando o elemento for exibido na tela */
  componentWillMount() {
    axios.get(DB_URL,{           
      crossdomain: true
    })
    .then(resp => {
      this.setState({ list: resp.data })/* requisição -> lista */
    })        
  }
 
  /*Limpar formulario */
  clear() {
    this.setState({ subscriber: initState.subscriber })
  }

  save() {
    const subscriber = this.state.subscriber        
    const method = subscriber.id ? 'put' : 'post'
    const url = subscriber.id ? `${DB_URL}/${subscriber.id}` : DB_URL
    var config = {
      headers: {crossdomain: true}
    };
    axios[method](url,subscriber,config)
    .then(resp => {
      const list = this.getUpdatedList(resp.data)
      this.setState({ subscriber: initState.subscriber, list })  
      console.log(resp.data)         
    })
    .catch(error => {
      console.log(error)
    })

  }
  
  getUpdatedList(subscriber){       
    const list = this.state.list.filter(u => u.id !== subscriber.id) /** removendo o usuario da lista */
    list.unshift(subscriber) /**inserindo na primeira posição do array */
    return list
  }

  updatefield(event) {
    const subscriber = { ...this.state.subscriber }
    subscriber[event.target.name] = event.target.value /* target input.value */
    this.setState({ subscriber })
  }

  renderForm(){
    /* Renderizar formulário */
    return (
      <>
        <FormField className="form-control"
          label="Nome"
          type="text"
          name="name"
          value={this.state.subscriber.name}
          onChange={e => this.updatefield(e)}
        />
        <FormField className="form-control"
          label="Email"
          type="email"
          name="email"
          value={this.state.subscriber.email}
          onChange={e => this.updatefield(e)}
        />
        <FormField className="form-control"
          label="Telefone"
          type="text"
          name="phone"
          value={this.state.subscriber.phone}
          onChange={e => this.updatefield(e)}
        />
        <FormField className="form-control"
          label="Expectativa"
          type="textarea"
          name="comment"
          value={this.state.subscriber.comment}
          onChange={e => this.updatefield(e)}
        />

        <hr />

          <button onClick={e => this.save(e)}>Salvar</button>
      </>
    );
  }

  /* Edição */
  load(subscriber){
    this.setState({ subscriber })/* Atualiza o estado da aplicação. */
  }
  remove(subscriber){
    axios.delete(`${DB_URL}/${subscriber.id}`)
    .then(resp => {
        const list = this.state.list.filter(u => u !== subscriber)
        this.setState({ list })
    })
  }

  /* list subscribers */
  rendertable(){
    return(
      <table className="table mt-6">
        <thead>
          <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Descrição</th>
              <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {this.renderows()}
        </tbody>            
      </table>
    );
  }
  renderows(){
    /* Mapa de subscribers no estado do objeto */
    return this.state.list.map((subscriber,index) => {
      return (                
        <tr key={index}>
          <td>{subscriber.name}</td>
          <td>{subscriber.email}</td>
          <td>{subscriber.phone}</td>
          <td>{subscriber.comment}</td>
          <td>
              <button className="btn btn-warning mr-2"
              onClick={() => this.load(subscriber)}>
                <i className="fa fa-pencil">E</i>
              </button>
              <button className="btn btn-danger"
              onClick={() => this.remove(subscriber)}>
                <i className="fa fa-trash">T</i>
              </button>
          </td>
        </tr>
      );
    })
  }



  render(){        
    return(            
      <>
          
        {this.renderForm()}
        {this.rendertable()}

      </>
    );
}

}