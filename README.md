# Manual Interactivo - Biblioteca Digital CARDIQUE

Aplicación Next.js con TypeScript y Tailwind CSS para guiar a los usuarios en el uso de la Biblioteca Digital CARDIQUE.

## Características

- **Wizard interactivo** con múltiples rutas de aprendizaje
- **Progreso persistente** mediante localStorage
- **Animaciones funcionales** para mejor UX
- **Diseño responsive** con sidebar y drawer mobile
- **Accesibilidad** con navegación por teclado y aria-labels
- **Paleta de colores institucional** CARDIQUE

## Rutas Disponibles

1. **Acceder a la Biblioteca Digital** - Registro e inicio de sesión
2. **Consultar documentos** - Búsqueda y filtros avanzados
3. **Explorar por géneros** - Navegación por categorías

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── manual/
│   │   └── biblioteca-digital/
│   │       └── page.tsx   # Página principal del wizard
│   ├── layout.tsx         # Layout global
│   ├── page.tsx           # Homepage (redirección)
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── RouteSelector.tsx  # Selector de rutas inicial
│   ├── WizardShell.tsx    # Contenedor principal del wizard
│   ├── ProgressSidebar.tsx # Sidebar de progreso
│   ├── StepCard.tsx       # Tarjeta de paso individual
│   ├── Checklist.tsx      # Checklist interactivo
│   ├── ImageGuide.tsx     # Componente para imágenes guía
│   └── FooterNav.tsx      # Navegación inferior
├── hooks/                 # Hooks personalizados
│   └── useWizardReducer.ts # Estado del wizard con persistencia
└── data/                  # Datos estáticos
    └── manualRoutes.ts    # Definición de rutas y pasos
```

## Tecnologías

- **Next.js 14+** con App Router
- **TypeScript** para tipado seguro
- **Tailwind CSS** para estilos
- **Lucide React** para iconos
- **next/image** para optimización de imágenes

## Paleta de Colores

- **deep-teal**: Estructura principal (headers, títulos)
- **sea-green**: Acciones principales (botones)
- **medium-jungle**: Progreso y estados completados
- **moss-green**: Acciones secundarias
- **lemon-lime**: Énfasis mínimo (badges, highlights)

## Accesibilidad

- Navegación completa por teclado
- Indicadores de foco visibles
- aria-labels en controles principales
- Estructura semántica HTML5

## Animaciones

- Transiciones suaves entre pasos (slide + fade)
- Animaciones de progreso funcionales
- Feedback visual en interacciones
- Duración: 200-280ms con ease-out
