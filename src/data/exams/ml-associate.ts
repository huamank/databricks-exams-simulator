import type { Question } from '../certifications';

export const mlAssociateTest1: Question[] = [
  {
    id: 'mla-t1-1',
    text: "¿Qué componente de Databricks se utiliza para rastrear experimentos, registrar parámetros y guardar modelos de Machine Learning?",
    options: [
      "Delta Lake",
      "AutoML",
      "MLflow",
      "Feature Store"
    ],
    correctAnswerIndex: 2,
    explanation: "MLflow es una plataforma de código abierto integrada en Databricks para gestionar el ciclo de vida del ML, incluyendo experiment tracking, empaquetado de código y registro de modelos.",
    category: "MLflow"
  },
  {
    id: 'mla-t1-2',
    text: "¿Qué herramienta de Databricks genera automáticamente código base (notebooks) probando múltiples algoritmos para un problema de clasificación?",
    options: [
      "Databricks AutoML",
      "MLflow Model Registry",
      "Feature Store",
      "Model Serving"
    ],
    correctAnswerIndex: 0,
    explanation: "Databricks AutoML automatiza el proceso de aplicar machine learning a un dataset, probando varios algoritmos y generando notebooks editables con el código del mejor modelo.",
    category: "AutoML"
  }
];

export const mlAssociateTest2: Question[] = [
  {
    id: 'mla-t2-1',
    text: "¿Cuál es el propósito principal del Feature Store de Databricks?",
    options: [
      "Almacenar imágenes y videos para Deep Learning",
      "Descubrir, compartir y reutilizar características (features) de ML en toda la organización",
      "Ejecutar consultas SQL de forma interactiva",
      "Orquestar pipelines de datos"
    ],
    correctAnswerIndex: 1,
    explanation: "El Feature Store es un repositorio centralizado que permite a los data scientists encontrar y compartir features, garantizando que se use el mismo código para calcular features en entrenamiento y en inferencia.",
    category: "Feature Store"
  },
  {
    id: 'mla-t2-2',
    text: "¿Cómo se llama el proceso de aplicar un modelo entrenado a nuevos datos para generar predicciones en tiempo real a través de una API REST?",
    options: [
      "Batch Inference",
      "Model Serving",
      "Experiment Tracking",
      "Feature Engineering"
    ],
    correctAnswerIndex: 1,
    explanation: "Model Serving en Databricks expone modelos de MLflow como endpoints de API REST para inferencia en tiempo real de baja latencia.",
    category: "Despliegue de Modelos"
  }
];
