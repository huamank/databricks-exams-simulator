export interface Question {
  id: number | string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  {
    "id": "dep-t1-1",
    "text": "¿Cuál es el formato de almacenamiento subyacente utilizado por Delta Lake?",
    "options": [
      "Avro",
      "Parquet",
      "ORC",
      "CSV"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Delta Lake almacena los datos físicamente en formato Parquet y agrega un log de transacciones para gestión ACID.",
    "category": "Delta Lake Fundamentos"
  },
  {
    "id": "dep-t1-2",
    "text": "¿Qué comando permite ver el historial de operaciones realizadas en una tabla Delta?",
    "options": [
      "DESCRIBE TABLE",
      "DESCRIBE HISTORY",
      "SHOW TRANSACTIONS",
      "SHOW LOG"
    ],
    "correctAnswerIndex": 1,
    "explanation": "DESCRIBE HISTORY muestra las operaciones realizadas sobre una tabla Delta, incluyendo MERGE, UPDATE y DELETE.",
    "category": "Delta Lake Fundamentos"
  },
  {
    "id": "dep-t1-3",
    "text": "¿Qué propiedad permite habilitar el versionado de datos en Delta Lake?",
    "options": [
      "Time Travel",
      "Checkpointing",
      "Auto Optimize",
      "Schema Evolution"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Time Travel permite consultar versiones anteriores de una tabla Delta usando VERSION AS OF o TIMESTAMP AS OF.",
    "category": "Delta Lake Fundamentos"
  },
  {
    "id": "dep-t1-4",
    "text": "¿Qué operación permite insertar, actualizar y eliminar datos en una sola instrucción en Delta Lake?",
    "options": [
      "UPSERT",
      "MERGE INTO",
      "INSERT OVERWRITE",
      "UPDATE JOIN"
    ],
    "correctAnswerIndex": 1,
    "explanation": "MERGE INTO permite realizar operaciones de tipo upsert y delete de manera atómica.",
    "category": "Delta Lake DML"
  },
  {
    "id": "dep-t1-5",
    "text": "¿Qué comando elimina archivos antiguos que ya no son necesarios en una tabla Delta?",
    "options": [
      "CLEAN",
      "PURGE",
      "VACUUM",
      "OPTIMIZE"
    ],
    "correctAnswerIndex": 2,
    "explanation": "VACUUM elimina archivos antiguos que ya no están referenciados en el log de transacciones.",
    "category": "Delta Lake Mantenimiento"
  },
  {
    "id": "dep-t1-6",
    "text": "¿Cuál es el propósito principal del log de transacciones en Delta Lake?",
    "options": [
      "Mejorar la compresión de archivos",
      "Habilitar operaciones ACID",
      "Reducir el tamaño de los datos",
      "Aumentar el paralelismo"
    ],
    "correctAnswerIndex": 1,
    "explanation": "El log de transacciones permite control de concurrencia optimista y garantiza operaciones ACID.",
    "category": "Delta Lake Fundamentos"
  },
  {
    "id": "dep-t1-7",
    "text": "¿Qué sucede si se escribe un DataFrame con un esquema diferente en una tabla Delta sin habilitar schema evolution?",
    "options": [
      "Se ignoran las columnas nuevas",
      "Se produce un error",
      "Se agregan automáticamente",
      "Se sobrescriben los datos"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Delta Lake lanza un error si el esquema no coincide y no está habilitado mergeSchema o autoMerge.",
    "category": "Delta Lake Esquemas"
  },
  {
    "id": "dep-t1-8",
    "text": "¿Qué opción permite agregar nuevas columnas automáticamente durante una escritura en Delta?",
    "options": [
      "overwriteSchema",
      "mergeSchema",
      "autoOptimize",
      "schemaCheck"
    ],
    "correctAnswerIndex": 1,
    "explanation": "mergeSchema permite agregar nuevas columnas al esquema existente.",
    "category": "Delta Lake Esquemas"
  },
  {
    "id": "dep-t1-9",
    "text": "¿Qué comando mejora el rendimiento de lectura al reorganizar físicamente los datos en archivos más grandes?",
    "options": [
      "VACUUM",
      "OPTIMIZE",
      "CACHE",
      "REINDEX"
    ],
    "correctAnswerIndex": 1,
    "explanation": "OPTIMIZE compacta archivos pequeños en archivos más grandes para mejorar el rendimiento.",
    "category": "Optimización de Rendimiento"
  },
  {
    "id": "dep-t1-10",
    "text": "¿Qué técnica permite co-localizar datos relacionados en la misma región de almacenamiento?",
    "options": [
      "Partitioning",
      "Z-ORDER",
      "Bucketing",
      "Broadcast Join"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Z-ORDER organiza los datos para mejorar el pruning en consultas filtradas.",
    "category": "Optimización de Rendimiento"
  },
  {
    "id": "dep-t1-11",
    "text": "¿Cuál es el comportamiento por defecto de un DataFrame.write en modo error?",
    "options": [
      "Sobrescribe la tabla",
      "Agrega datos",
      "Falla si la tabla existe",
      "Ignora la operación"
    ],
    "correctAnswerIndex": 2,
    "explanation": "El modo error (default) falla si la tabla o ruta ya existe.",
    "category": "DataFrame API"
  },
  {
    "id": "dep-t1-12",
    "text": "¿Qué método se usa para eliminar filas duplicadas en un DataFrame?",
    "options": [
      "distinct()",
      "dropDuplicates()",
      "unique()",
      "removeDuplicates()"
    ],
    "correctAnswerIndex": 1,
    "explanation": "dropDuplicates permite eliminar duplicados en columnas específicas o en todo el DataFrame.",
    "category": "DataFrame Transformaciones"
  },
  {
    "id": "dep-t1-13",
    "text": "¿Qué tipo de join es más eficiente cuando una de las tablas es pequeña?",
    "options": [
      "Shuffle Join",
      "Sort Merge Join",
      "Broadcast Join",
      "Cross Join"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Broadcast Join envía la tabla pequeña a todos los nodos evitando el shuffle.",
    "category": "Optimización de Spark"
  },
  {
    "id": "dep-t1-14",
    "text": "¿Qué función se usa para leer datos en formato JSON en Spark?",
    "options": [
      "spark.read.json()",
      "spark.read.format('json')",
      "Ambas son correctas",
      "spark.load.json()"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Se puede usar tanto spark.read.json() como spark.read.format('json').",
    "category": "Ingesta de Datos"
  },
  {
    "id": "dep-t1-15",
    "text": "¿Qué transformación devuelve un nuevo DataFrame sin modificar el original?",
    "options": [
      "Acción",
      "Transformación",
      "Checkpoint",
      "Cache"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Las transformaciones son inmutables y devuelven un nuevo DataFrame.",
    "category": "Conceptos de Spark"
  },
  {
    "id": "dep-t1-16",
    "text": "¿Cuál es una acción en Spark?",
    "options": [
      "select()",
      "filter()",
      "count()",
      "withColumn()"
    ],
    "correctAnswerIndex": 2,
    "explanation": "count() es una acción porque dispara la ejecución del DAG.",
    "category": "Conceptos de Spark"
  },
  {
    "id": "dep-t1-17",
    "text": "¿Qué sucede cuando se aplica cache() a un DataFrame?",
    "options": [
      "Se guarda en disco únicamente",
      "Se guarda en memoria para reutilización",
      "Se elimina el linaje",
      "Se optimiza el shuffle"
    ],
    "correctAnswerIndex": 1,
    "explanation": "cache() almacena el DataFrame en memoria para reutilizarlo sin recalcular.",
    "category": "Optimización de Spark"
  },
  {
    "id": "dep-t1-18",
    "text": "¿Qué comando permite crear una tabla Delta administrada en SQL?",
    "options": [
      "CREATE TABLE USING DELTA",
      "CREATE DELTA TABLE",
      "CREATE TABLE FORMAT DELTA",
      "CREATE MANAGED DELTA TABLE"
    ],
    "correctAnswerIndex": 0,
    "explanation": "CREATE TABLE USING DELTA crea una tabla Delta administrada.",
    "category": "SQL en Databricks"
  },
  {
    "id": "dep-t1-19",
    "text": "¿Qué ventaja tiene Auto Loader frente a spark.read tradicional?",
    "options": [
      "Soporta solo archivos CSV",
      "Detecta automáticamente nuevos archivos",
      "Es más lento",
      "No requiere esquema"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Auto Loader detecta automáticamente nuevos archivos en almacenamiento en la nube.",
    "category": "Ingesta de Datos"
  },
  {
    "id": "dep-t1-20",
    "text": "¿Qué modo de salida en Structured Streaming escribe solo las filas nuevas?",
    "options": [
      "Complete",
      "Append",
      "Update",
      "Overwrite"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Append escribe solo los nuevos registros.",
    "category": "Streaming"
  },
  {
    "id": "dep-t1-21",
    "text": "¿Qué modo de salida en Structured Streaming actualiza resultados agregados?",
    "options": [
      "Append",
      "Update",
      "Complete",
      "Delta"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Update escribe solo las filas agregadas que cambiaron.",
    "category": "Streaming"
  },
  {
    "id": "dep-t1-22",
    "text": "¿Qué componente de Databricks permite programar workflows?",
    "options": [
      "Clusters",
      "Jobs",
      "Repos",
      "Notebooks"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Databricks Jobs permite orquestar y programar pipelines.",
    "category": "Orquestación"
  },
  {
    "id": "dep-t1-23",
    "text": "¿Qué tipo de cluster se crea automáticamente para ejecutar un job y luego se elimina?",
    "options": [
      "All-purpose",
      "Job cluster",
      "High concurrency",
      "Single node"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Los job clusters se crean para la ejecución del job y se eliminan al finalizar.",
    "category": "Clusters"
  },
  {
    "id": "dep-t1-24",
    "text": "¿Qué característica permite ejecutar notebooks con control de versiones?",
    "options": [
      "Repos",
      "Jobs",
      "DBFS",
      "Workspace"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Databricks Repos permite integración con Git para versionamiento.",
    "category": "Colaboración"
  },
  {
    "id": "dep-t1-25",
    "text": "¿Qué comando SQL permite eliminar registros específicos en Delta Lake?",
    "options": [
      "REMOVE FROM",
      "DELETE FROM",
      "DROP ROW",
      "TRUNCATE"
    ],
    "correctAnswerIndex": 1,
    "explanation": "DELETE FROM permite eliminar filas con una condición.",
    "category": "Delta Lake DML"
  },
  {
    "id": "dep-t1-26",
    "text": "¿Qué comando actualiza registros en una tabla Delta?",
    "options": [
      "MODIFY",
      "UPDATE",
      "CHANGE",
      "SET ROW"
    ],
    "correctAnswerIndex": 1,
    "explanation": "UPDATE permite modificar filas en Delta Lake.",
    "category": "Delta Lake DML"
  },
  {
    "id": "dep-t1-27",
    "text": "¿Qué ventaja tiene Delta Lake sobre Parquet?",
    "options": [
      "Mayor compresión",
      "Soporte ACID",
      "Menor tamaño",
      "Mayor paralelismo"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Delta Lake agrega soporte ACID sobre archivos Parquet.",
    "category": "Delta Lake Fundamentos"
  },
  {
    "id": "dep-t1-28",
    "text": "¿Qué permite la opción overwriteSchema en Delta?",
    "options": [
      "Agregar columnas",
      "Eliminar columnas",
      "Reemplazar completamente el esquema",
      "Actualizar filas"
    ],
    "correctAnswerIndex": 2,
    "explanation": "overwriteSchema reemplaza el esquema existente con uno nuevo.",
    "category": "Delta Lake Esquemas"
  },
  {
    "id": "dep-t1-29",
    "text": "¿Qué sucede cuando se usa repartition() en un DataFrame?",
    "options": [
      "Reduce particiones",
      "Aumenta o redistribuye particiones",
      "Elimina particiones",
      "Cambia el formato"
    ],
    "correctAnswerIndex": 1,
    "explanation": "repartition redistribuye los datos en nuevas particiones con shuffle.",
    "category": "Optimización de Spark"
  },
  {
    "id": "dep-t1-30",
    "text": "¿Qué operación evita el shuffle al reducir particiones?",
    "options": [
      "repartition()",
      "coalesce()",
      "partitionBy()",
      "bucketBy()"
    ],
    "correctAnswerIndex": 1,
    "explanation": "coalesce reduce particiones sin shuffle cuando es posible.",
    "category": "Optimización de Spark"
  },
  {
    "id": "dep-t1-31",
    "text": "¿Qué es el shuffle en Spark?",
    "options": [
      "Movimiento de datos entre particiones",
      "Compresión de archivos",
      "Cache en memoria",
      "Ordenamiento local"
    ],
    "correctAnswerIndex": 0,
    "explanation": "El shuffle implica redistribuir datos entre nodos, lo cual es costoso.",
    "category": "Optimización de Spark"
  },
  {
    "id": "dep-t1-32",
    "text": "¿Qué comando permite registrar un DataFrame como vista temporal?",
    "options": [
      "createTempView()",
      "registerTempView()",
      "createOrReplaceTempView()",
      "Todas las anteriores"
    ],
    "correctAnswerIndex": 2,
    "explanation": "createOrReplaceTempView crea o reemplaza una vista temporal.",
    "category": "SQL en Databricks"
  },
  {
    "id": "dep-t1-33",
    "text": "¿Qué tipo de vista persiste solo durante la sesión actual?",
    "options": [
      "Vista global",
      "Vista temporal",
      "Vista materializada",
      "Vista Delta"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Las vistas temporales existen solo durante la sesión.",
    "category": "SQL en Databricks"
  },
  {
    "id": "dep-t1-34",
    "text": "¿Qué comando permite consultar una versión anterior de una tabla Delta?",
    "options": [
      "SELECT VERSION",
      "SELECT * VERSION AS OF",
      "SELECT * FROM tabla VERSION AS OF",
      "SELECT HISTORY"
    ],
    "correctAnswerIndex": 2,
    "explanation": "VERSION AS OF permite consultar versiones anteriores.",
    "category": "Delta Lake Time Travel"
  },
  {
    "id": "dep-t1-35",
    "text": "¿Qué característica permite aplicar filtros antes de leer archivos completos?",
    "options": [
      "Z-ORDER",
      "Partition pruning",
      "Broadcast",
      "Cache"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Partition pruning evita leer particiones innecesarias.",
    "category": "Optimización de Rendimiento"
  },
  {
    "id": "dep-t1-36",
    "text": "¿Qué formato es recomendado para ingesta incremental con Auto Loader?",
    "options": [
      "CSV",
      "JSON",
      "Parquet",
      "Binary"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Parquet es columnar y eficiente para ingesta incremental.",
    "category": "Ingesta de Datos"
  },
  {
    "id": "dep-t1-37",
    "text": "¿Qué tipo de checkpoint se usa en Structured Streaming?",
    "options": [
      "Directorio de checkpoint",
      "Tabla checkpoint",
      "Archivo checkpoint",
      "Memoria checkpoint"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Structured Streaming usa un directorio de checkpoint en almacenamiento.",
    "category": "Streaming"
  },
  {
    "id": "dep-t1-38",
    "text": "¿Qué sucede si se elimina el directorio de checkpoint?",
    "options": [
      "El stream continúa normalmente",
      "Se reinicia desde cero",
      "Se pierde el esquema",
      "Se optimiza el rendimiento"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Se pierde el progreso y el stream se procesa desde el inicio.",
    "category": "Streaming"
  },
  {
    "id": "dep-t1-39",
    "text": "¿Qué método permite escribir un stream en una tabla Delta?",
    "options": [
      "writeStream.format('delta')",
      "write.format('delta')",
      "stream.write()",
      "saveAsTable()"
    ],
    "correctAnswerIndex": 0,
    "explanation": "writeStream.format('delta') permite escribir streaming en Delta.",
    "category": "Streaming"
  },
  {
    "id": "dep-t1-40",
    "text": "¿Qué función permite convertir una columna en tipo timestamp?",
    "options": [
      "to_date()",
      "cast('timestamp')",
      "to_timestamp()",
      "Ambas b y c"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Se puede usar cast('timestamp') o to_timestamp().",
    "category": "Transformaciones"
  },
  {
    "id": "dep-t1-41",
    "text": "¿Qué tipo de cluster permite múltiples usuarios simultáneamente?",
    "options": [
      "Job cluster",
      "All-purpose",
      "High concurrency",
      "Single node"
    ],
    "correctAnswerIndex": 2,
    "explanation": "High concurrency permite múltiples usuarios con aislamiento.",
    "category": "Clusters"
  },
  {
    "id": "dep-t1-42",
    "text": "¿Qué sucede al ejecutar cache() sin una acción posterior?",
    "options": [
      "Se cachea inmediatamente",
      "No ocurre nada hasta ejecutar una acción",
      "Se guarda en disco",
      "Se elimina el linaje"
    ],
    "correctAnswerIndex": 1,
    "explanation": "cache() es lazy y requiere una acción para materializarse.",
    "category": "Optimización de Spark"
  },
  {
    "id": "dep-t1-43",
    "text": "¿Qué operación devuelve el número de particiones de un DataFrame?",
    "options": [
      "df.partitions()",
      "df.rdd.getNumPartitions()",
      "df.countPartitions()",
      "df.numPartitions()"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Se obtiene usando df.rdd.getNumPartitions().",
    "category": "Conceptos de Spark"
  },
  {
    "id": "dep-t1-44",
    "text": "¿Qué comando permite crear una tabla externa en Delta?",
    "options": [
      "CREATE TABLE USING DELTA LOCATION",
      "CREATE EXTERNAL DELTA TABLE",
      "CREATE TABLE EXTERNAL DELTA",
      "CREATE TABLE LOCATION DELTA"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Se usa LOCATION para especificar la ruta externa.",
    "category": "Delta Lake Tablas"
  },
  {
    "id": "dep-t1-45",
    "text": "¿Qué permite la opción partitionBy al escribir una tabla?",
    "options": [
      "Dividir datos en carpetas por columna",
      "Ordenar los datos",
      "Eliminar duplicados",
      "Optimizar joins"
    ],
    "correctAnswerIndex": 0,
    "explanation": "partitionBy crea particiones físicas basadas en columnas.",
    "category": "Optimización de Rendimiento"
  },
  {
    "id": "dep-t1-46",
    "text": "¿Qué tipo de archivo se crea en el log de Delta por cada commit?",
    "options": [
      "Archivo Parquet",
      "Archivo JSON",
      "Archivo CSV",
      "Archivo ORC"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cada commit se registra como un archivo JSON en el log.",
    "category": "Delta Lake Fundamentos"
  },
  {
    "id": "dep-t1-47",
    "text": "¿Qué comando permite ver el plan de ejecución de una consulta?",
    "options": [
      "EXPLAIN",
      "DESCRIBE PLAN",
      "SHOW EXECUTION",
      "PLAN QUERY"
    ],
    "correctAnswerIndex": 0,
    "explanation": "EXPLAIN muestra el plan lógico y físico.",
    "category": "Optimización de Spark"
  },
  {
    "id": "dep-t1-48",
    "text": "¿Qué técnica mejora el rendimiento de joins en columnas de alta cardinalidad?",
    "options": [
      "Z-ORDER",
      "Partitioning por la columna",
      "Broadcast",
      "Cache"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Partitioning reduce el volumen de datos en joins.",
    "category": "Optimización de Rendimiento"
  },
  {
    "id": "dep-t1-49",
    "text": "¿Qué sucede si se usa SELECT * en tablas muy grandes?",
    "options": [
      "Mejora el rendimiento",
      "Lee todas las columnas innecesariamente",
      "Reduce el shuffle",
      "Activa cache automático"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Leer todas las columnas aumenta el I/O innecesario.",
    "category": "Buenas Prácticas"
  },
  {
    "id": "dep-t1-50",
    "text": "¿Qué componente de Databricks permite gobernanza y control de acceso a datos a nivel de tabla y columna?",
    "options": [
      "DBFS",
      "Unity Catalog",
      "Repos",
      "Jobs"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Unity Catalog permite control de acceso centralizado y gobernanza.",
    "category": "Gobernanza de Datos"
  }
];