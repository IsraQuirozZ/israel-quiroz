export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  stack: string[];
  highlights: string[];
  image: string;
  links: {
    demo?: string;
    repoFront?: string;
    repoBack?: string;
    document?: string;
  };
  featured: boolean;
  caseStudy: boolean;
  isWorkExperience?: boolean;
};

export const projects: Project[] = [
  {
    slug: "hostelhub",
    name: "HostelHub",
    shortDescription:
      "Aplicación móvil de reservas de hostales +  red social para viajeros con integración de IA.",
    longDescription:
      "Aplicación móvil de reservas de hostales con  red social entre viajeros. Con autenticación JWT, chat entre usuarios, creación de publicaciones con subida de imágenes e integración de IA para creación de rutas. Modelo relacional propio y arquitectura fullstack completa.",
    image: "/images/projects/hh.webp",
    stack: [
      "React Native",
      "Expo",
      "JWT",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "OpenAI",
      "Cloudinary",
    ],
    highlights: [
      "Integración con OpenAI para creación de rutas personalizadas",
      "Sistema de reservas con disponibilidad en tiempo real",
      "Red social con perfiles, feed de viajes y chats entre viajeros",
    ],
    links: {
      document: "/documents/hostelhub-tfg.pdf",
      repoFront: "https://github.com/IsraQuirozZ/hostelhub-frontend",
      repoBack: "https://github.com/IsraQuirozZ/hostelhub-backend",
    },
    featured: true,
    caseStudy: true,
  },
  {
    slug: "iq-erp",
    name: "IQ-ERP",
    shortDescription:
      "Sistema de gestión empresarial con soporte para listas de materiales (BOM), inventario, proveedores, clientes, etc",
    longDescription:
      "Desarrollo fullstack de un ERP para sistema de gestión empresarial. Diseño e implementación del modelo relacional, autenticación mediante JWT, lógica de negocio compleja para la gestión de productos, inventario y estructuras Bill of Materials.",
    stack: [
      "React",
      "JavaScript",
      "Vite",
      "JWT",
      "Node.js",
      "Express",
      "MariaDB",
      "Prisma",
    ],
    highlights: [
      "Modelado de productos compuestos con BOM multinivel",
      "Gestión de inventario con trazabilidad de movimientos",
      "Módulo de proveedores y clientes con historial de operaciones",
    ],
    links: {
      repoFront: "https://github.com/IsraQuirozZ/erp-frontend",
      repoBack: "https://github.com/IsraQuirozZ/erp-backend",
    },
    image: "/images/projects/iq-erp.webp",
    featured: true,
    caseStudy: true,
  },
  {
    slug: "coemac-networking",
    name: "COEMAC Networking",
    shortDescription:
      "App interna de networking para empleados de empresa real. Desarrollada durante prácticas profesionales.",
    longDescription:
      "Desarrollo de una aplicación interna de networking para empleados de empresa real durante prácticas profesionales. Incluye funcionalidades de perfiles, referencias, reuniones y agradecimientos internos.",
    stack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    highlights: [
      "Desplegada y usada por empleados reales de la empresa",
      "Sistema de perfiles, conexiones y mensajería interna",
      "Desarrollada en equipo con metodología ágil informal",
    ],
    links: {},
    image: "/images/projects/c-networking.webp",
    featured: true,
    caseStudy: false,
    isWorkExperience: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
