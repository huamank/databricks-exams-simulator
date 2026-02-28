import type { Question } from '../certifications';

export const mlAssociateTest1: Question[] = [
  {
    "id": "dml-t1-1",
    "text": "¿Qué herramienta en Databricks se utiliza para rastrear experimentos de machine learning?",
    "options": [
      "MLflow Tracking",
      "Delta Lake",
      "Unity Catalog",
      "Auto Loader"
    ],
    "correctAnswerIndex": 0,
    "explanation": "MLflow Tracking permite registrar parámetros, métricas y artefactos de los experimentos.",
    "category": "MLflow"
  },
  {
    "id": "dml-t1-2",
    "text": "¿Qué componente de MLflow se utiliza para empaquetar modelos y facilitar su despliegue?",
    "options": [
      "MLflow Tracking",
      "MLflow Projects",
      "MLflow Models",
      "MLflow Registry"
    ],
    "correctAnswerIndex": 2,
    "explanation": "MLflow Models define un formato estándar para empaquetar modelos.",
    "category": "MLflow"
  },
  {
    "id": "dml-t1-3",
    "text": "¿Qué componente permite versionar modelos y gestionar sus etapas (Staging, Production)?",
    "options": [
      "MLflow Tracking",
      "MLflow Registry",
      "MLflow Projects",
      "MLflow Artifacts"
    ],
    "correctAnswerIndex": 1,
    "explanation": "MLflow Registry permite gestionar versiones y stages de modelos.",
    "category": "MLflow"
  },
  {
    "id": "dml-t1-4",
    "text": "¿Qué método de MLflow se usa para registrar un modelo entrenado?",
    "options": [
      "mlflow.log_model()",
      "mlflow.register_model()",
      "mlflow.save_model()",
      "mlflow.track_model()"
    ],
    "correctAnswerIndex": 0,
    "explanation": "mlflow.log_model registra el modelo como artefacto del experimento.",
    "category": "MLflow"
  },
  {
    "id": "dml-t1-5",
    "text": "¿Qué permite mlflow.autolog()?",
    "options": [
      "Registrar manualmente métricas",
      "Registrar automáticamente parámetros y métricas",
      "Entrenar modelos automáticamente",
      "Desplegar modelos"
    ],
    "correctAnswerIndex": 1,
    "explanation": "mlflow.autolog registra automáticamente parámetros, métricas y modelos.",
    "category": "MLflow"
  },
  {
    "id": "dml-t1-6",
    "text": "¿Qué métrica es adecuada para un problema de clasificación binaria desbalanceada?",
    "options": [
      "Accuracy",
      "F1-score",
      "RMSE",
      "MAE"
    ],
    "correctAnswerIndex": 1,
    "explanation": "F1-score equilibra precisión y recall, útil en datasets desbalanceados.",
    "category": "Evaluación de Modelos"
  },
  {
    "id": "dml-t1-7",
    "text": "¿Qué métrica se usa comúnmente en regresión?",
    "options": [
      "Accuracy",
      "AUC",
      "RMSE",
      "Precision"
    ],
    "correctAnswerIndex": 2,
    "explanation": "RMSE mide el error promedio cuadrático en regresión.",
    "category": "Evaluación de Modelos"
  },
  {
    "id": "dml-t1-8",
    "text": "¿Qué técnica divide los datos en múltiples folds para validación?",
    "options": [
      "Train-test split",
      "Cross-validation",
      "Bootstrap",
      "Bagging"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cross-validation mejora la estimación del rendimiento del modelo.",
    "category": "Validación"
  },
  {
    "id": "dml-t1-9",
    "text": "¿Qué librería de Spark se utiliza para machine learning distribuido?",
    "options": [
      "SparkML",
      "MLlib (DataFrame API)",
      "scikit-learn",
      "TensorFlow"
    ],
    "correctAnswerIndex": 1,
    "explanation": "MLlib basado en DataFrames es la API recomendada.",
    "category": "Spark ML"
  },
  {
    "id": "dml-t1-10",
    "text": "¿Qué clase se usa para construir pipelines de ML en Spark?",
    "options": [
      "PipelineModel",
      "Pipeline",
      "Estimator",
      "Transformer"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pipeline permite encadenar transformaciones y modelos.",
    "category": "Spark ML"
  },
  {
    "id": "dml-t1-11",
    "text": "¿Qué tipo de objeto en Spark ML entrena un modelo?",
    "options": [
      "Transformer",
      "Estimator",
      "Pipeline",
      "Feature"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Un Estimator aprende a partir de los datos.",
    "category": "Spark ML"
  },
  {
    "id": "dml-t1-12",
    "text": "¿Qué tipo de objeto transforma los datos sin entrenar?",
    "options": [
      "Estimator",
      "Transformer",
      "Pipeline",
      "Model"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Transformer aplica transformaciones sin aprendizaje.",
    "category": "Spark ML"
  },
  {
    "id": "dml-t1-13",
    "text": "¿Qué técnica se usa para convertir variables categóricas en numéricas en Spark ML?",
    "options": [
      "StringIndexer",
      "OneHotEncoder",
      "Ambas",
      "VectorAssembler"
    ],
    "correctAnswerIndex": 2,
    "explanation": "StringIndexer + OneHotEncoder convierten variables categóricas.",
    "category": "Feature Engineering"
  },
  {
    "id": "dml-t1-14",
    "text": "¿Qué transforma múltiples columnas en un vector de features?",
    "options": [
      "VectorAssembler",
      "FeatureIndexer",
      "StringIndexer",
      "VectorIndexer"
    ],
    "correctAnswerIndex": 0,
    "explanation": "VectorAssembler combina columnas en un vector.",
    "category": "Feature Engineering"
  },
  {
    "id": "dml-t1-15",
    "text": "¿Qué algoritmo es para clasificación?",
    "options": [
      "LinearRegression",
      "LogisticRegression",
      "KMeans",
      "ALS"
    ],
    "correctAnswerIndex": 1,
    "explanation": "LogisticRegression se usa en clasificación.",
    "category": "Algoritmos"
  },
  {
    "id": "dml-t1-16",
    "text": "¿Qué algoritmo es no supervisado?",
    "options": [
      "RandomForest",
      "KMeans",
      "LogisticRegression",
      "GBTClassifier"
    ],
    "correctAnswerIndex": 1,
    "explanation": "KMeans es un algoritmo de clustering no supervisado.",
    "category": "Algoritmos"
  },
  {
    "id": "dml-t1-17",
    "text": "¿Qué técnica ayuda a evitar overfitting?",
    "options": [
      "Aumentar features",
      "Regularización",
      "Reducir datos",
      "Eliminar validación"
    ],
    "correctAnswerIndex": 1,
    "explanation": "La regularización penaliza modelos complejos.",
    "category": "Modelado"
  },
  {
    "id": "dml-t1-18",
    "text": "¿Qué técnica ajusta hiperparámetros automáticamente?",
    "options": [
      "Train-test split",
      "GridSearch",
      "Feature scaling",
      "Encoding"
    ],
    "correctAnswerIndex": 1,
    "explanation": "GridSearch prueba combinaciones de hiperparámetros.",
    "category": "Tuning"
  },
  {
    "id": "dml-t1-19",
    "text": "¿Qué clase en Spark ML permite tuning con validación cruzada?",
    "options": [
      "CrossValidator",
      "TrainValidator",
      "GridSearchCV",
      "Validator"
    ],
    "correctAnswerIndex": 0,
    "explanation": "CrossValidator realiza tuning con cross-validation.",
    "category": "Tuning"
  },
  {
    "id": "dml-t1-20",
    "text": "¿Qué métrica mide la capacidad de separación en clasificación?",
    "options": [
      "RMSE",
      "AUC",
      "MAE",
      "R2"
    ],
    "correctAnswerIndex": 1,
    "explanation": "AUC mide la capacidad de discriminación del modelo.",
    "category": "Evaluación de Modelos"
  },
  {
    "id": "dml-t1-21",
    "text": "¿Qué tipo de modelo es RandomForest?",
    "options": [
      "Modelo lineal",
      "Ensamble de árboles",
      "Red neuronal",
      "Modelo bayesiano"
    ],
    "correctAnswerIndex": 1,
    "explanation": "RandomForest combina múltiples árboles de decisión.",
    "category": "Algoritmos"
  },
  {
    "id": "dml-t1-22",
    "text": "¿Qué permite Feature Scaling?",
    "options": [
      "Eliminar nulos",
      "Normalizar rangos de variables",
      "Reducir filas",
      "Codificar categorías"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Feature scaling normaliza rangos de features.",
    "category": "Feature Engineering"
  },
  {
    "id": "dml-t1-23",
    "text": "¿Qué técnica reduce dimensionalidad?",
    "options": [
      "PCA",
      "KMeans",
      "RandomForest",
      "ALS"
    ],
    "correctAnswerIndex": 0,
    "explanation": "PCA reduce dimensionalidad manteniendo varianza.",
    "category": "Feature Engineering"
  },
  {
    "id": "dml-t1-24",
    "text": "¿Qué tipo de problema predice valores continuos?",
    "options": [
      "Clasificación",
      "Regresión",
      "Clustering",
      "Ranking"
    ],
    "correctAnswerIndex": 1,
    "explanation": "La regresión predice valores numéricos continuos.",
    "category": "Conceptos ML"
  },
  {
    "id": "dml-t1-25",
    "text": "¿Qué métrica penaliza más errores grandes?",
    "options": [
      "MAE",
      "RMSE",
      "R2",
      "Accuracy"
    ],
    "correctAnswerIndex": 1,
    "explanation": "RMSE penaliza más errores grandes.",
    "category": "Evaluación de Modelos"
  },
  {
    "id": "dml-t1-26",
    "text": "¿Qué algoritmo se usa para recomendación en Spark?",
    "options": [
      "ALS",
      "KMeans",
      "GBT",
      "PCA"
    ],
    "correctAnswerIndex": 0,
    "explanation": "ALS se usa en sistemas de recomendación.",
    "category": "Algoritmos"
  },
  {
    "id": "dml-t1-27",
    "text": "¿Qué permite MLflow Model Registry?",
    "options": [
      "Entrenar modelos",
      "Versionar modelos",
      "Crear features",
      "Ejecutar pipelines"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Permite versionar y promover modelos.",
    "category": "MLflow"
  },
  {
    "id": "dml-t1-28",
    "text": "¿Qué formato guarda modelos en MLflow?",
    "options": [
      "Pickle",
      "MLmodel",
      "Parquet",
      "JSON"
    ],
    "correctAnswerIndex": 1,
    "explanation": "MLflow usa el formato MLmodel.",
    "category": "MLflow"
  },
  {
    "id": "dml-t1-29",
    "text": "¿Qué permite reproducibilidad en experimentos?",
    "options": [
      "Guardar métricas",
      "Guardar parámetros y código",
      "Guardar solo el modelo",
      "Eliminar features"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Registrar parámetros, código y datos asegura reproducibilidad.",
    "category": "MLflow"
  },
  {
    "id": "dml-t1-30",
    "text": "¿Qué técnica maneja datos desbalanceados?",
    "options": [
      "Oversampling",
      "Undersampling",
      "Ambas",
      "Ninguna"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Ambas técnicas ayudan con datasets desbalanceados.",
    "category": "Data Preparation"
  },
  {
    "id": "dml-t1-31",
    "text": "¿Qué evalúa una matriz de confusión?",
    "options": [
      "Errores y aciertos de clasificación",
      "Errores de regresión",
      "Clustering",
      "Dimensionalidad"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Muestra TP, TN, FP y FN.",
    "category": "Evaluación de Modelos"
  },
  {
    "id": "dml-t1-32",
    "text": "¿Qué técnica selecciona las mejores features?",
    "options": [
      "Feature selection",
      "Encoding",
      "Scaling",
      "Shuffling"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Feature selection reduce ruido y mejora modelos.",
    "category": "Feature Engineering"
  },
  {
    "id": "dml-t1-33",
    "text": "¿Qué métrica mide proporción de positivos correctos?",
    "options": [
      "Recall",
      "Precision",
      "Accuracy",
      "F1"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Precision mide positivos correctos sobre predichos.",
    "category": "Evaluación de Modelos"
  },
  {
    "id": "dml-t1-34",
    "text": "¿Qué métrica mide positivos detectados sobre reales?",
    "options": [
      "Recall",
      "Precision",
      "Accuracy",
      "F1"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Recall mide detección de positivos reales.",
    "category": "Evaluación de Modelos"
  },
  {
    "id": "dml-t1-35",
    "text": "¿Qué es overfitting?",
    "options": [
      "Modelo generaliza bien",
      "Modelo aprende ruido",
      "Modelo es simple",
      "Modelo no converge"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Overfitting ocurre cuando el modelo memoriza datos.",
    "category": "Conceptos ML"
  },
  {
    "id": "dml-t1-36",
    "text": "¿Qué es underfitting?",
    "options": [
      "Modelo demasiado complejo",
      "Modelo no captura patrones",
      "Modelo perfecto",
      "Modelo con regularización"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Underfitting ocurre cuando el modelo es muy simple.",
    "category": "Conceptos ML"
  },
  {
    "id": "dml-t1-37",
    "text": "¿Qué algoritmo usa boosting?",
    "options": [
      "RandomForest",
      "GBT",
      "KMeans",
      "ALS"
    ],
    "correctAnswerIndex": 1,
    "explanation": "GBT usa boosting secuencial.",
    "category": "Algoritmos"
  },
  {
    "id": "dml-t1-38",
    "text": "¿Qué técnica divide datos en train y test?",
    "options": [
      "randomSplit",
      "splitData",
      "trainTest",
      "divide"
    ],
    "correctAnswerIndex": 0,
    "explanation": "randomSplit divide datasets.",
    "category": "Data Preparation"
  },
  {
    "id": "dml-t1-39",
    "text": "¿Qué permite Hyperopt en Databricks?",
    "options": [
      "Entrenar modelos",
      "Optimizar hiperparámetros",
      "Crear features",
      "Versionar modelos"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Hyperopt optimiza hiperparámetros.",
    "category": "Tuning"
  },
  {
    "id": "dml-t1-40",
    "text": "¿Qué tipo de aprendizaje usa etiquetas?",
    "options": [
      "Supervisado",
      "No supervisado",
      "Reforzado",
      "Semi-supervisado"
    ],
    "correctAnswerIndex": 0,
    "explanation": "El aprendizaje supervisado usa etiquetas.",
    "category": "Conceptos ML"
  },
  {
    "id": "dml-t1-41",
    "text": "¿Qué algoritmo es para clustering?",
    "options": [
      "KMeans",
      "LogisticRegression",
      "RandomForest",
      "GBT"
    ],
    "correctAnswerIndex": 0,
    "explanation": "KMeans agrupa datos en clusters.",
    "category": "Algoritmos"
  },
  {
    "id": "dml-t1-42",
    "text": "¿Qué representa R2?",
    "options": [
      "Error promedio",
      "Varianza explicada",
      "Precisión",
      "Recall"
    ],
    "correctAnswerIndex": 1,
    "explanation": "R2 mide varianza explicada en regresión.",
    "category": "Evaluación de Modelos"
  },
  {
    "id": "dml-t1-43",
    "text": "¿Qué tipo de modelo predice probabilidades?",
    "options": [
      "LogisticRegression",
      "LinearRegression",
      "KMeans",
      "ALS"
    ],
    "correctAnswerIndex": 0,
    "explanation": "LogisticRegression predice probabilidades.",
    "category": "Algoritmos"
  },
  {
    "id": "dml-t1-44",
    "text": "¿Qué permite mlflow.log_metric()?",
    "options": [
      "Guardar modelo",
      "Registrar métrica",
      "Registrar parámetro",
      "Registrar dataset"
    ],
    "correctAnswerIndex": 1,
    "explanation": "log_metric registra métricas.",
    "category": "MLflow"
  },
  {
    "id": "dml-t1-45",
    "text": "¿Qué permite mlflow.log_param()?",
    "options": [
      "Registrar métrica",
      "Registrar parámetro",
      "Registrar modelo",
      "Registrar feature"
    ],
    "correctAnswerIndex": 1,
    "explanation": "log_param registra hiperparámetros.",
    "category": "MLflow"
  },
  {
    "id": "dml-t1-46",
    "text": "¿Qué técnica normaliza datos entre 0 y 1?",
    "options": [
      "MinMaxScaler",
      "StandardScaler",
      "Normalizer",
      "VectorAssembler"
    ],
    "correctAnswerIndex": 0,
    "explanation": "MinMaxScaler escala datos a [0,1].",
    "category": "Feature Engineering"
  },
  {
    "id": "dml-t1-47",
    "text": "¿Qué técnica estandariza media 0 y varianza 1?",
    "options": [
      "MinMaxScaler",
      "StandardScaler",
      "Normalizer",
      "PCA"
    ],
    "correctAnswerIndex": 1,
    "explanation": "StandardScaler estandariza datos.",
    "category": "Feature Engineering"
  },
  {
    "id": "dml-t1-48",
    "text": "¿Qué método evalúa modelos en datos no vistos?",
    "options": [
      "Train set",
      "Test set",
      "Validation set",
      "Training loop"
    ],
    "correctAnswerIndex": 1,
    "explanation": "El test set evalúa generalización.",
    "category": "Validación"
  },
  {
    "id": "dml-t1-49",
    "text": "¿Qué permite Feature Store en Databricks?",
    "options": [
      "Entrenar modelos",
      "Gestionar features reutilizables",
      "Crear dashboards",
      "Ejecutar jobs"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Feature Store permite reutilizar features.",
    "category": "Feature Engineering"
  },
  {
    "id": "dml-t1-50",
    "text": "¿Qué permite el batch scoring?",
    "options": [
      "Entrenar modelos",
      "Predecir sobre grandes volúmenes",
      "Optimizar features",
      "Registrar métricas"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Batch scoring aplica modelos a grandes datasets.",
    "category": "Deployment"
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
