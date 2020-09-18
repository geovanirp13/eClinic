import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './styles.css';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="eClinic"/>
        </header>

        <main>
          <h1>Encontre clínicas e consultórios sem sair de casa.</h1>
          <p>Ajudamos pessoas a encontrarem Clínicas e Consultórios de forma eficiente.</p>
          
          <Link to="/create-clinic">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre uma Clínica ou Consultório</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home;