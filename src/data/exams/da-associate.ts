import type { Question } from '../certifications';

export const daAssociateTest1: Question[] = [
  {
    id: 'daa-t1-1',
    text: "¿Cuál es el propósito principal de Databricks SQL?",
    options: [
      "Entrenar modelos de Deep Learning",
      "Proporcionar un entorno optimizado para ejecutar consultas SQL y crear dashboards",
      "Ingestar datos en tiempo real desde Kafka",
      "Administrar la infraestructura de red del workspace"
    ],
    correctAnswerIndex: 1,
    explanation: "Databricks SQL está diseñado específicamente para analistas de datos, ofreciendo un motor SQL optimizado (Photon) y herramientas integradas para visualización y dashboards.",
    category: "Databricks SQL"
  },
  {
    id: 'daa-t1-2',
    text: "¿Qué tipo de objeto en Databricks SQL permite guardar una consulta frecuentemente usada para que otros puedan consultarla como si fuera una tabla?",
    options: [
      "Un Dashboard",
      "Un SQL Endpoint",
      "Una Vista (View)",
      "Una Alerta"
    ],
    correctAnswerIndex: 2,
    explanation: "Una Vista (View) es una tabla virtual basada en el resultado de una consulta SQL, permitiendo reutilizar lógica compleja sin duplicar datos.",
    category: "Modelado de Datos"
  }
];

export const daAssociateTest2: Question[] = [
  {
    id: 'daa-t2-1',
    text: "¿Qué funcionalidad de Databricks SQL te notifica automáticamente cuando una métrica alcanza un umbral específico?",
    options: [
      "Dashboards",
      "Alerts (Alertas)",
      "Query History",
      "SQL Warehouses"
    ],
    correctAnswerIndex: 1,
    explanation: "Las Alertas en Databricks SQL evalúan periódicamente una consulta y envían notificaciones (email, Slack, webhook) si los resultados cumplen una condición definida.",
    category: "Visualización y Alertas"
  },
  {
    id: 'daa-t2-2',
    text: "¿Qué es un SQL Warehouse en Databricks?",
    options: [
      "Un repositorio de código para scripts SQL",
      "Un recurso de cómputo optimizado para ejecutar consultas SQL",
      "Una base de datos relacional tradicional",
      "Un catálogo de metadatos"
    ],
    correctAnswerIndex: 1,
    explanation: "Un SQL Warehouse es el recurso de cómputo (cluster) subyacente, optimizado específicamente para ejecutar consultas y dashboards en Databricks SQL.",
    category: "Arquitectura"
  }
];
