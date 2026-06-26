import { projects } from "@/content/projects/data";
import { CaseStudyLayout } from "./CaseStudyLayout";

const project = projects.find((p) => p.slug === "hostelhub")!;

export function HostelHubCaseStudy() {
  return (
    <CaseStudyLayout
      project={project}
      sections={[
        {
          title: "El problema",
          content: (
            <>
              <p>
                Las plataformas de reservas de hostales como Hostelworld
                resuelven bien el problema de encontrar alojamiento, pero
                ignoran completamente la dimensión social del viaje. Un viajero
                que llega a una ciudad nueva no solo necesita una cama —
                necesita contexto: qué hacer, dónde ir, con quién conectar.
              </p>
              <p>
                HostelHub nació para cubrir ese hueco: una app que combina la
                reserva de alojamiento con una red social entre viajeros, donde
                la comunidad genera recomendaciones reales de lugares y la IA
                ayuda a construir rutas personalizadas.
              </p>
            </>
          ),
        },
        {
          title: "Decisiones técnicas",
          content: (
            <>
              <p>
                La decisión más importante fue el{" "}
                <strong>diseño del modelo relacional</strong>. Con entidades
                como usuarios, hostales, reservas, habitaciones, posts, rutas y
                recomendaciones, el riesgo era crear un esquema que creciera de
                forma inconsistente. Opté por modelar cada dominio de forma
                independiente con relaciones explícitas en Prisma, lo que
                permitió validar la lógica de negocio a nivel de esquema antes
                de escribir una sola línea de lógica de aplicación.
              </p>
              <p>
                Para la <strong>generación de rutas con IA</strong>, integré la
                API de OpenAI con un prompt estructurado que recibe el contexto
                del viajero (destino, duración, intereses) y devuelve una ruta
                en formato JSON que la app puede renderizar directamente. Esto
                evitó tener que construir un motor de recomendaciones propio
                desde cero.
              </p>
              <ul>
                <li>
                  React Native + Expo para cubrir iOS y Android desde una sola
                  base de código
                </li>
                <li>
                  JWT para autenticación stateless, compatible con el cliente
                  móvil sin sesiones de servidor
                </li>
                <li>
                  Prisma como ORM para mantener el esquema tipado y sincronizado
                  entre base de datos y aplicación
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Retos y soluciones",
          content: (
            <>
              <p>
                El mayor reto fue el <strong>diseño de la base de datos</strong>
                . La app combina dos dominios distintos — reservas
                (transaccional, con disponibilidad, fechas, precios) y red
                social (posts, feeds, conexiones entre usuarios) — que tienen
                patrones de acceso muy diferentes. Conseguir un esquema que
                sirviera bien a ambos sin duplicar datos ni crear relaciones
                circulares requirió varias iteraciones del modelo antes de
                llegar a una versión estable.
              </p>
              <p>
                Otro reto fue estructurar los <strong>prompts de OpenAI</strong>
                para que la respuesta fuera siempre JSON parseable y no texto
                libre. La solución fue definir un schema estricto en el prompt y
                validar la respuesta antes de enviarla al cliente — si la
                respuesta no era válida, se reintentaba con un prompt de
                corrección.
              </p>
            </>
          ),
        },
        {
          title: "Mejoras futuras",
          content: (
            <>
              <p>
                La prioridad inmediata es <strong>completar el deploy</strong>:
                backend en Railway con la base de datos PostgreSQL y el frontend
                exportado como web app con Expo para tener una demo accesible
                sin instalación.
              </p>
              <ul>
                <li>
                  Sistema de valoraciones y reviews de hostales por parte de
                  viajeros verificados
                </li>
                <li>
                  Notificaciones push para actividad social (nuevos posts en
                  destinos guardados, conexiones)
                </li>
                <li>
                  Mejorar la personalización de rutas con historial de viajes
                  del usuario como contexto adicional para la IA
                </li>
              </ul>
            </>
          ),
        },
      ]}
    />
  );
}
