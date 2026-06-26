import { projects } from "@/content/projects/data";
import { CaseStudyLayout } from "./CaseStudyLayout";

const project = projects.find((p) => p.slug === "iq-erp")!;

export function IQERPCaseStudy() {
  return (
    <CaseStudyLayout
      project={project}
      sections={[
        {
          title: "El problema",
          content: (
            <>
              <p>
                La mayoría de ERPs open source son demasiado genéricos o
                demasiado complejos para empresas pequeñas que fabrican
                productos propios. IQ-ERP nació como un sistema de gestión
                adaptable que pudiera manejar el ciclo completo: desde la
                materia prima hasta el producto terminado, pasando por
                proveedores, almacenes y clientes.
              </p>
              <p>
                El reto diferencial fue implementar un sistema de{" "}
                <strong>Bill of Materials (BOM)</strong> — una estructura que
                define de qué piezas o materiales está compuesto cada producto,
                con soporte para productos compuestos de otros productos.
              </p>
            </>
          ),
        },
        {
          title: "Decisiones técnicas",
          content: (
            <>
              <p>
                La decisión más compleja fue el{" "}
                <strong>modelo relacional del BOM</strong>. Un producto puede
                estar compuesto por materia prima, pero también por otros
                productos semiterminados — lo que genera una relación recursiva
                de la tabla de productos consigo misma. Modelar esto en
                PostgreSQL con Prisma requirió definir una tabla intermedia{" "}
                <code>BOMItem</code> con referencias a producto padre e hijo,
                más un campo de cantidad.
              </p>
              <ul>
                <li>
                  Relaciones auto-referenciales en Prisma para el árbol de
                  componentes del BOM
                </li>
                <li>
                  Reglas de negocio validadas a nivel de servicio (Node/Express)
                  antes de persistir — nunca solo en el cliente
                </li>
                <li>
                  Separación clara entre módulos (productos, inventario,
                  proveedores, clientes, envíos) para que cada dominio fuera
                  independiente y testeable de forma aislada
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
                El mayor reto fue definir las{" "}
                <strong>reglas de negocio del inventario</strong>. Cuando se
                fabrica un producto compuesto, el sistema debe descontar
                automáticamente los componentes del stock. Esto requiere
                recorrer el árbol BOM de forma recursiva, calcular las
                cantidades necesarias en cada nivel, y ejecutar todos los
                movimientos de inventario en una sola transacción para
                garantizar consistencia.
              </p>
              <p>
                Otro reto fue la <strong>amplitud del dominio</strong>: con
                entidades como productos, variantes, proveedores, clientes,
                almacenes, envíos y movimientos de inventario, mantener
                coherencia entre módulos sin crear dependencias circulares fue
                un ejercicio constante de diseño de arquitectura.
              </p>
            </>
          ),
        },
        {
          title: "Mejoras futuras",
          content: (
            <>
              <p>
                La principal mejora sería <strong>acotar el alcance</strong>: el
                sistema actual es muy general. Una versión más enfocada (por
                ejemplo, solo para empresas de manufactura pequeña) permitiría
                profundizar en las funcionalidades clave en lugar de cubrir
                muchos módulos a nivel superficial.
              </p>
              <ul>
                <li>
                  Completar el módulo de envíos con integración a APIs de
                  logística reales
                </li>
                <li>
                  Dashboard con métricas de inventario, rotación de stock y
                  alertas de reposición
                </li>
                <li>
                  Testing unitario de las reglas de negocio del BOM — es el
                  módulo con más lógica crítica y el que más se beneficiaría de
                  cobertura de tests
                </li>
              </ul>
            </>
          ),
        },
      ]}
    />
  );
}
