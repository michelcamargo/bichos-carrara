var Nedb = require('nedb'), 
  dbSubscribers = new Nedb({filename: './data/subscribers', autoload: true});

interface Subscriber{
  name: string;
  email: string;
  phone: string;
  message: string;
}

// const testSub: Subscriber = {
// 	name: "Michel S Camargo",
// 	email: "michelcamargo@outlook.com", 
//   phone: "44987654321",
// 	message: "Aprender"
// };

export async function getAllSubscribers(): Promise<Subscriber>{

  const response = await dbSubscribers.find({ }, (err: any, subscribers: Subscriber) => {
    if(err){
      return(err);
    }

    if(subscribers){
      console.log(subscribers);
      return subscribers;
    }

  });

  console.log(response);
  return response;
}

export function getSubscriberByEmail(query: string){

  let fetchedSubs = dbSubscribers.find({ email: query }, (err: any, subscribers: Subscriber[]) => {
    if(err){
      return (err)
    }

    console.log(subscribers);
    return(subscribers);

  });

  console.log(fetchedSubs);
  return(fetchedSubs);
}

export function setSubscriber(data: Subscriber){

  if(data){
    dbSubscribers.insert(data, (err: any) => {
      if(err){
        return (
          console.log(err)
        )
      }
    })
  }

  else{
    alert("erro");
  }
  
}



/************************
Inserindo novo nocumento                 
/***********************/
// db.insert(user, (err) => {
//   if(err){
//     return (
//       console.log(err)
//     );
//   }
 
//   console.log("Novo usuário adicionado!");
// });

/************************
Recuperando documento                 
/***********************/
// db.find({ name: 'Michel Camargo' }, (err, users) => {
//   if(err){
//     return (
//       console.log(err)
//     );
//   }
//   console.log(users);
// });

// db.find({ phoneNumber: "44987654321" }, (err, users) => {
//   if(err){
//     return (
//       console.log(err)
//     );
//   }
//   console.log(users);
// });

// db.find({ email: 'michelcamargo@outlook.com' }, (err: any, users: Subscriber[]) => {
//   if(err){
//     return (
//       console.log(err)
//     );
//   }
//   console.log(users);
// });

//Buscar apenas 1 documento
// db.findOne({ email: 'michelcamargo@outlook.com' }, (err, users) => {
//   if(err){
//     return (
//       console.log(err)
//     );
//   }
 
//   console.log(users);
// });

/************************
Atualizando documento
/***********************/
// db.update({ email: 'michelcamargo@outlook.com' }, {name: "Carlos", email: "carlos@gmail.com"}, {}, (err) => {
//   if(err){
//     return (
//       console.log(err)
//     );
//   }
 
//   console.log("Usuário atualizado");
// });

// Atualizando apenas um campo do documento
// db.update({ email: 'michelcamargo@outlook.com' }, {$set: {phoneNumber: 19}}, {}, (err) => {
//   if(err){
//     return (
//       console.log(err)
//     );
//   }
 
//   console.log("Usuário atualizado");
// });

/************************
Removendo documento
/***********************/

// Remover documento pelo id
// db.remove({ _id: "vxJMEAMBFLmkUmKY" }, {}, (err) => {
//   if(err){
//     return (
//       console.log(err)
//     );
//   }

//   console.log("Usuário removido");
// });

// Remover documento usando o nome
// db.remove({name: "Michel Camargo" }, {}, (err) => {
//   if(err){
//     return (
//       console.log(err)
//     );
//   }

//   console.log("Usuário removido");
// });

// Remover mais de um documento por vez
// db.remove({name: "Michel Camargo" }, {multi: true}, (err) => {
//   if(err){
//     return (
//       console.log(err)
//     );
//   }

//   console.log("Usuário removido");
// });
