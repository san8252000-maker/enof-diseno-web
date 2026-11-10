// ==========================================
// MENÚ RESPONSIVE
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
});

document.querySelectorAll("#mainNav a").forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("active");
    });
});


// ==========================================
// INFORMACIÓN DE LAS CLASES
// ==========================================

const clases = {

    // ------------------------------------------
    // CLASE 1
    // ------------------------------------------

    1: {
        titulo: "Clase 1 · Primeros pasos en la Web",
        icono: "🌐",

        pregunta:
            "¿Cómo podemos comunicarle a una computadora cómo debe organizar el contenido de una página web?",

        objetivos: [
            "Comprender qué es HTML y para qué se utiliza.",
            "Reconocer la estructura básica de un documento HTML.",
            "Utilizar etiquetas de apertura y cierre.",
            "Crear un documento HTML sencillo."
        ],

        etiquetas: [
            "&lt;!DOCTYPE&gt;",
            "&lt;html&gt;",
            "&lt;head&gt;",
            "&lt;body&gt;",
            "&lt;p&gt;"
        ],

        vocabulario: [
            "HTML",
            "Elemento HTML",
            "Etiqueta HTML",
            "Contenido del sitio web",
            "Estructura del sitio web"
        ],

        recursos: [
            {
                nombre: "Introducción al Laboratorio Web",
                url: "https://youtu.be/itx0RYOnoBs"
            },
            {
                nombre: "Introducción al HTML",
                url: "https://docs.google.com/presentation/d/1THsvC-ZcYupB91jl762-Sk8adEw3fKCDV9NC5n53k60/template/preview"
            },
            {
                nombre: "Programación en parejas",
                url: "https://www.youtube.com/watch?v=q7d_JtyCq1A"
            }
        ]
    },


    // ------------------------------------------
    // CLASE 2
    // ------------------------------------------

    2: {
        titulo: "Clase 2 · Encabezados y listas",
        icono: "🧩",

        pregunta:
            "¿Cómo podemos colaborar para solucionar los problemas de nuestros sitios web?",

        objetivos: [
            "Estructurar el contenido en títulos, subtítulos, listas y párrafos.",
            "Trabajar colaborativamente en la creación de un artefacto digital.",
            "Utilizar etiquetas de encabezado.",
            "Utilizar listas ordenadas y desordenadas.",
            "Practicar estrategias de debugging."
        ],

        etiquetas: [
            "&lt;h1&gt;",
            "&lt;li&gt;",
            "&lt;ol&gt;",
            "&lt;ul&gt;"
        ],

        vocabulario: [
            "Encabezado",
            "Lista",
            "Debugging",
            "Programación en parejas"
        ],

        recursos: [
            {
                nombre: "Video · Debugging",
                url: "https://youtu.be/auv10y-dN4s"
            },
            {
                nombre: "Video · Programación en parejas",
                url: "https://youtu.be/q7d_JtyCq1A"
            }
        ]
    },


    // ------------------------------------------
    // CLASE 5
    // ------------------------------------------

    5: {
        titulo: "Clase 5 · Miniproyecto: Página Web HTML",
        icono: "🚀",

        pregunta:
            "¿Cómo puedo usar HTML para diseñar y crear una página web para un usuario?",

        objetivos: [
            "Crear una página web utilizando HTML.",
            "Diseñar una página web teniendo en cuenta las necesidades de un usuario.",
            "Escribir código legible.",
            "Aplicar un proceso de resolución de problemas.",
            "Recibir y utilizar comentarios de compañeros."
        ],

        etapas: [
            {
                nombre: "Definir",
                descripcion:
                    "Seleccionar un usuario y reconocer sus necesidades."
            },
            {
                nombre: "Preparar",
                descripcion:
                    "Diseñar y organizar la estructura de la página."
            },
            {
                nombre: "Intentar y desarrollar",
                descripcion:
                    "Construir la página utilizando HTML."
            },
            {
                nombre: "Recibir comentarios",
                descripcion:
                    "Revisar el trabajo con otros compañeros."
            },
            {
                nombre: "Reflexionar",
                descripcion:
                    "Reconocer dificultades, aprendizajes y posibles mejoras."
            }
        ],

        proceso: [
            "👤 Pensar en el usuario",
            "📝 Definir qué necesita",
            "🗺️ Diseñar la estructura",
            "💻 Crear la página",
            "🐛 Detectar y resolver errores",
            "👥 Recibir comentarios",
            "🔄 Revisar y mejorar",
            "💭 Reflexionar"
        ],

        vocabulario: [
            "Usuario",
            "Necesidades del usuario",
            "Proceso de resolución de problemas",
            "MVP (producto mínimo viable)",
            "Debugging",
            "Revisión por pares"
        ],

        recursos: [
            {
                nombre: "Rúbrica de página web HTML",
                url: "https://docs.google.com/document/d/1l6tIyQWurGV_Rc9fjrWiVJHwL52XywbpV34ZJvPYGUQ/view"
            },
            {
                nombre: "Guía del proyecto HTML · Opción 1",
                url: "https://docs.google.com/document/d/1N_WaufN75hFmLlxuP5bn5sUYHxMOTRfXvgBDV07Ufvw/view"
            },
            {
                nombre: "Guía del proyecto HTML · Opción 2",
                url: "https://docs.google.com/document/d/1M3O2VKNkrp5B1gzqLo21LI0N7iAxJde7ftpczjWDxtA/view"
            },
            {
                nombre: "Revisión por pares",
                url: "https://docs.google.com/document/d/1NhJK1vXmFaEzzUZ39eGBs0wU9JRvnj-ATDKWT1kuliY/view"
            },
            {
                nombre: "Proceso de resolución de problemas",
                url: "https://docs.google.com/document/d/1q10YfeMqY95SAq0VAB3wnLPK2aDuJEoD2j82n-i183Y/edit"
            },
            {
                nombre: "Video · Debugging",
                url: "https://www.youtube.com/watch?v=auv10y-dN4s"
            }
        ]
    },


    // ------------------------------------------
    // CLASE 6
    // ------------------------------------------

    6: {
        titulo: "Clase 6 · Dar estilo al texto con CSS",
        icono: "🎨",

        pregunta:
            "¿Cómo podemos cambiar el estilo del texto en una página web?",

        objetivos: [
            "Comprender la diferencia entre HTML y CSS.",
            "Reconocer CSS como una herramienta para definir el estilo de una página web.",
            "Comprender la estructura básica de una regla CSS.",
            "Vincular una hoja de estilos externa con una página HTML.",
            "Utilizar selectores CSS para modificar elementos de texto.",
            "Explorar propiedades básicas de estilo."
        ],

        conceptos: [
            {
                nombre: "HTML",
                descripcion: "Estructura y contenido."
            },
            {
                nombre: "CSS",
                descripcion: "Apariencia y estilo."
            },
            {
                nombre: "Selector",
                descripcion: "Indica qué elemento HTML queremos modificar."
            },
            {
                nombre: "Propiedad",
                descripcion: "Indica qué característica queremos cambiar."
            },
            {
                nombre: "Valor",
                descripcion: "Indica cómo queremos modificar esa característica."
            }
        ],

        propiedades: [
            "color",
            "font-family",
            "font-size",
            "text-align",
            "text-decoration"
        ],

        codigo: [
            "color: value;",
            "font-family: value;",
            "font-size: value;",
            "text-align: value;",
            "text-decoration: value;"
        ],

        vocabulario: [
            "CSS",
            "Cascading Style Sheets",
            "Selector CSS",
            "Propiedad CSS",
            "Valor CSS",
            "Hoja de estilos",
            "HTML",
            "Estilo"
        ],

        actividades: [
            "🔎 Explorar una página web y reconocer su estructura.",
            "🧩 Diferenciar contenido, estructura y estilo.",
            "🎨 Experimentar con propiedades CSS.",
            "🔗 Comprender cómo se vincula una hoja de estilos externa.",
            "🧪 Probar diferentes valores para modificar el texto.",
            "📝 Registrar propiedades CSS y sus usos."
        ],

        recursos: [
            {
                nombre: "Introducción a CSS · Parte 1",
                url: "https://www.youtube.com/watch?v=EP9QMdoXvXE"
            },
            {
                nombre: "Descarga · Introducción a CSS · Parte 1",
                url: "https://videos.code.org/levelbuilder/weblab_introtocss-mp4.mp4"
            },
            {
                nombre: "Introducción a CSS · Parte 2",
                url: "https://youtu.be/VgBVKlpLqsE"
            },
            {
                nombre: "Descarga · Introducción a CSS · Parte 2",
                url: "https://videos.code.org/levelbuilder/weblab_usingastylesheet-mp4.mp4"
            }
        ]
    }
};
    // ------------------------------------------
    // CLASE 7
    // ------------------------------------------

    7: {
        titulo: "Clase 7 · Propiedad intelectual y Creative Commons",
        icono: "©️",

        pregunta:
            "¿Qué reglas protegen los derechos de todos cuando utilizamos contenidos creados por otras personas?",

        objetivos: [
            "Comprender el propósito del copyright y la protección de las obras.",
            "Reconocer que las personas creadoras tienen derechos sobre sus producciones.",
            "Identificar diferentes licencias Creative Commons.",
            "Comprender la importancia de atribuir correctamente una obra.",
            "Seleccionar contenidos que podamos utilizar respetando sus condiciones."
        ],

        conceptos: [
            {
                nombre: "Copyright",
                descripcion: "Protección legal de los derechos de autor sobre una obra."
            },
            {
                nombre: "Autoría",
                descripcion: "Reconocimiento de la persona que creó una obra."
            },
            {
                nombre: "Creative Commons",
                descripcion: "Sistema de licencias que permite compartir obras bajo determinadas condiciones."
            },
            {
                nombre: "Atribución",
                descripcion: "Reconocer y mencionar a quien creó el contenido que utilizamos."
            }
        ],

        actividades: [
            "🔎 Explorar situaciones de uso de imágenes y otros contenidos en Internet.",
            "💬 Conversar sobre los derechos de las personas creadoras.",
            "©️ Reconocer diferentes licencias Creative Commons.",
            "🧩 Comparar qué usos permite cada licencia.",
            "🖼️ Buscar imágenes y revisar las condiciones de utilización.",
            "📝 Registrar cómo atribuir correctamente una obra."
        ],

        vocabulario: [
            "Copyright",
            "Derechos de autor",
            "Autoría",
            "Creative Commons",
            "Licencia",
            "Atribución"
        ]
    },

    // ------------------------------------------
    // CLASE 8
    // ------------------------------------------

    8: {
        titulo: "Clase 8 · Agregar imágenes a una página web",
        icono: "🖼️",

        pregunta:
            "¿Cómo podemos agregar imágenes a nuestros sitios web respetando los derechos de todas las personas?",

        objetivos: [
            "Incorporar imágenes en una página web utilizando HTML.",
            "Reconocer que la etiqueta img es una etiqueta autocerrada.",
            "Comprender la función de los atributos src y alt.",
            "Describir las imágenes mediante textos alternativos.",
            "Respetar los derechos de autor y atribuir correctamente las imágenes."
        ],

        etiquetas: [
            "&lt;img&gt;"
        ],

        conceptos: [
            {
                nombre: "Imagen",
                descripcion: "Recurso visual que podemos incorporar al contenido de una página web."
            },
            {
                nombre: "Etiqueta autocerrada",
                descripcion: "Etiqueta que no necesita una etiqueta de cierre."
            },
            {
                nombre: "src",
                descripcion: "Atributo que indica la ubicación o el nombre del archivo de imagen."
            },
            {
                nombre: "alt",
                descripcion: "Texto alternativo que describe la imagen."
            },
            {
                nombre: "Atribución",
                descripcion: "Reconocimiento de la autoría y la licencia de la imagen utilizada."
            }
        ],

        codigo: [
            "&lt;img src=\"imagen.jpg\" alt=\"Descripción de la imagen\"&gt;"
        ],

        actividades: [
            "🖼️ Explorar los archivos de imágenes disponibles en Web Lab.",
            "💻 Incorporar imágenes a una página utilizando la etiqueta img.",
            "🔍 Identificar la función de los atributos src y alt.",
            "✏️ Escribir textos alternativos que describan las imágenes.",
            "©️ Revisar las licencias y atribuciones de las imágenes seleccionadas.",
            "🐛 Detectar y corregir errores en la escritura de la etiqueta."
        ],

        vocabulario: [
            "Imagen",
            "Etiqueta autocerrada",
            "Atributo",
            "src",
            "alt",
            "Texto alternativo",
            "Copyright",
            "Atribución"
        ]
    },

    // ------------------------------------------
    // CLASE 9
    // ------------------------------------------

    9: {
        titulo: "Clase 9 · Estilos para imágenes y diseños",
        icono: "🎨",

        pregunta:
            "¿Cómo podemos aplicar estilos a las imágenes y a la distribución de los elementos de una página web?",

        objetivos: [
            "Crear reglas CSS para modificar el aspecto de una página web.",
            "Comprender cómo una regla aplicada al body puede afectar a los elementos de la página.",
            "Utilizar propiedades CSS para modificar tamaños, márgenes, bordes y posiciones.",
            "Incorporar hipervínculos mediante la etiqueta a.",
            "Reconocer diferentes formas de abrir un enlace.",
            "Explorar el uso de imágenes como enlaces."
        ],

        etiquetas: [
            "&lt;body&gt;",
            "&lt;a&gt;"
        ],

        propiedades: [
            "background-color",
            "border-color",
            "border-radius",
            "border-style",
            "border-width",
            "float",
            "height",
            "margin",
            "width"
        ],

        codigo: [
            "background-color: value;",
            "width: value;",
            "height: value;",
            "margin: value;",
            "border: value;",
            "&lt;a href=\"https://ejemplo.com\"&gt;Visitar sitio&lt;/a&gt;",
            "&lt;a href=\"https://ejemplo.com\" target=\"_blank\"&gt;Abrir en otra pestaña&lt;/a&gt;",
            "&lt;a href=\"https://ejemplo.com\"&gt;&lt;img src=\"imagen.jpg\" alt=\"Descripción\"&gt;&lt;/a&gt;"
        ],

        conceptos: [
            {
                nombre: "Regla CSS",
                descripcion: "Conjunto formado por un selector y las declaraciones que definen el estilo."
            },
            {
                nombre: "body",
                descripcion: "Selector que permite aplicar estilos al cuerpo del documento HTML."
            },
            {
                nombre: "Hipervínculo",
                descripcion: "Enlace que permite navegar hacia otra página o recurso."
            },
            {
                nombre: "href",
                descripcion: "Atributo que indica el destino de un enlace."
            },
            {
                nombre: "target",
                descripcion: "Atributo que permite definir dónde se abre un enlace."
            },
            {
                nombre: "Google Fonts",
                descripcion: "Servicio que permite incorporar familias tipográficas a un sitio web."
            }
        ],

        actividades: [
            "🎨 Crear reglas CSS para modificar el fondo y la apariencia de la página.",
            "📐 Experimentar con width y height para cambiar el tamaño de las imágenes.",
            "🔲 Aplicar bordes, colores, redondeados y márgenes.",
            "↔️ Explorar la propiedad float para modificar la distribución de los elementos.",
            "🔗 Crear hipervínculos con la etiqueta a.",
            "🧭 Comparar enlaces que se abren en la misma pestaña y en una nueva pestaña.",
            "🖼️ Convertir una imagen en un enlace.",
            "🔤 Explorar familias tipográficas mediante Google Fonts."
        ],

        vocabulario: [
            "CSS",
            "Regla CSS",
            "Selector",
            "Propiedad",
            "Valor",
            "Hipervínculo",
            "href",
            "target",
            "Google Fonts",
            "Diseño web"
        ]
    },

    // ------------------------------------------
    // CLASE 10
    // ------------------------------------------

    10: {
        titulo: "Clase 10 · Miniproyecto: Diseñamos para un usuario",
        icono: "🚀",

        pregunta:
            "¿Cómo podemos utilizar CSS para diseñar una página web teniendo en cuenta las necesidades de un usuario?",

        objetivos: [
            "Diseñar una página web considerando las necesidades de un usuario.",
            "Aplicar propiedades CSS para mejorar la presentación visual.",
            "Integrar imágenes y estilos en una página web.",
            "Organizar el código de manera clara y legible.",
            "Probar, revisar y mejorar el diseño a partir de comentarios."
        ],

        etapas: [
            {
                nombre: "Definir",
                descripcion: "Identificar al usuario y reconocer qué necesita comunicar o encontrar en la página."
            },
            {
                nombre: "Planificar",
                descripcion: "Pensar la organización del contenido, las imágenes y los estilos que se van a utilizar."
            },
            {
                nombre: "Diseñar",
                descripcion: "Elegir colores, tipografías, tamaños y distribución de los elementos."
            },
            {
                nombre: "Desarrollar",
                descripcion: "Construir y dar estilo a la página utilizando HTML y CSS."
            },
            {
                nombre: "Revisar",
                descripcion: "Probar la página, detectar errores y recibir comentarios de otros compañeros."
            },
            {
                nombre: "Reflexionar",
                descripcion: "Reconocer los aprendizajes y pensar posibles mejoras."
            }
        ],

        proceso: [
            "👤 Pensar en el usuario",
            "📝 Identificar sus necesidades",
            "🗺️ Planificar la página",
            "🎨 Diseñar los estilos",
            "💻 Programar con HTML y CSS",
            "🖼️ Incorporar imágenes",
            "🐛 Probar y corregir errores",
            "👥 Compartir y recibir comentarios",
            "🔄 Mejorar el diseño",
            "💭 Reflexionar sobre el proceso"
        ],

        vocabulario: [
            "Usuario",
            "Necesidades del usuario",
            "Diseño web",
            "HTML",
            "CSS",
            "Imagen",
            "Estilo",
            "Debugging",
            "Revisión por pares",
            "Proceso de diseño"
        ]
    }

};



// ==========================================
// MOSTRAR INFORMACIÓN DE UNA CLASE
// ==========================================

function mostrarClase(numero) {

    const clase = clases[numero];

    if (!clase) {
        return;
    }

    let contenido = `

        <div class="modal-icon">
            ${clase.icono}
        </div>

        <div class="modal-number">
            CLASE ${numero}
        </div>

        <h2>
            ${clase.titulo}
        </h2>

        <div class="modal-question">
            <span>💭</span>
            <p>
                ${clase.pregunta}
            </p>
        </div>

    `;


    // ======================================
    // OBJETIVOS
    // ======================================

    if (clase.objetivos) {

        contenido += `

            <div class="modal-section">

                <h3>🎯 Objetivos</h3>

                <ul>
                    ${clase.objetivos
                        .map(objetivo => `<li>${objetivo}</li>`)
                        .join("")}
                </ul>

            </div>

        `;
    }


    // ======================================
    // ETIQUETAS HTML
    // ======================================

    if (clase.etiquetas) {

        contenido += `

            <div class="modal-section">

                <h3>🏷️ Etiquetas</h3>

                <div class="modal-tags">

                    ${clase.etiquetas
                        .map(etiqueta => `<code>${etiqueta}</code>`)
                        .join("")}

                </div>

            </div>

        `;
    }


    // ======================================
    // CONCEPTOS
    // ======================================

    if (clase.conceptos) {

        contenido += `

            <div class="modal-section">

                <h3>💡 Conceptos</h3>

                <div class="concept-list">

                    ${clase.conceptos
                        .map(concepto => `
                            <div class="concept-item">

                                <strong>
                                    ${concepto.nombre}
                                </strong>

                                <p>
                                    ${concepto.descripcion}
                                </p>

                            </div>
                        `)
                        .join("")}

                </div>

            </div>

        `;
    }


    // ======================================
    // PROPIEDADES CSS
    // ======================================

    if (clase.propiedades) {

        contenido += `

            <div class="modal-section">

                <h3>🎨 Propiedades CSS</h3>

                <div class="modal-tags">

                    ${clase.propiedades
                        .map(propiedad => `
                            <code>${propiedad}</code>
                        `)
                        .join("")}

                </div>

            </div>

        `;
    }


    // ======================================
    // CÓDIGO
    // ======================================

    if (clase.codigo) {

        contenido += `

            <div class="modal-section">

                <h3>💻 Código</h3>

                <div class="code-example">

                    ${clase.codigo
                        .map(linea => `
                            <code>${linea}</code>
                        `)
                        .join("<br>")}

                </div>

            </div>

        `;
    }


    // ======================================
    // VOCABULARIO
    // ======================================

    if (clase.vocabulario) {

        contenido += `

            <div class="modal-section">

                <h3>📚 Vocabulario</h3>

                <div class="modal-tags">

                    ${clase.vocabulario
                        .map(palabra => `
                            <span>${palabra}</span>
                        `)
                        .join("")}

                </div>

            </div>

        `;
    }


    // ======================================
    // ETAPAS DEL PROYECTO
    // ======================================

    if (clase.etapas) {

        contenido += `

            <div class="modal-section">

                <h3>🧭 Etapas del proyecto</h3>

                <div class="project-stages">

                    ${clase.etapas
                        .map((etapa, index) => `
                            <div class="stage">

                                <span>
                                    ${index + 1}
                                </span>

                                <div>
                                    <strong>
                                        ${etapa.nombre}
                                    </strong>

                                    <p>
                                        ${etapa.descripcion}
                                    </p>
                                </div>

                            </div>
                        `)
                        .join("")}

                </div>

            </div>

        `;
    }


    // ======================================
    // PROCESO
    // ======================================

    if (clase.proceso) {

        contenido += `

            <div class="modal-section">

                <h3>🔄 Proceso de trabajo</h3>

                <div class="process-list">

                    ${clase.proceso
                        .map(paso => `
                            <div class="process-item">
                                ${paso}
                            </div>
                        `)
                        .join("")}

                </div>

            </div>

        `;
    }


    // ======================================
    // ACTIVIDADES
    // ======================================

    if (clase.actividades) {

        contenido += `

            <div class="modal-section">

                <h3>🧪 Actividades</h3>

                <ul>
                    ${clase.actividades
                        .map(actividad => `
                            <li>${actividad}</li>
                        `)
                        .join("")}
                </ul>

            </div>

        `;
    }


    // ======================================
    // RECURSOS
    // ======================================

    if (clase.recursos && clase.recursos.length > 0) {

        contenido += `

            <div class="modal-section">

                <h3>🔗 Recursos</h3>

                <div class="modal-resources">

                    ${clase.recursos
                        .map(recurso => `
                            <a
                                href="${recurso.url}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ${recurso.nombre}
                                <span>↗</span>
                            </a>
                        `)
                        .join("")}

                </div>

            </div>

        `;
    }


    // ======================================
    // INSERTAR CONTENIDO EN EL MODAL
    // ======================================

    const modalContent =
        document.getElementById("modalContent");

    const classModal =
        document.getElementById("classModal");

    modalContent.innerHTML = contenido;

    classModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// ==========================================
// CERRAR MODAL
// ==========================================

function cerrarModal() {

    const classModal =
        document.getElementById("classModal");

    classModal.classList.remove("active");

    document.body.style.overflow = "";
}


// ==========================================
// CERRAR AL HACER CLIC FUERA DEL CONTENIDO
// ==========================================

document.getElementById("classModal").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {
            cerrarModal();
        }

    }
);


// ==========================================
// CERRAR CON LA TECLA ESC
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            cerrarModal();
        }

    }
);
