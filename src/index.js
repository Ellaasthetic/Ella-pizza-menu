import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (
  <div className='container'>
   <Header />
   <Menu />
   <Footer />
  </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>Ella's React Pizza Co.</h1>;
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
        <p>Love at first Bite!</p>

        <ul className='pizzas'>
        {pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      </>
      ) : (
        <p>Still working on our menu : )</p>
      )}


      {/*<Pizza
      name='Pizza Spinach'
      ingredients="Tomato, mozarella, spinach, and ricotta cheese"
      photoName= "pizzas/spinaci.jpg"
      price={10}
      />

      <Pizza
      name='Focaccia'
      ingredients="Bread with italian olive oil and rosemary"
      photoName="pizzas/focaccia.jpg"
      price = {6}
      />

      <Pizza
      name='Pizza Funghi'
      ingredients="Tomato, mozarella, mushrooms, and onion"
      photoName="pizzas/funghi.jpg"
      price = {12}
      />

      <Pizza
      name='Pizza Margherita'
      ingredients="Tomato and mozarella"
      photoName="pizzas/margherita.jpg"
      price = {10}
      />

      <Pizza
      name='Pizza Prosciutto'
      ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
      photoName="pizzas/prosciutto.jpg"
      price = {14}
      />

      <Pizza
      name='Pizza Salamino'
      ingredients="Tomato, mozarella, and pepperoni"
      photoName="pizzas/salamino.jpg"
      price = {15}
    />*/}
    </main>
  );
}

function Pizza({pizzaObj}) {
  console.log(pizzaObj);

  //if (pizzaObj.soldOut) return null;

  return (
    //setting classes and text conditionally
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src ={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour= 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

//conditional rendering using multiple returns.
//footer will not be rendered outside this paragragh, it will only be rendered when the menu is open

  //if (!isOpen)
  //return(
    //<p>Open</p>
  //);

  return (
  <footer className='footer'>
    {isOpen ? (
      <Order closeHour={closeHour} />
    ) : (
      <p>welcome between {openHour}:00 and {closeHour}:00</p>
    )}
    </footer>
  );
}

function Order({closeHour}) {
  return (
  <div className='order'>
  <p>We're open until {closeHour}:00</p>
  <button className='btn'>order</button>
</div>
);
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
  <App/>
</React.StrictMode>
);