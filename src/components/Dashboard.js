import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
              <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                  <h1>
                    SALBA (Sistema de Información de Contratos)
                    <small>Version 1.0</small>
                  </h1>
                  <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                    <li className="active">Dashboard</li>
                  </ol>
                </section>
                {/* Main content */}
                <section className="content">
                  {/* Info boxes */}
                  <div className="row">

                    <div className="col-md-12 col-sm-6 col-xs-12">
                      <div className="info-box bg-red">
                        <span className="info-box-icon"><i className="fa fa-comments-o" /></span>
                        <div className="info-box-content">
                          <span className="info-box-text">Contratos</span>
                          <span className="info-box-number">3,793</span>
                          {/* The progress section is optional */}
                          <div className="progress">
                            <div className="progress-bar" style={{width: '39%'}} />
                          </div>
                          <span className="progress-description">39% de las personas ingresadas</span>
                        </div>{/* /.info-box-content */}
                      </div>
                    </div>

                    </div>{/* /.row */}
                  
                  {/* Main row */}
                  <div className="row">
                    {/* Left col */}
                    
                    <div className="col-md-6 col-sm-6 col-xs-3">
                      <div className="info-box bg-red">
                        <span className="info-box-icon bg-blue"><i className="fa fa-money" /></span>
                        <div className="info-box-content">
                          <span className="info-box-text">Cartera de Clientes</span>
                          <span className="info-box-number">3,793<small /></span>
                        </div>{/* /.info-box-content */}
                      </div>{/* /.info-box */}
                      <div className="info-box">
                        <span className="info-box-icon bg-green"><i className="fa fa-mars" /></span>
                        <div className="info-box-content">
                          <span className="info-box-text">Hombres</span>
                          <span className="info-box-number">8,739</span>
                        </div>{/* /.info-box-content */}
                      </div>
                    </div>

                    <div className="col-md-6">
                      
                      <div>
                        <div className="info-box">
                          <span className="info-box-icon bg-green"><i className="fa fa-user" /></span>
                          <div className="info-box-content">
                            <span className="info-box-text">Personas ingresadas</span>
                            <span className="info-box-number">9,748</span>
                          </div>{/* /.info-box-content */}
                        </div>
                        <div className="info-box">
                          <span className="info-box-icon bg-green"><i className="fa fa-venus" /></span>
                          <div className="info-box-content">
                            <span className="info-box-text">Mujeres</span>
                            <span className="info-box-number">1,009</span>
                          </div>{/* /.info-box-content */}
                        </div>
                      </div>

                    </div>{/* /.col */}

                    <div className="col-md-12">
                        <section className="content">
                          <div className="callout callout-info">
                            <h3>Información!</h3>
                            <p>SALBA, es un Sistema de Gestión de Contratos en donde prodrá: crearlos, actualizarlos, gestionarlos, llevar el control; registrar clientes y un sin fín de tareas adicionales para las diferentes sucursales ubicadas en el
                              país.</p>
                          </div>
                          <div className="callout callout-danger">
                            <h3>Importante!</h3>
                            <p>SALBA, cuenta con diferentes roles de seguridad para que el cliente pueda ver sus reportes, sea más
                              fácil de administrar por los dueños de la empresa y que los contadores, cartera y cobro lleven un
                              mejor control.</p>
                          </div>
                          <div className="box box-default">
                            <div className="box-header with-border">
                              <h3 className="box-title">SALBA!</h3>
                            </div>
                            <div className="box-body">
                              Para una mejor gestión empresarial
                            </div>
                            {/* /.box-body */}
                          </div>
                          {/* /.box */}
                        </section>
                      </div>

                  </div>{/* /.row */}
                </section>{/* /.content */}
                
              </div>{/* /.content-wrapper */}
            </div>

        )
    }
}
