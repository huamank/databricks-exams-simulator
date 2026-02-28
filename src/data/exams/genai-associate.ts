import type { Question } from '../certifications';

export const genaiAssociateTest1: Question[] = [
  {
    id: 'genai-t1-1',
    text: "¿Qué arquitectura es fundamental para la mayoría de los Modelos de Lenguaje Grande (LLMs) modernos?",
    options: [
      "Redes Neuronales Convolucionales (CNNs)",
      "Transformers",
      "Máquinas de Soporte Vectorial (SVM)",
      "Árboles de Decisión"
    ],
    correctAnswerIndex: 1,
    explanation: "La arquitectura Transformer, introducida en el paper 'Attention Is All You Need', es la base de los LLMs modernos debido a su mecanismo de auto-atención que permite procesar secuencias de texto eficientemente.",
    category: "Fundamentos de LLMs"
  },
  {
    id: 'genai-t1-2',
    text: "En el contexto de aplicaciones de IA Generativa, ¿qué significa RAG?",
    options: [
      "Random Access Generation",
      "Retrieval-Augmented Generation",
      "Rapid Application Growth",
      "Recurrent Artificial Generation"
    ],
    correctAnswerIndex: 1,
    explanation: "Retrieval-Augmented Generation (RAG) es una técnica que mejora las respuestas de un LLM al recuperar información relevante de una base de conocimiento externa antes de generar la respuesta.",
    category: "Arquitecturas de Aplicaciones"
  }
];

export const genaiAssociateTest2: Question[] = [
  {
    id: 'genai-t2-1',
    text: "¿Qué herramienta en Databricks facilita la creación de bases de datos vectoriales para aplicaciones RAG?",
    options: [
      "Databricks SQL",
      "Vector Search",
      "Delta Live Tables",
      "AutoML"
    ],
    correctAnswerIndex: 1,
    explanation: "Databricks Vector Search es una base de datos vectorial serverless integrada en la plataforma que permite indexar y buscar representaciones vectoriales (embeddings) de forma eficiente para aplicaciones RAG.",
    category: "Herramientas Databricks"
  },
  {
    id: 'genai-t2-2',
    text: "¿Cuál es el propósito de usar 'Embeddings' en procesamiento de lenguaje natural?",
    options: [
      "Traducir texto de un idioma a otro",
      "Convertir texto en representaciones numéricas densas (vectores) que capturan el significado semántico",
      "Corregir errores ortográficos automáticamente",
      "Generar imágenes a partir de descripciones de texto"
    ],
    correctAnswerIndex: 1,
    explanation: "Los embeddings mapean palabras, frases o documentos a vectores de números reales, permitiendo que los algoritmos midan la similitud semántica entre textos calculando la distancia entre sus vectores.",
    category: "Procesamiento de Datos"
  }
];
