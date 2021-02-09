import React from 'react';
import axios from 'axios'

import { FormModel } from './styles';
import { Redirect } from 'react-router-dom';

const DB_URL = 'http://localhost:8080/subscribers';

const initState= {
  subscriber: { name:'', email:'', phone: '', comment: ''},
  list: [],
  redirect: false
}

export default function Form({onSubmit}){
  return (
    <FormModel onSubmit={onSubmit} id="subForm">
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
    this.setState({ subscriber: initState.subscriber });
  }

  registrationHandler(toRegister){

    const filledName = toRegister.name !== '' ? true : false;
    const filledEmail = toRegister.email !== '' ? true : false;
    const filledPhone = toRegister.phone !== '' ? true : false;
    const filledComment = toRegister.comment !== '' ? true : false;

    const filledInputs = filledName && filledEmail && filledPhone && filledComment;
    const isRegistered = this.state.list.find(registeredSubscriber => registeredSubscriber.email === toRegister.email);

    if(!filledInputs){
      alert(`Inputs não preenchidos.`);
      return false;
    }
    
    else if(isRegistered){
      alert(`E-mail ${toRegister.email} já cadastrado.`);
      return false;
    }

    else{
      return true;
    }
  }

  register() {
    const subscriber = this.state.subscriber;

    if(this.registrationHandler(subscriber)){
      const method = subscriber.id ? 'put' : 'post';
      const request = subscriber.id ? `${DB_URL}/${subscriber.id}` : DB_URL;

      axios[method](request , subscriber, {headers: {crossdomain: true}})
        .then(resp => {

          const list = this.getUpdatedList(resp.data);
          this.setState({ subscriber: initState.subscriber, list });
          console.log(resp.data);
          
          this.setState({ redirect: true })

          this.subscriptionFeedback(subscriber);
          
      })
      .catch(error => {
        console.log(error);
      })
    }

  }
  
  getUpdatedList(subscriber){       
    const list = this.state.list.filter(u => u.id !== subscriber.id); /* removendo o usuario da lista */
    list.unshift(subscriber); /* inserindo na primeira posição do array */
    return (list);
  }

  updatefield(event) {
    const subscriber = { ...this.state.subscriber };
    subscriber[event.target.name] = event.target.value; /* target input.value */
    this.setState({ subscriber });
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

          <button onClick={e => this.register(e)}>Inscrever-se</button>
      </>
    );
  }

  subscriptionFeedback(sub){
    alert(`${sub.name} inscrito.`);
  }

  getSubscribers(){

    this.state.list.map((subscriber) => {

      this.getSubscribers();

      console.log(subscriber);

      return true;

    })
  }

  render(){
    if(this.state.redirect) {
      this.setState.redirect = false;
      return <Redirect to='/done' />;
    }
    else{
      return(this.renderForm());
    }

  }

}