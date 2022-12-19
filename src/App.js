import './App.css';
import Routes from './routes';

import { NavLink } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <div>
        <NavLink to="/" style={({ isActive }) => isActive ?
            {
              color: '#fff',
              background: '#7600dc',
            } : { color: '#545e6f', background: '#f0f0f0' }
          }>
          Home
        </NavLink>
        <NavLink to="/exercicio1" style={({ isActive }) => isActive ?
            {
              color: '#fff',
              background: '#7600dc',
            }
            : { color: '#545e6f', background: '#f0f0f0' }
          }>
          Exercício 1
        </NavLink>
        <NavLink to="/exercicio2" style={({ isActive }) => isActive ?
            {
              color: '#fff',
              background: '#7600dc',
            } : { color: '#545e6f', background: '#f0f0f0' }
          }>
          Exercício 2
        </NavLink>
        <NavLink to="/exercicio3" style={({ isActive }) => isActive ?
            {
              color: '#fff',
              background: '#7600dc',
            }
            : { color: '#545e6f', background: '#f0f0f0' }
          }>
          Exercício 3
        </NavLink>
        <NavLink to="/exercicio4" style={({ isActive }) => isActive ?
            {
              color: '#fff',
              background: '#7600dc',
            }
            : { color: '#545e6f', background: '#f0f0f0' }
          }>
          Exercício 4
        </NavLink>
        <NavLink to="/exercicio5" style={({ isActive }) => isActive ?
            {
              color: '#fff',
              background: '#7600dc',
            }
            : { color: '#545e6f', background: '#f0f0f0' }
          }>
          Exercício 5
        </NavLink>
        <NavLink to="/exercicio6" style={({ isActive }) => isActive ?
            {
              color: '#fff',
              background: '#7600dc',
            }
            : { color: '#545e6f', background: '#f0f0f0' }
          }>
          Exercício 6
        </NavLink>

      </div>

      <Routes />
    </div>

  );
}

export default App;
