import type { Question } from '../certifications';

export const genaiAssociateTest1: Question[] = [
  {
    "id": "gai-t1-1",
    "text": "¿Qué técnica permite mejorar las respuestas de un LLM usando datos propios sin reentrenar el modelo?",
    "options": [
      "Fine-tuning",
      "Prompt engineering",
      "Retrieval Augmented Generation (RAG)",
      "Transfer learning"
    ],
    "correctAnswerIndex": 2,
    "explanation": "RAG combina recuperación de documentos con generación para usar datos externos.",
    "category": "RAG"
  },
  {
    "id": "gai-t1-2",
    "text": "¿Qué componente se usa en Databricks para almacenar embeddings vectoriales?",
    "options": [
      "Delta Lake",
      "Vector Search",
      "MLflow",
      "Unity Catalog"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Databricks Vector Search permite almacenar y consultar embeddings.",
    "category": "Vector Search"
  },
  {
    "id": "gai-t1-3",
    "text": "¿Qué representa un embedding?",
    "options": [
      "Un modelo entrenado",
      "Una representación numérica de texto",
      "Un dataset etiquetado",
      "Un token especial"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Los embeddings convierten texto en vectores numéricos.",
    "category": "Embeddings"
  },
  {
    "id": "gai-t1-4",
    "text": "¿Qué métrica se usa comúnmente para medir similitud entre embeddings?",
    "options": [
      "RMSE",
      "Cosine similarity",
      "Accuracy",
      "F1-score"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cosine similarity mide la similitud entre vectores.",
    "category": "Embeddings"
  },
  {
    "id": "gai-t1-5",
    "text": "¿Qué técnica divide documentos largos en fragmentos más pequeños para RAG?",
    "options": [
      "Tokenization",
      "Chunking",
      "Indexing",
      "Batching"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Chunking divide documentos en partes manejables.",
    "category": "RAG"
  },
  {
    "id": "gai-t1-6",
    "text": "¿Qué paso ocurre después de recuperar documentos en un pipeline RAG?",
    "options": [
      "Fine-tuning",
      "Generación con el LLM",
      "Entrenamiento del modelo",
      "Vectorización"
    ],
    "correctAnswerIndex": 1,
    "explanation": "El LLM usa los documentos recuperados para generar la respuesta.",
    "category": "RAG"
  },
  {
    "id": "gai-t1-7",
    "text": "¿Qué permite MLflow en proyectos de GenAI?",
    "options": [
      "Almacenar vectores",
      "Registrar prompts, modelos y métricas",
      "Crear embeddings",
      "Entrenar LLMs"
    ],
    "correctAnswerIndex": 1,
    "explanation": "MLflow permite rastrear prompts, modelos y evaluaciones.",
    "category": "MLflow"
  },
  {
    "id": "gai-t1-8",
    "text": "¿Qué técnica mejora la calidad de las respuestas ajustando la instrucción del prompt?",
    "options": [
      "Fine-tuning",
      "Prompt engineering",
      "RAG",
      "Batch inference"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Prompt engineering optimiza las instrucciones al modelo.",
    "category": "Prompt Engineering"
  },
  {
    "id": "gai-t1-9",
    "text": "¿Qué parámetro controla la aleatoriedad en la generación de texto?",
    "options": [
      "max_tokens",
      "temperature",
      "top_k",
      "n_epochs"
    ],
    "correctAnswerIndex": 1,
    "explanation": "temperature controla la creatividad del modelo.",
    "category": "LLM Parameters"
  },
  {
    "id": "gai-t1-10",
    "text": "¿Qué parámetro limita la longitud de la respuesta generada?",
    "options": [
      "temperature",
      "max_tokens",
      "top_p",
      "batch_size"
    ],
    "correctAnswerIndex": 1,
    "explanation": "max_tokens limita la cantidad de tokens generados.",
    "category": "LLM Parameters"
  },
  {
    "id": "gai-t1-11",
    "text": "¿Qué técnica permite ajustar un LLM con datos específicos?",
    "options": [
      "RAG",
      "Fine-tuning",
      "Prompting",
      "Chunking"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Fine-tuning adapta el modelo a un dominio específico.",
    "category": "Fine-tuning"
  },
  {
    "id": "gai-t1-12",
    "text": "¿Qué formato se usa comúnmente para datasets de fine-tuning?",
    "options": [
      "JSONL",
      "Parquet",
      "CSV",
      "Delta"
    ],
    "correctAnswerIndex": 0,
    "explanation": "JSONL es común para pares prompt-respuesta.",
    "category": "Fine-tuning"
  },
  {
    "id": "gai-t1-13",
    "text": "¿Qué permite el contexto en un prompt?",
    "options": [
      "Reducir tokens",
      "Guiar la respuesta del modelo",
      "Entrenar el modelo",
      "Eliminar embeddings"
    ],
    "correctAnswerIndex": 1,
    "explanation": "El contexto mejora la relevancia de la respuesta.",
    "category": "Prompt Engineering"
  },
  {
    "id": "gai-t1-14",
    "text": "¿Qué problema ocurre cuando el modelo inventa información?",
    "options": [
      "Overfitting",
      "Hallucination",
      "Drift",
      "Leakage"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Las hallucinations son respuestas incorrectas inventadas.",
    "category": "LLM Risks"
  },
  {
    "id": "gai-t1-15",
    "text": "¿Qué técnica ayuda a reducir hallucinations en RAG?",
    "options": [
      "Aumentar temperature",
      "Usar fuentes recuperadas",
      "Reducir chunk size",
      "Eliminar embeddings"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Usar contexto recuperado reduce hallucinations.",
    "category": "RAG"
  },
  {
    "id": "gai-t1-16",
    "text": "¿Qué permite Databricks Model Serving en GenAI?",
    "options": [
      "Entrenar modelos",
      "Servir modelos como APIs",
      "Crear embeddings",
      "Registrar datasets"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Model Serving expone modelos como endpoints.",
    "category": "Deployment"
  },
  {
    "id": "gai-t1-17",
    "text": "¿Qué técnica mejora búsqueda semántica?",
    "options": [
      "LIKE",
      "Embeddings",
      "Hashing",
      "Indexing"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Embeddings capturan significado semántico.",
    "category": "Vector Search"
  },
  {
    "id": "gai-t1-18",
    "text": "¿Qué ocurre en el paso de indexación en RAG?",
    "options": [
      "Se entrena el LLM",
      "Se generan embeddings y se almacenan",
      "Se ejecuta el prompt",
      "Se valida el modelo"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Indexación genera y almacena embeddings.",
    "category": "RAG"
  },
  {
    "id": "gai-t1-19",
    "text": "¿Qué tipo de búsqueda devuelve documentos similares a un embedding?",
    "options": [
      "Full-text search",
      "Vector search",
      "Keyword search",
      "SQL search"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Vector search encuentra similitud semántica.",
    "category": "Vector Search"
  },
  {
    "id": "gai-t1-20",
    "text": "¿Qué técnica evalúa calidad de respuestas de LLM?",
    "options": [
      "Accuracy",
      "Human evaluation",
      "RMSE",
      "Recall"
    ],
    "correctAnswerIndex": 1,
    "explanation": "La evaluación humana mide calidad en texto.",
    "category": "Evaluación GenAI"
  },
  {
    "id": "gai-t1-21",
    "text": "¿Qué métrica mide relevancia en recuperación de documentos?",
    "options": [
      "Precision@k",
      "RMSE",
      "MAE",
      "R2"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Precision@k evalúa relevancia en retrieval.",
    "category": "Evaluación RAG"
  },
  {
    "id": "gai-t1-22",
    "text": "¿Qué técnica reduce tamaño de contexto?",
    "options": [
      "Chunking",
      "Summarization",
      "Embedding",
      "Tokenization"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Summarization reduce el contexto.",
    "category": "Context Management"
  },
  {
    "id": "gai-t1-23",
    "text": "¿Qué permite top_p?",
    "options": [
      "Limitar tokens",
      "Controlar diversidad de tokens",
      "Reducir embeddings",
      "Aumentar contexto"
    ],
    "correctAnswerIndex": 1,
    "explanation": "top_p controla muestreo de probabilidad acumulada.",
    "category": "LLM Parameters"
  },
  {
    "id": "gai-t1-24",
    "text": "¿Qué técnica usa ejemplos en el prompt?",
    "options": [
      "Zero-shot",
      "One-shot",
      "Few-shot",
      "Fine-tuning"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Few-shot incluye ejemplos.",
    "category": "Prompt Engineering"
  },
  {
    "id": "gai-t1-25",
    "text": "¿Qué es zero-shot prompting?",
    "options": [
      "Usar muchos ejemplos",
      "No usar ejemplos",
      "Entrenar modelo",
      "Reducir tokens"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Zero-shot no incluye ejemplos.",
    "category": "Prompt Engineering"
  },
  {
    "id": "gai-t1-26",
    "text": "¿Qué permite Unity Catalog en GenAI?",
    "options": [
      "Entrenar LLM",
      "Gobernanza de datos y modelos",
      "Crear embeddings",
      "Servir modelos"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Unity Catalog gestiona acceso y gobernanza.",
    "category": "Gobernanza"
  },
  {
    "id": "gai-t1-27",
    "text": "¿Qué riesgo implica enviar datos sensibles a un LLM externo?",
    "options": [
      "Overfitting",
      "Data leakage",
      "Underfitting",
      "Drift"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Data leakage expone información sensible.",
    "category": "LLM Risks"
  },
  {
    "id": "gai-t1-28",
    "text": "¿Qué técnica protege datos sensibles en prompts?",
    "options": [
      "Masking",
      "Chunking",
      "Tokenization",
      "Embedding"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Masking oculta información sensible.",
    "category": "Seguridad"
  },
  {
    "id": "gai-t1-29",
    "text": "¿Qué técnica mejora latencia en RAG?",
    "options": [
      "Reducir embeddings",
      "Cachear resultados",
      "Aumentar chunk size",
      "Usar JSON"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Caching reduce tiempo de respuesta.",
    "category": "Optimización"
  },
  {
    "id": "gai-t1-30",
    "text": "¿Qué permite batch inference en GenAI?",
    "options": [
      "Entrenar modelos",
      "Procesar múltiples prompts",
      "Reducir embeddings",
      "Indexar documentos"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Batch inference procesa múltiples solicitudes.",
    "category": "Deployment"
  },
  {
    "id": "gai-t1-31",
    "text": "¿Qué tipo de modelo genera texto?",
    "options": [
      "Encoder-only",
      "Decoder-only",
      "CNN",
      "RNN"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Los modelos decoder generan texto.",
    "category": "LLM Concepts"
  },
  {
    "id": "gai-t1-32",
    "text": "¿Qué arquitectura usan los LLM?",
    "options": [
      "CNN",
      "RNN",
      "Transformers",
      "SVM"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Los LLM se basan en Transformers.",
    "category": "LLM Concepts"
  },
  {
    "id": "gai-t1-33",
    "text": "¿Qué token indica fin de secuencia?",
    "options": [
      "BOS",
      "EOS",
      "PAD",
      "CLS"
    ],
    "correctAnswerIndex": 1,
    "explanation": "EOS indica fin de texto.",
    "category": "LLM Concepts"
  },
  {
    "id": "gai-t1-34",
    "text": "¿Qué permite truncation?",
    "options": [
      "Reducir embeddings",
      "Limitar longitud de entrada",
      "Aumentar tokens",
      "Optimizar modelo"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Truncation limita longitud del prompt.",
    "category": "Context Management"
  },
  {
    "id": "gai-t1-35",
    "text": "¿Qué técnica mejora calidad del contexto recuperado?",
    "options": [
      "Re-ranking",
      "Tokenization",
      "Chunking",
      "Masking"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Re-ranking ordena documentos por relevancia.",
    "category": "RAG"
  },
  {
    "id": "gai-t1-36",
    "text": "¿Qué permite un system prompt?",
    "options": [
      "Entrenar modelo",
      "Definir comportamiento del LLM",
      "Reducir tokens",
      "Crear embeddings"
    ],
    "correctAnswerIndex": 1,
    "explanation": "System prompt define el rol del modelo.",
    "category": "Prompt Engineering"
  },
  {
    "id": "gai-t1-37",
    "text": "¿Qué técnica divide texto en tokens?",
    "options": [
      "Chunking",
      "Tokenization",
      "Embedding",
      "Indexing"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tokenization divide texto en unidades.",
    "category": "LLM Concepts"
  },
  {
    "id": "gai-t1-38",
    "text": "¿Qué permite streaming responses?",
    "options": [
      "Reducir embeddings",
      "Mostrar respuesta incremental",
      "Entrenar modelo",
      "Indexar documentos"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Streaming muestra texto en tiempo real.",
    "category": "Deployment"
  },
  {
    "id": "gai-t1-39",
    "text": "¿Qué técnica evita prompts muy largos?",
    "options": [
      "Chunking",
      "Summarization",
      "RAG",
      "Embedding"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Summarization reduce longitud.",
    "category": "Context Management"
  },
  {
    "id": "gai-t1-40",
    "text": "¿Qué técnica evalúa seguridad del modelo?",
    "options": [
      "Red teaming",
      "Cross-validation",
      "Grid search",
      "Fine-tuning"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Red teaming prueba vulnerabilidades.",
    "category": "Seguridad"
  },
  {
    "id": "gai-t1-41",
    "text": "¿Qué técnica detecta toxicidad en texto?",
    "options": [
      "Moderation model",
      "Embedding",
      "Chunking",
      "Indexing"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Moderation models detectan contenido inapropiado.",
    "category": "Seguridad"
  },
  {
    "id": "gai-t1-42",
    "text": "¿Qué permite un guardrail?",
    "options": [
      "Entrenar modelo",
      "Restringir respuestas del LLM",
      "Crear embeddings",
      "Reducir tokens"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Guardrails controlan comportamiento.",
    "category": "Seguridad"
  },
  {
    "id": "gai-t1-43",
    "text": "¿Qué técnica mejora grounding en respuestas?",
    "options": [
      "RAG",
      "Fine-tuning",
      "Chunking",
      "Masking"
    ],
    "correctAnswerIndex": 0,
    "explanation": "RAG usa contexto real.",
    "category": "RAG"
  },
  {
    "id": "gai-t1-44",
    "text": "¿Qué permite evaluar múltiples prompts?",
    "options": [
      "A/B testing",
      "Chunking",
      "Embedding",
      "Indexing"
    ],
    "correctAnswerIndex": 0,
    "explanation": "A/B testing compara prompts.",
    "category": "Evaluación GenAI"
  },
  {
    "id": "gai-t1-45",
    "text": "¿Qué tipo de modelo genera embeddings?",
    "options": [
      "Encoder",
      "Decoder",
      "Classifier",
      "Regressor"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Los encoders generan embeddings.",
    "category": "Embeddings"
  },
  {
    "id": "gai-t1-46",
    "text": "¿Qué técnica usa documentos externos sin reentrenar?",
    "options": [
      "Fine-tuning",
      "RAG",
      "Prompting",
      "Chunking"
    ],
    "correctAnswerIndex": 1,
    "explanation": "RAG usa datos externos dinámicamente.",
    "category": "RAG"
  },
  {
    "id": "gai-t1-47",
    "text": "¿Qué permite reducir costo de inferencia?",
    "options": [
      "Usar modelos más pequeños",
      "Aumentar temperature",
      "Aumentar max_tokens",
      "Eliminar caching"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Modelos pequeños reducen costo.",
    "category": "Optimización"
  },
  {
    "id": "gai-t1-48",
    "text": "¿Qué técnica mejora throughput?",
    "options": [
      "Batching",
      "Chunking",
      "Tokenization",
      "Masking"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Batching procesa múltiples solicitudes.",
    "category": "Optimización"
  },
  {
    "id": "gai-t1-49",
    "text": "¿Qué permite evaluar coherencia en texto generado?",
    "options": [
      "BLEU",
      "RMSE",
      "R2",
      "AUC"
    ],
    "correctAnswerIndex": 0,
    "explanation": "BLEU evalúa calidad en texto.",
    "category": "Evaluación GenAI"
  },
  {
    "id": "gai-t1-50",
    "text": "¿Qué técnica usa el historial de conversación?",
    "options": [
      "Memory",
      "Embedding",
      "Chunking",
      "Indexing"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Memory mantiene contexto conversacional.",
    "category": "Conversational AI"
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
