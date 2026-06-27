export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
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
      "Aplicación móvil que combina reservas de hostales con una red social entre viajeros.",
    image: "/images/projects/placeholder.png",
    stack: [
      "React Native",
      "Expo",
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
      // demo: "https://hostelhub.vercel.app/",
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
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    highlights: [
      "Modelado de productos compuestos con BOM multinivel",
      "Gestión de inventario con trazabilidad de movimientos",
      "Módulo de proveedores y clientes con historial de operaciones",
    ],
    links: {
      repoFront: "https://github.com/IsraQuirozZ/erp-frontend",
      repoBack: "https://github.com/IsraQuirozZ/erp-backend",
    },
    image: "/images/projects/placeholder.png",
    featured: true,
    caseStudy: true,
  },
  {
    slug: "coemac-networking",
    name: "COEMAC Networking",
    shortDescription:
      "App interna de networking para empleados de una empresa real. Desarrollada durante prácticas profesionales.",
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
    image: "/images/projects/placeholder.png",
    featured: true,
    caseStudy: false,
    isWorkExperience: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
