export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Which of the following describes a Delta Lake feature that enables time travel?",
    options: [
      "Data Skipping",
      "Z-Ordering",
      "Transaction Log",
      "Auto Optimize"
    ],
    correctAnswerIndex: 2,
    explanation: "Delta Lake's transaction log (Delta Log) keeps track of all changes made to the table, enabling features like time travel, audit trails, and rollback.",
    category: "Delta Lake Architecture"
  },
  {
    id: 2,
    text: "A data engineer wants to schedule a Databricks SQL query to run every day at 8:00 AM. Which Databricks feature should they use?",
    options: [
      "Databricks Repos",
      "Databricks Workflows (Jobs)",
      "Delta Live Tables",
      "Databricks SQL Alerts"
    ],
    correctAnswerIndex: 1,
    explanation: "Databricks Workflows (Jobs) allows you to schedule and orchestrate data processing and analysis tasks, including Databricks SQL queries, notebooks, and JARs.",
    category: "Orquestación"
  },
  {
    id: 3,
    text: "What is the primary purpose of the Bronze layer in a Medallion Architecture?",
    options: [
      "To store aggregated data for business intelligence reporting.",
      "To store raw data ingested from various sources in its original format.",
      "To store cleaned, filtered, and augmented data.",
      "To enforce strict schema validation and reject all malformed records."
    ],
    correctAnswerIndex: 1,
    explanation: "The Bronze layer is the landing zone for raw data. It typically stores data in its original format (e.g., JSON, CSV) or as Delta tables, preserving the history of all ingested data.",
    category: "Modelado de Datos"
  },
  {
    id: 4,
    text: "Which of the following commands can be used to convert an existing Parquet table to a Delta table in-place?",
    options: [
      "ALTER TABLE table_name SET FORMAT DELTA",
      "CONVERT TO DELTA parquet.`/path/to/table`",
      "OPTIMIZE table_name",
      "VACUUM table_name"
    ],
    correctAnswerIndex: 1,
    explanation: "The CONVERT TO DELTA command transforms an existing Parquet table into a Delta table in-place without rewriting the data files, simply by creating the Delta transaction log.",
    category: "Ingesta y Transformación"
  },
  {
    id: 5,
    text: "In Structured Streaming, what is the purpose of a checkpoint location?",
    options: [
      "To store the final output of the streaming query.",
      "To cache frequently accessed data in memory.",
      "To store the progress and state of the streaming query for fault tolerance.",
      "To define the schema of the incoming streaming data."
    ],
    correctAnswerIndex: 2,
    explanation: "Checkpoints store the progress (offsets) and state of a streaming query in reliable storage (like DBFS or S3). This allows the query to recover and resume from where it left off in case of a failure.",
    category: "Procesamiento Streaming"
  },
  {
    id: 6,
    text: "A data engineer notices that a Delta table has many small files, which is degrading query performance. Which command should they use to compact these files?",
    options: [
      "VACUUM",
      "OPTIMIZE",
      "ANALYZE TABLE",
      "FSCK REPAIR TABLE"
    ],
    correctAnswerIndex: 1,
    explanation: "The OPTIMIZE command compacts small files into larger ones, improving read performance. It can also be combined with ZORDER to co-locate related information in the same set of files.",
    category: "Optimización de Rendimiento"
  },
  {
    id: 7,
    text: "Which of the following is a key benefit of using Delta Live Tables (DLT)?",
    options: [
      "It automatically provisions a new Databricks workspace for each pipeline.",
      "It allows declarative pipeline development with automatic dependency management and data quality checks.",
      "It replaces the need for cloud storage like AWS S3 or Azure Data Lake Storage.",
      "It is the only way to query data using Databricks SQL."
    ],
    correctAnswerIndex: 1,
    explanation: "Delta Live Tables simplifies ETL development by allowing you to define declarative data pipelines. It automatically manages dependencies between tables, handles infrastructure, and enforces data quality with expectations.",
    category: "Ingesta y Transformación"
  },
  {
    id: 8,
    text: "What does the VACUUM command do in Delta Lake?",
    options: [
      "It removes data files that are no longer referenced by a Delta table and are older than the retention threshold.",
      "It deletes the entire Delta table and its transaction log.",
      "It compacts small files into larger ones to improve performance.",
      "It removes duplicate records from the Delta table."
    ],
    correctAnswerIndex: 0,
    explanation: "VACUUM removes data files that are no longer in the latest state of the transaction log and are older than the specified retention period (default 7 days), freeing up storage space.",
    category: "Optimización de Rendimiento"
  },
  {
    id: 9,
    text: "Which Unity Catalog object is used to securely share data across different Databricks workspaces or with external organizations?",
    options: [
      "External Location",
      "Storage Credential",
      "Delta Sharing",
      "Managed Table"
    ],
    correctAnswerIndex: 2,
    explanation: "Delta Sharing is an open protocol for secure data sharing with other organizations or across different Databricks workspaces, regardless of the computing platform they use.",
    category: "Seguridad y Gobernanza"
  },
  {
    id: 10,
    text: "When creating a table in Databricks, what is the difference between a Managed Table and an External Table?",
    options: [
      "Managed tables can only be queried using SQL, while external tables require Python or Scala.",
      "Dropping a managed table deletes both the metadata and the underlying data files, while dropping an external table only deletes the metadata.",
      "Managed tables do not support Delta format, while external tables do.",
      "External tables are automatically optimized by Databricks, while managed tables require manual optimization."
    ],
    correctAnswerIndex: 1,
    explanation: "For managed tables, Databricks manages both the metadata and the data. Dropping it deletes both. For external (unmanaged) tables, Databricks only manages the metadata; dropping it leaves the data files intact in the external location.",
    category: "Modelado de Datos"
  }
];
