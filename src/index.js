import React from "react";
import ReactDOM from "react-dom/client";
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


const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  // const style = {color: "red", fontSize: "48px", textTransform: "uppercase"};
  const style = {}
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  )
}

const Menu = () => {

  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
        {/* <React.Fragment key="hello"> If list */}
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All 
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map(pizza => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />
            })}
          </ul>
        {/* </React.Fragment> If list */}
        </>
      ) : <p>We're still working on our menu. Please come back later :)</p>}

      {/* <Pizza 
        name='Pizza Prosciutto' 
        ingredients='Tomato, mozarella, ham, aragula, and burrata cheese'
        photoName='pizzas/prosciutto.jpg' 
        price={10}
      />
      <Pizza 
        name='Pizza caca' 
        ingredients='caca'
        photoName='pizzas/prosciutto.jpg' 
        price={10}
      /> */}
    </main>
  );
}

const Pizza = ({pizzaObj}) => {
  // console.log(props)

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut && "sold-out"}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold out".toUpperCase() : pizzaObj.price}</span>
      </div>
    </li>
  );
  
}

const Footer = () => {
  // const hour = new Date().getHours();
  const hour = 13;
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} openHour={openHour} /> : 
      (
        <div className="order">
          <p>We're closed. We'll open at {openHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  )

  // Or (but not use)

  // if (!isOpen) 
  //   return (
  //     <div className="order">
  //       <p>We're closed. We'll open at {openHour}:00. Come visit us or order online.</p>
  //       <button className="btn">Order</button>
  //     </div>
  //   );

  // return (
  //   <footer className="footer">
  //     {(
  //       <div className="order">
  //         <p>We're open until {closeHour}:00. Come visit us or order online.</p>
  //         <button className="btn">Order</button>
  //       </div>
  //     )}
  //   </footer>
  // );

  // return React.createElement("footer", null, "We're currently open!")
}

const Order = ({ closeHour, openHour }) => {
  return (
    <div className="order">
      <p>We're open from {openHour}:00 until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  )
}

const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
