import React from 'react';
import '../assets/styles/components/NotFound.scss';
import NotFoundLogo from '../assets/static/ghost.png';

const NotFound = () => (
  <>
    <section className="error">
      <section className="error__not-found">
        <div className="error_not-found--title">
          <h1>404</h1>
          <img src={NotFoundLogo} alt="NotFound" />
        </div>
        <p className="error__not-found--p">
          Página no encontrada
          <br />
          <a href="/">
            Regresar
          </a>
        </p>
      </section>
    </section>
  </>
);

export default NotFound;
