import type { Question } from '../certifications';

export const mlProfessionalTest1: Question[] = [
  {
    id: 'mlp-t1-1',
    text: "¿Qué estrategia es más adecuada para distribuir el entrenamiento de un modelo de Deep Learning muy grande en múltiples GPUs en Databricks?",
    options: [
      "Usar pandas y scikit-learn estándar",
      "Usar HorovodRunner o TorchDistributor",
      "Aumentar la memoria del driver node",
      "Usar Databricks SQL"
    ],
    correctAnswerIndex: 1,
    explanation: "HorovodRunner y TorchDistributor son APIs en Databricks que facilitan la migración de cargas de trabajo de deep learning de un solo nodo a entrenamiento distribuido en múltiples nodos/GPUs.",
    category: "Entrenamiento Distribuido"
  },
  {
    id: 'mlp-t1-2',
    text: "Al monitorear un modelo en producción, notas que el rendimiento predictivo ha disminuido significativamente con el tiempo, aunque el esquema de datos no ha cambiado. ¿Qué fenómeno es probable que esté ocurriendo?",
    options: [
      "Data Skew (Sesgo de datos)",
      "Model Drift / Data Drift",
      "Overfitting (Sobreajuste)",
      "Underfitting (Subajuste)"
    ],
    correctAnswerIndex: 1,
    explanation: "El Model Drift o Data Drift ocurre cuando las propiedades estadísticas de las variables independientes cambian con el tiempo, haciendo que el modelo entrenado previamente sea menos preciso.",
    category: "Monitoreo de Modelos"
  }
];

export const mlProfessionalTest2: Question[] = [
  {
    id: 'mlp-t2-1',
    text: "¿Qué técnica de MLflow permite gestionar explícitamente las transiciones de estado de un modelo (ej. Staging -> Production)?",
    options: [
      "MLflow Tracking",
      "MLflow Projects",
      "MLflow Model Registry",
      "MLflow Recipes"
    ],
    correctAnswerIndex: 2,
    explanation: "El Model Registry de MLflow es un almacén centralizado que gestiona el ciclo de vida completo de los modelos, incluyendo versionado y transiciones de etapa (None, Staging, Production, Archived).",
    category: "Gestión del Ciclo de Vida"
  },
  {
    id: 'mlp-t2-2',
    text: "Para optimizar la inferencia en batch de un modelo complejo usando Apache Spark, ¿qué enfoque es el más recomendado?",
    options: [
      "Usar un bucle for estándar en Python iterando sobre un DataFrame",
      "Convertir el modelo a una Pandas UDF (User Defined Function)",
      "Ejecutar la inferencia en el nodo driver exclusivamente",
      "Exportar los datos a CSV y procesarlos fuera de Databricks"
    ],
    correctAnswerIndex: 1,
    explanation: "Las Pandas UDFs (o Vectorized UDFs) permiten ejecutar inferencia de modelos en paralelo a través de los workers de Spark utilizando Apache Arrow para una transferencia de datos eficiente.",
    category: "Inferencia a Escala"
  }
];
