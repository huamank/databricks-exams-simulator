import type { Question } from '../certifications';

export const deProfessionalTest1: Question[] = [
  {
    id: 'dep-t1-1',
    text: "En Structured Streaming, ¿qué mecanismo garantiza el procesamiento 'exactly-once' al escribir en una tabla Delta?",
    options: [
      "Checkpointing y el log de transacciones de Delta Lake",
      "Usar triggers de procesamiento continuo",
      "Configurar el nivel de aislamiento a Serializable",
      "Habilitar auto-compaction en la tabla"
    ],
    correctAnswerIndex: 0,
    explanation: "Structured Streaming utiliza checkpoints para rastrear el progreso, y Delta Lake usa control de concurrencia optimista y un log de transacciones para garantizar que las escrituras sean idempotentes.",
    category: "Streaming Avanzado"
  },
  {
    id: 'dep-t1-2',
    text: "¿Cuál es la mejor estrategia para optimizar una tabla Delta que sufre de muchos archivos pequeños (small file problem)?",
    options: [
      "Ejecutar VACUUM cada hora",
      "Ejecutar OPTIMIZE con Z-ORDER",
      "Cambiar el formato a Parquet",
      "Aumentar el tamaño del cluster"
    ],
    correctAnswerIndex: 1,
    explanation: "El comando OPTIMIZE consolida archivos pequeños en archivos más grandes, y Z-ORDER co-localiza información relacionada en el mismo conjunto de archivos para acelerar las consultas.",
    category: "Optimización de Rendimiento"
  }
];

export const deProfessionalTest2: Question[] = [
  {
    id: 'dep-t2-1',
    text: "¿Qué herramienta de Databricks se utiliza para orquestar flujos de trabajo complejos con múltiples dependencias?",
    options: [
      "Databricks SQL",
      "Delta Live Tables",
      "Databricks Workflows (Jobs)",
      "MLflow"
    ],
    correctAnswerIndex: 2,
    explanation: "Databricks Workflows permite definir tareas (notebooks, scripts, dlt pipelines) y sus dependencias (DAGs) para orquestar pipelines de datos complejos.",
    category: "Orquestación"
  },
  {
    id: 'dep-t2-2',
    text: "¿Qué característica de seguridad permite restringir el acceso a filas específicas en una tabla basándose en la identidad del usuario?",
    options: [
      "Column-level security",
      "Row-level security (Filtros de fila)",
      "Data masking",
      "VPC Peering"
    ],
    correctAnswerIndex: 1,
    explanation: "Row-level security (RLS) en Unity Catalog permite aplicar filtros dinámicos para que los usuarios solo vean las filas a las que tienen acceso según sus permisos o grupos.",
    category: "Seguridad y Gobernanza"
  }
];
