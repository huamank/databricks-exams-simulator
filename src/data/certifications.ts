import { deAssociateTest1, deAssociateTest2 } from './exams/de-associate';
import { deProfessionalTest1, deProfessionalTest2 } from './exams/de-professional';
import { daAssociateTest1, daAssociateTest2 } from './exams/da-associate';
import { mlAssociateTest1, mlAssociateTest2 } from './exams/ml-associate';
import { mlProfessionalTest1, mlProfessionalTest2 } from './exams/ml-professional';
import { genaiAssociateTest1, genaiAssociateTest2 } from './exams/genai-associate';

export interface Question {
  id: number | string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: string;
}

export interface Test {
  id: string;
  name: string;
  questions: Question[];
}

export interface Certification {
  id: string;
  name: string;
  description: string;
  tests: Test[];
}

export const certifications: Certification[] = [
  {
    id: 'data-engineer-associate',
    name: 'Databricks Certified Data Engineer Associate',
    description: 'Evalúa tu capacidad para usar Databricks en tareas introductorias de ingeniería de datos.',
    tests: [
      {
        id: 'test-1',
        name: 'Test de Práctica 1',
        questions: deAssociateTest1
      },
      {
        id: 'test-2',
        name: 'Test de Práctica 2',
        questions: deAssociateTest2
      }
    ]
  },
  {
    id: 'data-engineer-professional',
    name: 'Databricks Certified Data Engineer Professional',
    description: 'Evalúa tu capacidad para usar Databricks en tareas avanzadas de ingeniería de datos.',
    tests: [
      {
        id: 'test-1',
        name: 'Test de Práctica 1',
        questions: deProfessionalTest1
      },
      {
        id: 'test-2',
        name: 'Test de Práctica 2',
        questions: deProfessionalTest2
      }
    ]
  },
  {
    id: 'data-analyst-associate',
    name: 'Databricks Certified Data Analyst Associate',
    description: 'Evalúa tu capacidad para usar Databricks SQL para realizar tareas de análisis de datos.',
    tests: [
      {
        id: 'test-1',
        name: 'Test de Práctica 1',
        questions: daAssociateTest1
      },
      {
        id: 'test-2',
        name: 'Test de Práctica 2',
        questions: daAssociateTest2
      }
    ]
  },
  {
    id: 'machine-learning-associate',
    name: 'Databricks Certified Machine Learning Associate',
    description: 'Evalúa tu capacidad para usar Databricks para tareas básicas de machine learning.',
    tests: [
      {
        id: 'test-1',
        name: 'Test de Práctica 1',
        questions: mlAssociateTest1
      },
      {
        id: 'test-2',
        name: 'Test de Práctica 2',
        questions: mlAssociateTest2
      }
    ]
  },
  {
    id: 'machine-learning-professional',
    name: 'Databricks Certified Machine Learning Professional',
    description: 'Evalúa tu capacidad para usar Databricks para tareas avanzadas de machine learning.',
    tests: [
      {
        id: 'test-1',
        name: 'Test de Práctica 1',
        questions: mlProfessionalTest1
      },
      {
        id: 'test-2',
        name: 'Test de Práctica 2',
        questions: mlProfessionalTest2
      }
    ]
  },
  {
    id: 'generative-ai-engineer-associate',
    name: 'Databricks Certified Generative AI Engineer Associate',
    description: 'Evalúa tu capacidad para desarrollar y poner en producción aplicaciones de IA generativa.',
    tests: [
      {
        id: 'test-1',
        name: 'Test de Práctica 1',
        questions: genaiAssociateTest1
      },
      {
        id: 'test-2',
        name: 'Test de Práctica 2',
        questions: genaiAssociateTest2
      }
    ]
  }
];
