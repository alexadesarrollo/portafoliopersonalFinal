import './Historia.css'
export function Historia() {

    return (

        <>
            <section className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Bitacora de proyectos:</h3>
                        <hr />
                    </div>
                </div>
            </section>

            <section className="container my-6">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img src="../../../../src/assets/img/netflix.jpg" alt="" className='img-fluid' />
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>Proyecto Replica de Netflix</h2>
                        <p>
                            El proyecto Réplica de Netflix consistió en la creación de una interfaz web inspirada en la popular plataforma de streaming, con el objetivo de practicar y aplicar conocimientos fundamentales de desarrollo front-end. Durante el desarrollo, se utilizaron enlaces () estratégicamente ubicados en la barra de navegación y en tarjetas de películas para permitir la transición entre páginas, como el inicio, detalles de contenido y formularios. Los formularios fueron claves para simular el proceso de inicio de sesión y registro, permitiendo la interacción del usuario mediante campos de entrada y botones. Además, se implementaron grillas (grid y flexbox) para organizar visualmente el contenido en filas y columnas, facilitando una estructura ordenada y responsiva. Estas herramientas trabajaron de forma conjunta para lograr una navegación fluida y una experiencia visual coherente, emulando la sensación de estar en una plataforma real. Este proyecto fortaleció habilidades clave en HTML, CSS y navegación entre vistas.
                        </p>
                    </div>
                </div>
            </section>
        <hr />
            <section className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h2>FLEXBOX</h2>
                        <p>
                            Flexbox, o el modelo de caja flexible, es una herramienta de diseño en CSS que facilita la creación de interfaces web más ordenadas, dinámicas y responsivas. A diferencia del modelo tradicional de caja, Flexbox permite distribuir el espacio de manera más eficiente entre los elementos dentro de un contenedor, adaptándose automáticamente a diferentes tamaños de pantalla sin necesidad de recurrir a técnicas más complejas como el uso intensivo de float o media queries. Su diseño se basa en un sistema de ejes: uno principal, que determina la dirección de los elementos, y uno transversal, que permite controlar su alineación vertical. A través de propiedades específicas tanto para el contenedor como para los elementos hijos, Flexbox ofrece un alto grado de control sobre el comportamiento de crecimiento, contracción, alineación y orden de los ítems. Esto lo convierte en una solución ideal para estructurar menús, galerías, tarjetas y otros componentes visuales de forma flexible y coherente. Además, su compatibilidad con herramientas visuales y su facilidad de prueba con los navegadores modernos lo han posicionado como una de las tecnologías más utilizadas en el desarrollo frontend actual.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="../../../../src/assets/img/flexbox.png" alt="" className='img-fluid' />
                    </div>
                </div>
            </section>
        <hr />
            <section className="container my-3">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img src="../../../../src/assets/img/maketacion.jpg" alt="" className='img-fluid' />
                    </div>
                    <div className="col-12 col-md-8">
                        <h2>Maquetacion Html & css</h2>
                        <p>
                            El proyecto de Maquetación Web tuvo como propósito principal aprender y aplicar las técnicas esenciales para estructurar visualmente sitios web utilizando HTML y CSS. Durante el desarrollo, se trabajó en la creación de diseños responsivos y organizados mediante el uso de contenedores, secciones, columnas y filas. Se emplearon herramientas como Flexbox y Grid para distribuir los elementos de manera eficiente en diferentes resoluciones de pantalla, asegurando una experiencia de usuario fluida tanto en dispositivos móviles como en escritorio. Además, se integraron imágenes, tipografías y paletas de colores siguiendo principios básicos de diseño visual. Este ejercicio permitió comprender cómo transformar un diseño visual o boceto en una estructura web funcional, separando claramente el contenido (HTML) de la presentación (CSS). También se exploraron conceptos como semántica web, accesibilidad y uso adecuado de etiquetas. En conjunto, la maquetación web se consolidó como una habilidad clave en la construcción de páginas modernas, intuitivas y estéticamente atractivas.
                        </p>
                    </div>
                </div>
            </section>
        <hr />
            <section className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h2>Base de Datos</h2>
                        <p>
                            Una base de datos es un sistema que permite almacenar, organizar y gestionar grandes volúmenes de información de manera estructurada y eficiente. Su propósito principal es facilitar el acceso, la manipulación y la actualización de datos, garantizando su integridad, seguridad y disponibilidad. Las bases de datos son utilizadas en prácticamente todos los sectores, desde aplicaciones web y móviles hasta sistemas bancarios, académicos y empresariales.
                            Existen diferentes tipos de bases de datos, siendo las relacionales las más comunes, donde los datos se organizan en tablas y se relacionan entre sí mediante claves. Estas suelen gestionarse a través de un Sistema de Gestión de Bases de Datos (SGBD), como MySQL, PostgreSQL u Oracle, utilizando el lenguaje SQL para realizar consultas y operaciones. También existen modelos NoSQL, como MongoDB o Firebase, que ofrecen una estructura más flexible para trabajar con datos no tabulares, ideal para aplicaciones con grandes volúmenes de datos no estructurados o en tiempo real.
                        </p>
                    </div>
                    <div className="col-12 col-md-5 align-self-center">
                        <img src="../../../../src/assets/img/base-datos.jpg" alt="" className='img-fluid' />
                    </div>
                </div>
            </section>
        <hr />
            <section className="container my-3">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img src="../../../../src/assets/img/ahorrandoapp.jpg" alt="" className='img-fluid' />
                    </div>
                    <div className="col-12 col-md-8 align-self-center">
                        <h2>Ahorrando App</h2>
                        <p>
                            Ahorrando App es una aplicación web diseñada con el objetivo de fomentar la educación financiera personal mediante el control y visualización de los gastos e ingresos del usuario. El proyecto surgió como una propuesta práctica para desarrollar habilidades en desarrollo web, gestión de datos y experiencia de usuario. La interfaz permite registrar movimientos financieros, categorizarlos (alimentación, transporte, entretenimiento, etc.) y visualizar el saldo disponible en tiempo real. Se utilizaron formularios dinámicos, validaciones y almacenamiento local o en base de datos para garantizar la persistencia de la información. Además, se aplicaron principios de diseño responsivo para asegurar su uso en dispositivos móviles. La aplicación ofrece una visión clara del comportamiento financiero, facilitando la toma de decisiones y el hábito del ahorro. Ahorrando App no solo fue un ejercicio técnico, sino una herramienta funcional que promueve la responsabilidad financiera en el día a día. El proyecto integró HTML, CSS, JavaScript y bases de datos de manera coherente y efectiva.
                        </p>
                    </div>
                </div>
            </section>
<hr />
        </>
    )
}