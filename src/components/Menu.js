import React, { Component } from 'react';
import img from '../assets/img/branding.jpg';

export default class Menu extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="#">SALBA</a>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Inicio</a></li>
                  <li><a href="#">Nosotros</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Servicios <span className="caret" /></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Desarrollos</a></li>
                      <li><a href="#">Diseño</a></li>
                      <li><a href="#">Publicidad</a></li>
                      <li className="divider" />
                      <li><a href="#">Consultoria</a></li>
                      <li className="divider" />
                      <li><a href="#">Otros</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Contacto</a></li>
                </ul>
                <form className="navbar-form navbar-left" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Buscador" />
                  </div>
                  <button type="submit" className="btn btn-default">Buscar</button>
                </form>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <img src={img} width="30" height="30" alt=""></img>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mi cuenta <span className="caret" /></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Ingresar</a></li>
                      <li><a href="#">Registrarse</a></li>
                      <li><a href="#">Configuración</a></li>
                      <li className="divider" />
                      <li><a href="#">Cerrar Sesión</a></li>
                    </ul>
                  </li>
                </ul>
              </div>{/* /.navbar-collapse */}
            </div>{/* /.container-fluid */}
          </nav>{/* Fin Sección de Nav */}
        </div>

    )
  }
}
