export interface ChecklistItem {
  id: string
  text: string
  completed: boolean
}

export interface Step {
  id: string
  title: string
  goal: string
  checklist: ChecklistItem[]
  expectedResult: string
  image: string
  imageAlt: string
}

export interface Route {
  id: string
  name: string
  description: string
  steps: Step[]
}

export const manualRoutes: Route[] = [
  {
    id: 'acceso',
    name: 'Acceder a la Biblioteca Digital',
    description: 'Aprende cómo acceder y registrarte en la plataforma',
    steps: [
      {
        id: 'acceso-1',
        title: 'Ingreso a la página web de CARDIQUE',
        goal: 'Acceder al portal web oficial de CARDIQUE para llegar a la Biblioteca Digital',
        checklist: [
          { id: 'acceso-1-1', text: 'Abrir navegador web', completed: false },
          { id: 'acceso-1-2', text: 'Ingresar la dirección: https://cardique.gov.co/', completed: false },
          { id: 'acceso-1-3', text: 'Presionar Enter para cargar la página principal', completed: false },
          { id: 'acceso-1-4', text: 'Desplazarse hacia abajo hasta encontrar la sección "Accesos rápidos"', completed: false },
          { id: 'acceso-1-5', text: 'Hacer clic en el enlace de la Biblioteca Digital', completed: false }
        ],
        expectedResult: 'Acceso a la sección de Accesos Rápidos y enlace a la Biblioteca Digital',
        image: '/images/cardique-accesos-rapidos.png',
        imageAlt: 'Página principal de CARDIQUE con sección de Accesos Rápidos resaltada'
      },
      {
        id: 'acceso-2',
        title: 'Consulta documental',
        goal: 'Explorar las opciones de búsqueda y navegación de la Biblioteca Digital',
        checklist: [
          { id: 'acceso-2-1', text: 'Visualizar las diferentes colecciones documentales', completed: false },
          { id: 'acceso-2-2', text: 'Localizar el acceso a la búsqueda avanzada', completed: false },
          { id: 'acceso-2-3', text: 'Identificar los géneros bibliográficos disponibles', completed: false },
          { id: 'acceso-2-4', text: 'Explorar las opciones de navegación principal', completed: false },
          { id: 'acceso-2-5', text: 'Hacer clic en "Búsqueda Avanzada"', completed: false },
          { id: 'acceso-2-6', text: 'Seleccionar tipo de material', completed: false },
          { id: 'acceso-2-7', text: 'Ingresar título o palabras clave', completed: false },
          { id: 'acceso-2-8', text: 'Filtrar por género bibliográfico', completed: false },
          { id: 'acceso-2-9', text: 'Especificar editorial o autor si es necesario', completed: false },
          { id: 'acceso-2-10', text: 'Hacer clic en "Buscar"', completed: false },
          { id: 'acceso-2-11', text: 'Revisar la tabla de resultados', completed: false },
          { id: 'acceso-2-12', text: 'Analizar la información bibliográfica detallada', completed: false },
          { id: 'acceso-2-13', text: 'Identificar datos relevantes de cada documento', completed: false },
          { id: 'acceso-2-14', text: 'Utilizar opciones de ordenamiento si es necesario', completed: false }
        ],
        expectedResult: 'Dominio completo de las funcionalidades de búsqueda',
        image: '/images/consulta-documental.png',
        imageAlt: 'Interfaz completa de consulta documental con búsqueda'
      },
      {
        id: 'acceso-3',
        title: 'Navegación por géneros bibliográficos',
        goal: 'Acceder rápidamente a documentos por categorías',
        checklist: [
          { id: 'acceso-3-1', text: 'Localizar la sección de géneros bibliográficos', completed: false },
          { id: 'acceso-3-2', text: 'Explorar las categorías disponibles', completed: false },
          { id: 'acceso-3-3', text: 'Seleccionar un género específico', completed: false },
          { id: 'acceso-3-4', text: 'Visualizar los documentos clasificados', completed: false },
          { id: 'acceso-3-5', text: 'Navegar entre diferentes géneros según necesidad', completed: false }
        ],
        expectedResult: 'Acceso eficiente a documentos por género bibliográfico',
        image: '/images/generos-bibliograficos.png',
        imageAlt: 'Navegación por géneros bibliográficos con documentos clasificados'
      },
      {
        id: 'acceso-4',
        title: 'Ruta completada',
        goal: 'Confirmar finalización exitosa del aprendizaje',
        checklist: [],
        expectedResult: 'Usuario listo para usar la Biblioteca Digital CARDIQUE',
        image: '/images/ruta-completada.png',
        imageAlt: 'Pantalla de finalización de ruta con opciones de acción'
      }
    ]
  },
  {
    id: 'consulta',
    name: 'Consultar documentos',
    description: 'Aprende a buscar y consultar documentos',
    steps: [
      {
        id: 'consulta-1',
        title: 'Usar el buscador',
        goal: 'Encontrar documentos usando el buscador principal',
        checklist: [
          { id: 'consulta-1-1', text: 'Localizar caja de búsqueda', completed: false },
          { id: 'consulta-1-2', text: 'Ingresar términos de búsqueda', completed: false },
          { id: 'consulta-1-3', text: 'Presionar Enter o clic en buscar', completed: false },
          { id: 'consulta-1-4', text: 'Revisar resultados obtenidos', completed: false }
        ],
        expectedResult: 'Lista de documentos relacionados con la búsqueda',
        image: '/images/buscador-principal.png',
        imageAlt: 'Buscador principal de la Biblioteca Digital'
      },
      {
        id: 'consulta-2',
        title: 'Aplicar filtros',
        goal: 'Refinar búsqueda usando filtros avanzados',
        checklist: [
          { id: 'consulta-2-1', text: 'Abrir panel de filtros', completed: false },
          { id: 'consulta-2-2', text: 'Seleccionar tipo de documento', completed: false },
          { id: 'consulta-2-3', text: 'Establecer rango de fechas', completed: false },
          { id: 'consulta-2-4', text: 'Aplicar filtros seleccionados', completed: false }
        ],
        expectedResult: 'Resultados filtrados según criterios',
        image: '/images/filtros-avanzados.png',
        imageAlt: 'Panel de filtros avanzados'
      },
      {
        id: 'consulta-3',
        title: 'Visualizar documento',
        goal: 'Abrir y leer un documento encontrado',
        checklist: [
          { id: 'consulta-3-1', text: 'Hacer clic en documento deseado', completed: false },
          { id: 'consulta-3-2', text: 'Usar visor de documentos', completed: false },
          { id: 'consulta-3-3', text: 'Navegar entre páginas', completed: false },
          { id: 'consulta-3-4', text: 'Ajustar zoom si es necesario', completed: false }
        ],
        expectedResult: 'Documento abierto y legible en el visor',
        image: '/images/visor-documento.png',
        imageAlt: 'Visor de documentos integrado'
      }
    ]
  },
  {
    id: 'generos',
    name: 'Explorar por géneros',
    description: 'Descubre documentos organizados por categorías',
    steps: [
      {
        id: 'generos-1',
        title: 'Navegar por categorías',
        goal: 'Explorar los diferentes géneros documentales',
        checklist: [
          { id: 'generos-1-1', text: 'Localizar sección de géneros', completed: false },
          { id: 'generos-1-2', text: 'Revisar lista de categorías disponibles', completed: false },
          { id: 'generos-1-3', text: 'Hacer clic en género de interés', completed: false }
        ],
        expectedResult: 'Vista de documentos del género seleccionado',
        image: '/images/menu-generos.png',
        imageAlt: 'Menú de géneros documentales'
      },
      {
        id: 'generos-2',
        title: 'Explorar subcategorías',
        goal: 'Navegar dentro de un género específico',
        checklist: [
          { id: 'generos-2-1', text: 'Identificar subcategorías del género', completed: false },
          { id: 'generos-2-2', text: 'Seleccionar subcategoría relevante', completed: false },
          { id: 'generos-2-3', text: 'Explorar documentos disponibles', completed: false }
        ],
        expectedResult: 'Documentos organizados por subcategoría',
        image: '/images/subcategorias.png',
        imageAlt: 'Subcategorías dentro de un género'
      },
      {
        id: 'generos-3',
        title: 'Guardar favoritos',
        goal: 'Marcar documentos como favoritos para acceso rápido',
        checklist: [
          { id: 'generos-3-1', text: 'Hacer clic en icono de favorito', completed: false },
          { id: 'generos-3-2', text: 'Verificar que se marcó como favorito', completed: false },
          { id: 'generos-3-3', text: 'Acceder a sección de favoritos', completed: false },
          { id: 'generos-3-4', text: 'Confirmar documento guardado', completed: false }
        ],
        expectedResult: 'Documento agregado a favoritos',
        image: '/images/favoritos.png',
        imageAlt: 'Sección de documentos favoritos'
      }
    ]
  }
]
