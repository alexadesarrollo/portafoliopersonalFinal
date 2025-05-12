import './Experiencia.css';
export function Experiencia() {
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>MI EXPERIENCIA</h2>
                        <hr />
                    </div>
                </div>
            </section>

            < section className="container">
                <div className="row">
                    <div className="col-12">
                        <div class="progress" role="progressbar">
                            <div class="progress-bar barra">50%</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container my-4">
                <div className="row">
                    <div className="col-4 card p-3">
                    <img src="../../../../src/assets/img/logicadeprogramacion.jpg" alt="" className='img-fluid'/> 
                    <br />
                    <div class="progress" role="progressbar">
                        <div class="progress-bar barra2">40%</div> 
                    </div>
                    
                    </div>
                    <div className="col-8 card p-3">
                        <h2>Logica de Programacion</h2>
                        <ul>
                            <li>Variables y Constante</li>
                            <li>Tipos de Datos</li>
                            <li>Operadores</li>
                            <li>Condicionales</li>
                            <li>Ciclos y Bucles</li>
                        </ul>
                    </div>
                </div>
            </section>

      <section className="container my-4">
                <div className="row">
                    <div className="col-4 card p-3">
                    <img src="../../../../src/assets/img/base-datos.jpg" alt="" className='img-fluid'/> 
                    <br />
                    <div class="progress" role="progressbar">
                        <div class="progress-bar barra3">60%</div> 
                    </div>
                    
                    </div>
                    <div className="col-8 card p-3">
                        <h2>Base de datos</h2>
                        <ul>
                            <li>Consultas básicas: SELECT, FROM, WHERE</li>
                            <li>INSERT, UPDATE, DELETE</li>
                            <li>CREATE TABLE, ALTER TABLE, DROP TABLE</li>
                            <li>Autenticación y conexiones</li>
                            <li>Claves primarias y foráneas</li>
                        </ul>
                    </div>
                </div>
            </section>


      <section className="container my-4">
                <div className="row">
                    <div className="col-4 card p-3">
                    <img src="../../../../src/assets/img/base-datos.jpg" alt="" className='img-fluid'/> 
                    <br />
                    <div class="progress" role="progressbar">
                        <div class="progress-bar barra4">85%</div> 
                    </div>
                    
                    </div>
                    <div className="col-8 card p-3">
                        <h2>HTML</h2>
                        <ul>
                            <li>Etiquetas semánticas:header, main, section, article, footer, etc</li>
                            <li></li>
                            <li>CREATE TABLE, ALTER TABLE, DROP TABLE</li>
                            <li>Autenticación y conexiones</li>
                            <li>Claves primarias y foráneas</li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
        
    )
}