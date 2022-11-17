import './App.css';
import React, {useState} from 'react';
import Card from './Card';
import contacts from './data/contacts';
import Login from './Login';
import TaskList from './TaskList';

// import List from './list';
// import logo from './logo.svg';
// import doublePi, { pi, triplePi as tripie, addition}  from './myMath';
// function filterCards(contact){
//   return contact.name.includes('B');
// }

// function App2() {
//   // <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   const num = 7;
//   const fName = "Eduardo";
//   const lName = "Martínez";
//   const currentDate = new Date();
//   const year = currentDate.getFullYear();
//   const image = "https://picsum.photos/200";
//   const customStyle = {
//     color: "red",
//     fontSize: "20px",
//     border: "1px solid black",
//   };
//   if(year > 2020){
//     customStyle.color = "green";
//   }

//   // var cards = [];
//   // contacts.forEach((contact) =>{
//   //   // if (contact.name.includes("B"))
//   //   cards.push(
//   //     <Card 
//   //       img={contact.img}
//   //       name={contact.name}
//   //       phone={contact.phone}
//   //       email={contact.email}
//   //     />
//   //   );
//   // });
//   var subName = "B";
//   var n1 = Math.floor(Math.random()*10);
//   var n2 = Math.floor(Math.random()*10);

//   // reduce function (filtering)
//   // contacts.reduce((contact, label="Name") => {
//   //   contact.name += label;
//   //   return contact;
//   // });
//   return (
//     <div>

//       <Login/>
//       <hr />
//       {contacts
//       .filter((contact) =>{
//         return contact.name.includes(subName) && contact.phone.includes("33");
//       })
//       .map(createCard)}
//       <h1 style = {customStyle}> Hello world {fName + " " + lName}</h1>
//       <p> Lorem Ipsum {year}</p>
//       <img src={image + "?bluescale"}></img>
//       <List/>
//       <p>The addition of {n1} + {n2} is: {addition(n1, n2)}</p>
//       <h3> My lucky number is {num} </h3>
//       <h4> The value of pi is: {doublePi()/2} also {pi}</h4>
//       <h4> The double of pi is: {doublePi()}</h4>
//       <h4> The triple of pi is: {tripie()}</h4>
//       <h3> A random number is {Math.floor(Math.random()*10)} </h3>
//     </div>
//   );
// }

function createCard(contact) {
  return(
    <Card 
        img={contact.img}
        name={contact.name}
        phone={contact.phone}
        email={contact.email}
    />
  );
}

function App(){
  var subName = "B";
  var [isLoggedIn, setIsLoggedIn] = useState(false);

  function renderContent(subName){
    return (
      <div>
        <hr />
        <h1>My contacts: </h1>
        {contacts.filter((contact) =>{
            return contact.name.includes(subName) && contact.phone.includes("33");
          })
          .map(createCard)}
          <button onClick={logOut}> Log out </button>
      </div>
    );
  }

  function logUser() {
    setIsLoggedIn(true);
  }

  function logOut() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? renderContent(subName) : <Login handler = {logUser} />}
      <TaskList/>
    </div>
  );

}

export default App;
