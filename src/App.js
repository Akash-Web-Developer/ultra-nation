import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  

  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  const handleAddToCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      // console.log(data);
      const names = data.map(country => country.name);
      // console.log(names);
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h3>Country Adde: {cart.length} </h3>
      <Cart cart = {cart}></Cart>
      <ul>
        {
          countries.map(country => <Country country={country} handleAddToCountry={handleAddToCountry} key={country.alpha3Code}></Country>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
