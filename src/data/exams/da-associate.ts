import type { Question } from '../certifications';

export const daAssociateTest1: Question[] = [
  {
    "id": "daa-t1-1",
    "text": "¿Qué herramienta de Databricks está diseñada específicamente para análisis SQL y dashboards?",
    "options": [
      "Databricks Jobs",
      "Databricks SQL",
      "Databricks Repos",
      "DBFS"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Databricks SQL permite ejecutar consultas, crear dashboards y compartir insights con usuarios de negocio.",
    "category": "Databricks SQL"
  },
  {
    "id": "daa-t1-2",
    "text": "¿Qué objeto se utiliza para guardar una consulta reutilizable en Databricks SQL?",
    "options": [
      "Notebook",
      "Query",
      "Dashboard",
      "Alert"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Las queries guardadas permiten reutilizar consultas en dashboards y análisis.",
    "category": "Databricks SQL"
  },
  {
    "id": "daa-t1-3",
    "text": "¿Qué tipo de warehouse se utiliza para ejecutar consultas en Databricks SQL?",
    "options": [
      "Cluster interactivo",
      "SQL Warehouse",
      "Job Cluster",
      "Single Node Cluster"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Databricks SQL utiliza SQL Warehouses optimizados para cargas analíticas.",
    "category": "Databricks SQL"
  },
  {
    "id": "daa-t1-4",
    "text": "¿Qué tipo de gráfico es mejor para mostrar tendencias en el tiempo?",
    "options": [
      "Pie chart",
      "Bar chart",
      "Line chart",
      "Table"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Los gráficos de líneas son ideales para visualizar tendencias temporales.",
    "category": "Visualización"
  },
  {
    "id": "daa-t1-5",
    "text": "¿Qué función SQL se utiliza para contar filas?",
    "options": [
      "SUM()",
      "COUNT()",
      "ROWS()",
      "TOTAL()"
    ],
    "correctAnswerIndex": 1,
    "explanation": "COUNT() devuelve el número de filas o valores no nulos.",
    "category": "SQL Básico"
  },
  {
    "id": "daa-t1-6",
    "text": "¿Qué cláusula se usa para filtrar resultados después de una agregación?",
    "options": [
      "WHERE",
      "GROUP BY",
      "HAVING",
      "ORDER BY"
    ],
    "correctAnswerIndex": 2,
    "explanation": "HAVING filtra resultados agregados.",
    "category": "SQL Agregaciones"
  },
  {
    "id": "daa-t1-7",
    "text": "¿Qué función permite reemplazar valores nulos en SQL?",
    "options": [
      "ISNULL()",
      "COALESCE()",
      "NVL()",
      "Todas las anteriores"
    ],
    "correctAnswerIndex": 3,
    "explanation": "COALESCE, NVL e ISNULL pueden manejar valores nulos.",
    "category": "SQL Funciones"
  },
  {
    "id": "daa-t1-8",
    "text": "¿Qué cláusula se usa para ordenar resultados?",
    "options": [
      "GROUP BY",
      "SORT BY",
      "ORDER BY",
      "ARRANGE BY"
    ],
    "correctAnswerIndex": 2,
    "explanation": "ORDER BY ordena los resultados.",
    "category": "SQL Básico"
  },
  {
    "id": "daa-t1-9",
    "text": "¿Qué tipo de join devuelve solo las filas coincidentes en ambas tablas?",
    "options": [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "FULL JOIN"
    ],
    "correctAnswerIndex": 2,
    "explanation": "INNER JOIN devuelve solo las coincidencias.",
    "category": "SQL Joins"
  },
  {
    "id": "daa-t1-10",
    "text": "¿Qué tipo de join devuelve todas las filas de la tabla izquierda?",
    "options": [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "CROSS JOIN"
    ],
    "correctAnswerIndex": 1,
    "explanation": "LEFT JOIN devuelve todas las filas de la tabla izquierda.",
    "category": "SQL Joins"
  },
  {
    "id": "daa-t1-11",
    "text": "¿Qué función calcula el promedio?",
    "options": [
      "AVG()",
      "MEAN()",
      "SUM()",
      "COUNT()"
    ],
    "correctAnswerIndex": 0,
    "explanation": "AVG() calcula el promedio.",
    "category": "SQL Agregaciones"
  },
  {
    "id": "daa-t1-12",
    "text": "¿Qué función devuelve la fecha actual?",
    "options": [
      "NOW()",
      "CURRENT_DATE()",
      "TODAY()",
      "DATE()"
    ],
    "correctAnswerIndex": 1,
    "explanation": "CURRENT_DATE() devuelve la fecha actual.",
    "category": "SQL Fechas"
  },
  {
    "id": "daa-t1-13",
    "text": "¿Qué función convierte un string en fecha?",
    "options": [
      "CAST()",
      "TO_DATE()",
      "PARSE_DATE()",
      "Todas las anteriores"
    ],
    "correctAnswerIndex": 3,
    "explanation": "CAST, TO_DATE y PARSE_DATE pueden convertir strings en fechas.",
    "category": "SQL Fechas"
  },
  {
    "id": "daa-t1-14",
    "text": "¿Qué función se usa para concatenar strings?",
    "options": [
      "CONCAT()",
      "JOIN()",
      "MERGE()",
      "APPEND()"
    ],
    "correctAnswerIndex": 0,
    "explanation": "CONCAT() une múltiples strings.",
    "category": "SQL Funciones"
  },
  {
    "id": "daa-t1-15",
    "text": "¿Qué operador se usa para buscar patrones en strings?",
    "options": [
      "=",
      "LIKE",
      "MATCH",
      "SEARCH"
    ],
    "correctAnswerIndex": 1,
    "explanation": "LIKE permite búsquedas con patrones.",
    "category": "SQL Funciones"
  },
  {
    "id": "daa-t1-16",
    "text": "¿Qué símbolo representa cualquier número de caracteres en LIKE?",
    "options": [
      "_",
      "%",
      "*",
      "#"
    ],
    "correctAnswerIndex": 1,
    "explanation": "% representa cualquier número de caracteres.",
    "category": "SQL Funciones"
  },
  {
    "id": "daa-t1-17",
    "text": "¿Qué símbolo representa un solo carácter en LIKE?",
    "options": [
      "%",
      "_",
      "*",
      "?"
    ],
    "correctAnswerIndex": 1,
    "explanation": "_ representa un solo carácter.",
    "category": "SQL Funciones"
  },
  {
    "id": "daa-t1-18",
    "text": "¿Qué cláusula limita el número de filas devueltas?",
    "options": [
      "TOP",
      "LIMIT",
      "FETCH",
      "ROWNUM"
    ],
    "correctAnswerIndex": 1,
    "explanation": "LIMIT restringe el número de filas.",
    "category": "SQL Básico"
  },
  {
    "id": "daa-t1-19",
    "text": "¿Qué función calcula la suma acumulada?",
    "options": [
      "SUM() OVER()",
      "CUMSUM()",
      "TOTAL()",
      "RUNSUM()"
    ],
    "correctAnswerIndex": 0,
    "explanation": "SUM() OVER() permite cálculos acumulados.",
    "category": "SQL Window Functions"
  },
  {
    "id": "daa-t1-20",
    "text": "¿Qué función asigna un ranking sin empates?",
    "options": [
      "RANK()",
      "DENSE_RANK()",
      "ROW_NUMBER()",
      "ORDER_RANK()"
    ],
    "correctAnswerIndex": 2,
    "explanation": "ROW_NUMBER asigna un número único por fila.",
    "category": "SQL Window Functions"
  },
  {
    "id": "daa-t1-21",
    "text": "¿Qué función asigna el mismo ranking a empates sin saltos?",
    "options": [
      "RANK()",
      "DENSE_RANK()",
      "ROW_NUMBER()",
      "NTILE()"
    ],
    "correctAnswerIndex": 1,
    "explanation": "DENSE_RANK no deja espacios en el ranking.",
    "category": "SQL Window Functions"
  },
  {
    "id": "daa-t1-22",
    "text": "¿Qué visualización es mejor para comparar proporciones?",
    "options": [
      "Line chart",
      "Pie chart",
      "Table",
      "Scatter plot"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pie charts muestran proporciones de un total.",
    "category": "Visualización"
  },
  {
    "id": "daa-t1-23",
    "text": "¿Qué visualización es mejor para comparar categorías?",
    "options": [
      "Bar chart",
      "Pie chart",
      "Line chart",
      "Area chart"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Los bar charts comparan categorías.",
    "category": "Visualización"
  },
  {
    "id": "daa-t1-24",
    "text": "¿Qué visualización muestra la relación entre dos variables numéricas?",
    "options": [
      "Bar chart",
      "Scatter plot",
      "Pie chart",
      "Table"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Scatter plot muestra correlaciones.",
    "category": "Visualización"
  },
  {
    "id": "daa-t1-25",
    "text": "¿Qué objeto permite crear alertas basadas en resultados de queries?",
    "options": [
      "Dashboard",
      "Query",
      "Alert",
      "Job"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Alerts notifican cuando una condición se cumple.",
    "category": "Databricks SQL"
  },
  {
    "id": "daa-t1-26",
    "text": "¿Qué permite compartir un dashboard con otros usuarios?",
    "options": [
      "Exportarlo a CSV",
      "Asignar permisos",
      "Convertirlo en query",
      "Moverlo a DBFS"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Los permisos permiten compartir dashboards.",
    "category": "Databricks SQL"
  },
  {
    "id": "daa-t1-27",
    "text": "¿Qué tipo de filtro permite seleccionar múltiples valores?",
    "options": [
      "Dropdown",
      "Text",
      "Date",
      "Range"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dropdown filters permiten múltiples selecciones.",
    "category": "Dashboards"
  },
  {
    "id": "daa-t1-28",
    "text": "¿Qué función devuelve el valor máximo?",
    "options": [
      "TOP()",
      "MAX()",
      "HIGH()",
      "LARGEST()"
    ],
    "correctAnswerIndex": 1,
    "explanation": "MAX() devuelve el valor máximo.",
    "category": "SQL Agregaciones"
  },
  {
    "id": "daa-t1-29",
    "text": "¿Qué función devuelve el valor mínimo?",
    "options": [
      "MIN()",
      "LOW()",
      "SMALL()",
      "BOTTOM()"
    ],
    "correctAnswerIndex": 0,
    "explanation": "MIN() devuelve el valor mínimo.",
    "category": "SQL Agregaciones"
  },
  {
    "id": "daa-t1-30",
    "text": "¿Qué cláusula agrupa filas con valores iguales?",
    "options": [
      "GROUP BY",
      "ORDER BY",
      "PARTITION BY",
      "CLUSTER BY"
    ],
    "correctAnswerIndex": 0,
    "explanation": "GROUP BY agrupa filas para agregaciones.",
    "category": "SQL Agregaciones"
  },
  {
    "id": "daa-t1-31",
    "text": "¿Qué permite PARTITION BY en funciones ventana?",
    "options": [
      "Ordenar datos",
      "Agrupar para agregaciones",
      "Definir particiones lógicas",
      "Filtrar datos"
    ],
    "correctAnswerIndex": 2,
    "explanation": "PARTITION BY define el grupo sobre el cual se aplica la función ventana.",
    "category": "SQL Window Functions"
  },
  {
    "id": "daa-t1-32",
    "text": "¿Qué cláusula ordena dentro de una función ventana?",
    "options": [
      "ORDER BY",
      "SORT BY",
      "GROUP BY",
      "CLUSTER BY"
    ],
    "correctAnswerIndex": 0,
    "explanation": "ORDER BY define el orden en funciones ventana.",
    "category": "SQL Window Functions"
  },
  {
    "id": "daa-t1-33",
    "text": "¿Qué tipo de gráfico es mejor para ver distribución de datos?",
    "options": [
      "Histogram",
      "Pie chart",
      "Bar chart",
      "Line chart"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Histogram muestra la distribución de valores.",
    "category": "Visualización"
  },
  {
    "id": "daa-t1-34",
    "text": "¿Qué función devuelve la longitud de un string?",
    "options": [
      "SIZE()",
      "LENGTH()",
      "COUNT()",
      "LENSTR()"
    ],
    "correctAnswerIndex": 1,
    "explanation": "LENGTH() devuelve la longitud del string.",
    "category": "SQL Funciones"
  },
  {
    "id": "daa-t1-35",
    "text": "¿Qué función convierte un string a mayúsculas?",
    "options": [
      "UPPER()",
      "CAPITAL()",
      "TOUPPER()",
      "UCASE()"
    ],
    "correctAnswerIndex": 0,
    "explanation": "UPPER() convierte el texto a mayúsculas.",
    "category": "SQL Funciones"
  },
  {
    "id": "daa-t1-36",
    "text": "¿Qué función convierte un string a minúsculas?",
    "options": [
      "LOWER()",
      "TOLOWER()",
      "SMALL()",
      "LCASE()"
    ],
    "correctAnswerIndex": 0,
    "explanation": "LOWER() convierte el texto a minúsculas.",
    "category": "SQL Funciones"
  },
  {
    "id": "daa-t1-37",
    "text": "¿Qué operador se usa para combinar múltiples condiciones?",
    "options": [
      "AND",
      "WITH",
      "PLUS",
      "COMBINE"
    ],
    "correctAnswerIndex": 0,
    "explanation": "AND combina condiciones lógicas.",
    "category": "SQL Básico"
  },
  {
    "id": "daa-t1-38",
    "text": "¿Qué operador se usa para evaluar múltiples valores posibles?",
    "options": [
      "BETWEEN",
      "IN",
      "LIKE",
      "MATCH"
    ],
    "correctAnswerIndex": 1,
    "explanation": "IN permite evaluar múltiples valores.",
    "category": "SQL Básico"
  },
  {
    "id": "daa-t1-39",
    "text": "¿Qué operador evalúa un rango de valores?",
    "options": [
      "IN",
      "BETWEEN",
      "LIKE",
      "RANGE"
    ],
    "correctAnswerIndex": 1,
    "explanation": "BETWEEN evalúa valores dentro de un rango.",
    "category": "SQL Básico"
  },
  {
    "id": "daa-t1-40",
    "text": "¿Qué tipo de gráfico muestra contribución acumulada (Pareto)?",
    "options": [
      "Line chart",
      "Bar + line chart",
      "Pie chart",
      "Scatter plot"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pareto combina barras y línea acumulada.",
    "category": "Visualización"
  },
  {
    "id": "daa-t1-41",
    "text": "¿Qué permite un dashboard en Databricks SQL?",
    "options": [
      "Ejecutar jobs",
      "Crear pipelines",
      "Visualizar múltiples queries",
      "Entrenar modelos"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Dashboards muestran múltiples visualizaciones.",
    "category": "Dashboards"
  },
  {
    "id": "daa-t1-42",
    "text": "¿Qué sucede al usar DISTINCT?",
    "options": [
      "Ordena los datos",
      "Elimina duplicados",
      "Agrupa datos",
      "Filtra nulos"
    ],
    "correctAnswerIndex": 1,
    "explanation": "DISTINCT elimina duplicados.",
    "category": "SQL Básico"
  },
  {
    "id": "daa-t1-43",
    "text": "¿Qué función devuelve el número de caracteres únicos?",
    "options": [
      "COUNT(DISTINCT columna)",
      "UNIQUE()",
      "DISTINCT()",
      "COUNTUNIQUE()"
    ],
    "correctAnswerIndex": 0,
    "explanation": "COUNT(DISTINCT) cuenta valores únicos.",
    "category": "SQL Agregaciones"
  },
  {
    "id": "daa-t1-44",
    "text": "¿Qué visualización permite ver tendencias acumuladas?",
    "options": [
      "Line chart",
      "Area chart",
      "Pie chart",
      "Table"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Area charts muestran acumulación en el tiempo.",
    "category": "Visualización"
  },
  {
    "id": "daa-t1-45",
    "text": "¿Qué función devuelve el primer valor en una ventana?",
    "options": [
      "FIRST_VALUE()",
      "TOP_VALUE()",
      "MIN()",
      "ROW_NUMBER()"
    ],
    "correctAnswerIndex": 0,
    "explanation": "FIRST_VALUE devuelve el primer valor en una ventana.",
    "category": "SQL Window Functions"
  },
  {
    "id": "daa-t1-46",
    "text": "¿Qué función devuelve el último valor en una ventana?",
    "options": [
      "LAST_VALUE()",
      "BOTTOM_VALUE()",
      "MAX()",
      "TAIL()"
    ],
    "correctAnswerIndex": 0,
    "explanation": "LAST_VALUE devuelve el último valor en la ventana.",
    "category": "SQL Window Functions"
  },
  {
    "id": "daa-t1-47",
    "text": "¿Qué permite NTILE()?",
    "options": [
      "Dividir datos en buckets",
      "Calcular ranking",
      "Ordenar datos",
      "Agrupar filas"
    ],
    "correctAnswerIndex": 0,
    "explanation": "NTILE divide los datos en grupos.",
    "category": "SQL Window Functions"
  },
  {
    "id": "daa-t1-48",
    "text": "¿Qué función permite obtener el valor anterior en una ventana?",
    "options": [
      "LAG()",
      "LEAD()",
      "PREV()",
      "SHIFT()"
    ],
    "correctAnswerIndex": 0,
    "explanation": "LAG devuelve el valor anterior.",
    "category": "SQL Window Functions"
  },
  {
    "id": "daa-t1-49",
    "text": "¿Qué función permite obtener el valor siguiente en una ventana?",
    "options": [
      "LAG()",
      "LEAD()",
      "NEXT()",
      "FORWARD()"
    ],
    "correctAnswerIndex": 1,
    "explanation": "LEAD devuelve el valor siguiente.",
    "category": "SQL Window Functions"
  },
  {
    "id": "daa-t1-50",
    "text": "¿Qué práctica mejora el rendimiento en dashboards?",
    "options": [
      "Usar SELECT *",
      "Reducir columnas consultadas",
      "Usar muchos joins",
      "Evitar filtros"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Seleccionar solo columnas necesarias reduce el I/O y mejora el rendimiento.",
    "category": "Buenas Prácticas"
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
