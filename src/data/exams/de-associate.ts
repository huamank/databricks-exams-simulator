import type { Question } from '../certifications';
import { questions as originalQuestions } from '../questions';

export const deAssociateTest1: Question[] = originalQuestions as Question[];

export const deAssociateTest2: Question[] = [
  {
    id: 'dea-t2-1',
    text: "¿Cuál es la principal ventaja de usar Auto Loader en Databricks?",
    options: [
      "Procesa datos en batch de forma síncrona",
      "Descubre y procesa nuevos archivos incrementalmente a medida que llegan a la nube",
      "Entrena modelos de Machine Learning automáticamente",
      "Reemplaza la necesidad de usar Delta Lake"
    ],
    correctAnswerIndex: 1,
    explanation: "Auto Loader proporciona una forma estructurada y eficiente de procesar nuevos archivos de datos de forma incremental a medida que llegan al almacenamiento en la nube, sin necesidad de gestionar estados complejos.",
    category: "Ingesta de Datos"
  },
  {
    id: 'dea-t2-2',
    text: "¿Qué comando SQL se utiliza para ver el historial de transacciones de una tabla Delta?",
    options: [
      "SHOW HISTORY table_name",
      "DESCRIBE HISTORY table_name",
      "VIEW TRANSACTIONS table_name",
      "SELECT * FROM table_name.history"
    ],
    correctAnswerIndex: 1,
    explanation: "DESCRIBE HISTORY proporciona información de procedencia, incluyendo la operación, el usuario, y el timestamp para cada escritura en una tabla Delta.",
    category: "Delta Lake"
  },
  {
    id: 'dea-t2-3',
    text: "En un pipeline de Medallion Architecture, ¿cuál es el propósito típico de la capa Silver?",
    options: [
      "Almacenar datos crudos (raw) tal como llegan de la fuente",
      "Proporcionar agregaciones finales a nivel de negocio para dashboards",
      "Limpiar, filtrar y enriquecer los datos crudos para crear una vista consolidada",
      "Archivar datos históricos que ya no se consultan"
    ],
    correctAnswerIndex: 2,
    explanation: "La capa Silver toma los datos de la capa Bronze (crudos) y los limpia, filtra y transforma para crear una 'fuente de verdad' validada y estructurada a nivel empresarial.",
    category: "Arquitectura de Datos"
  }
];
