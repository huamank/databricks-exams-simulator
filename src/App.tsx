import { useState, useEffect } from 'react';
import { certifications, Certification, Test, Question } from './data/certifications';
import { Clock, CheckCircle2, XCircle, ChevronRight, ChevronLeft, Play, RotateCcw, Award, AlertCircle, BookOpen, ArrowLeft, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type AppState = 'home' | 'certification' | 'exam' | 'results';

export default function App() {
  const [appState, setAppState] = useState<AppState>('home');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeRemaining, setTimeRemaining] = useState(90 * 60); // 90 minutes

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (appState === 'exam' && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && appState === 'exam') {
      setAppState('results');
    }
    return () => clearInterval(timer);
  }, [appState, timeRemaining]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectCert = (cert: Certification) => {
    setSelectedCert(cert);
    setAppState('certification');
  };

  const handleSelectTest = (test: Test) => {
    if (test.questions.length === 0) {
      alert('Este test aún no tiene preguntas disponibles.');
      return;
    }
    setSelectedTest(test);
    setAppState('exam');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimeRemaining(90 * 60);
  };

  const handleOptionSelect = (optionIndex: number) => {
    setAnswers({ ...answers, [currentQuestionIndex]: optionIndex });
  };

  const nextQuestion = () => {
    if (selectedTest && currentQuestionIndex < selectedTest.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const finishExam = () => {
    setAppState('results');
  };

  const backToHome = () => {
    setAppState('home');
    setSelectedCert(null);
    setSelectedTest(null);
  };

  const backToCert = () => {
    setAppState('certification');
    setSelectedTest(null);
  };

  const calculateScore = () => {
    if (!selectedTest) return { correct: 0, incorrect: 0, unanswered: 0, total: 0, categoryStats: {} };
    
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    const categoryStats: Record<string, { correct: number; total: number }> = {};

    selectedTest.questions.forEach((q, index) => {
      if (!categoryStats[q.category]) {
        categoryStats[q.category] = { correct: 0, total: 0 };
      }
      categoryStats[q.category].total++;

      if (answers[index] === undefined) {
        unanswered++;
      } else if (answers[index] === q.correctAnswerIndex) {
        correct++;
        categoryStats[q.category].correct++;
      } else {
        incorrect++;
      }
    });

    return { correct, incorrect, unanswered, total: selectedTest.questions.length, categoryStats };
  };

  return (
    <div className="min-h-screen bg-[#1B2733] text-white font-sans selection:bg-[#FF3621]/30">
      {/* Header */}
      <header className="bg-[#243342] border-b border-[#304254] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div 
              className="w-8 h-8 rounded-lg bg-[#FF3621] flex items-center justify-center text-white font-bold cursor-pointer"
              onClick={backToHome}
            >
              DB
            </div>
            <h1 className="font-semibold text-lg hidden sm:block text-white">
              Databricks Practice Exams
            </h1>
          </div>
          {appState === 'exam' && (
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm font-medium ${timeRemaining < 300 ? 'bg-red-500/20 text-red-400' : 'bg-[#1B2733] text-slate-300'}`}>
              <Clock className="w-4 h-4" />
              {formatTime(timeRemaining)}
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {/* HOME STATE */}
          {appState === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12 mt-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FF3621]/10 text-[#FF3621] mb-6">
                  <Award className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">
                  Certificaciones de Databricks
                </h2>
                <p className="text-lg text-slate-400">
                  Selecciona la certificación para la que deseas prepararte y accede a los tests de práctica disponibles.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert) => (
                  <div 
                    key={cert.id}
                    onClick={() => handleSelectCert(cert)}
                    className="bg-[#243342] border border-[#304254] rounded-2xl p-6 hover:border-[#FF3621]/50 hover:bg-[#2A3B4C] transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-[#1B2733] rounded-xl text-[#FF3621] group-hover:bg-[#FF3621]/10 transition-colors">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium px-2.5 py-1 bg-[#1B2733] text-slate-400 rounded-full">
                        {cert.tests.length} Tests
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF3621] transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CERTIFICATION STATE */}
          {appState === 'certification' && selectedCert && (
            <motion.div
              key="certification"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto"
            >
              <button 
                onClick={backToHome}
                className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Volver a Certificaciones
              </button>

              <div className="bg-[#243342] border border-[#304254] rounded-3xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">{selectedCert.name}</h2>
                <p className="text-slate-400 text-lg">{selectedCert.description}</p>
              </div>

              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#FF3621]" />
                Tests de Práctica Disponibles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedCert.tests.map((test) => (
                  <div 
                    key={test.id}
                    onClick={() => handleSelectTest(test)}
                    className="bg-[#243342] border border-[#304254] rounded-2xl p-6 flex items-center justify-between hover:border-[#FF3621]/50 hover:bg-[#2A3B4C] transition-all cursor-pointer group"
                  >
                    <div>
                      <h4 className="font-bold text-lg text-white mb-1 group-hover:text-[#FF3621] transition-colors">{test.name}</h4>
                      <p className="text-sm text-slate-400">{test.questions.length} preguntas • 90 minutos</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#1B2733] flex items-center justify-center text-slate-400 group-hover:bg-[#FF3621] group-hover:text-white transition-colors">
                      <Play className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* EXAM STATE */}
          {appState === 'exam' && selectedTest && (
            <motion.div
              key="exam"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="grid grid-cols-1 lg:grid-cols-4 gap-8"
            >
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="bg-[#243342] rounded-2xl p-5 shadow-sm border border-[#304254] sticky top-24">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">
                    Navegación
                  </h3>
                  <div className="grid grid-cols-5 gap-2">
                    {selectedTest.questions.map((_, idx) => {
                      const isAnswered = answers[idx] !== undefined;
                      const isCurrent = currentQuestionIndex === idx;
                      
                      let btnClass = "w-10 h-10 rounded-lg text-sm font-medium flex items-center justify-center transition-colors border ";
                      
                      if (isCurrent) {
                        btnClass += "ring-2 ring-[#FF3621] ring-offset-2 ring-offset-[#243342] ";
                      }

                      if (isAnswered) {
                        btnClass += "bg-[#FF3621]/20 text-[#FF3621] border-[#FF3621]/30";
                      } else {
                        btnClass += "bg-[#1B2733] text-slate-400 border-[#304254] hover:bg-[#304254]";
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => setCurrentQuestionIndex(idx)}
                          className={btnClass}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-[#304254]">
                    <button
                      onClick={finishExam}
                      className="w-full py-3 px-4 bg-[#FF3621] hover:bg-[#E02914] text-white rounded-xl font-medium transition-colors"
                    >
                      Finalizar Examen
                    </button>
                  </div>
                </div>
              </div>

              {/* Question Area */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="bg-[#243342] rounded-2xl p-6 sm:p-8 shadow-sm border border-[#304254]">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-[#FF3621] bg-[#FF3621]/10 px-3 py-1 rounded-full border border-[#FF3621]/20">
                      Pregunta {currentQuestionIndex + 1} de {selectedTest.questions.length}
                    </span>
                    <span className="text-sm font-medium text-slate-400">
                      {selectedTest.questions[currentQuestionIndex].category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl font-medium text-white mb-8 leading-relaxed">
                    {selectedTest.questions[currentQuestionIndex].text}
                  </h2>

                  <div className="space-y-3 mb-8">
                    {selectedTest.questions[currentQuestionIndex].options.map((option, idx) => {
                      const isSelected = answers[currentQuestionIndex] === idx;
                      
                      let optionClass = "w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-4 ";
                      
                      if (isSelected) {
                        optionClass += "border-[#FF3621] bg-[#FF3621]/10 text-white";
                      } else {
                        optionClass += "border-[#304254] hover:border-[#FF3621]/50 hover:bg-[#1B2733] text-slate-300";
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionSelect(idx)}
                          className={optionClass}
                        >
                          <div className={`w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                            isSelected 
                              ? 'border-[#FF3621] bg-[#FF3621]' 
                              : 'border-[#304254]'
                          }`}>
                            {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                          <span className="text-base leading-relaxed">{option}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-[#304254]">
                    <button
                      onClick={prevQuestion}
                      disabled={currentQuestionIndex === 0}
                      className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" /> Anterior
                    </button>

                    <button
                      onClick={nextQuestion}
                      disabled={currentQuestionIndex === selectedTest.questions.length - 1}
                      className="flex items-center gap-2 bg-[#1B2733] hover:bg-[#304254] border border-[#304254] text-white px-6 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Siguiente <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* RESULTS STATE */}
          {appState === 'results' && selectedTest && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-[#243342] rounded-3xl p-8 sm:p-12 shadow-sm border border-[#304254] text-center mb-8">
                {(() => {
                  const score = calculateScore();
                  const percentage = Math.round((score.correct / score.total) * 100);
                  const passed = percentage >= 70;

                  return (
                    <>
                      <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${passed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                        {passed ? <Award className="w-12 h-12" /> : <XCircle className="w-12 h-12" />}
                      </div>
                      <h2 className="text-3xl font-bold mb-2 text-white">
                        {passed ? '¡Felicidades, has aprobado!' : 'No has aprobado esta vez'}
                      </h2>
                      <p className="text-slate-300 mb-8 text-lg">
                        Has obtenido un <strong>{percentage}%</strong> en el {selectedTest.name}. Se requiere un 70% para aprobar.
                      </p>

                      <div className="grid grid-cols-3 gap-4 mb-10">
                        <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20">
                          <div className="text-3xl font-bold text-emerald-400 mb-1">{score.correct}</div>
                          <div className="text-sm font-medium text-emerald-200/70">Correctas</div>
                        </div>
                        <div className="bg-red-500/10 p-4 rounded-2xl border border-red-500/20">
                          <div className="text-3xl font-bold text-red-400 mb-1">{score.incorrect}</div>
                          <div className="text-sm font-medium text-red-200/70">Incorrectas</div>
                        </div>
                        <div className="bg-[#1B2733] p-4 rounded-2xl border border-[#304254]">
                          <div className="text-3xl font-bold text-slate-300 mb-1">{score.unanswered}</div>
                          <div className="text-sm font-medium text-slate-400">Sin responder</div>
                        </div>
                      </div>

                      {/* Category Breakdown */}
                      <div className="text-left mb-10 bg-[#1B2733] p-6 rounded-2xl border border-[#304254]">
                        <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                          <Award className="w-5 h-5 text-[#FF3621]" />
                          Rendimiento por Categoría
                        </h3>
                        <div className="space-y-5">
                          {Object.entries(score.categoryStats).map(([category, stats]) => {
                            const catPercentage = Math.round((stats.correct / stats.total) * 100);
                            return (
                              <div key={category}>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-medium text-slate-300">{category}</span>
                                  <span className="text-sm font-bold text-white">
                                    {stats.correct}/{stats.total} ({catPercentage}%)
                                  </span>
                                </div>
                                <div className="w-full bg-[#243342] rounded-full h-2.5 overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${catPercentage}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className={`h-2.5 rounded-full ${catPercentage >= 70 ? 'bg-emerald-500' : catPercentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                          onClick={() => handleSelectTest(selectedTest)}
                          className="inline-flex items-center justify-center gap-2 bg-[#FF3621] hover:bg-[#E02914] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
                        >
                          <RotateCcw className="w-5 h-5" />
                          Reintentar Examen
                        </button>
                        <button
                          onClick={backToCert}
                          className="inline-flex items-center justify-center gap-2 bg-[#1B2733] hover:bg-[#304254] border border-[#304254] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
                        >
                          Volver a Tests
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Review Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[#FF3621]" />
                  Revisión del Examen
                </h3>
                
                <div className="space-y-8">
                  {selectedTest.questions.map((question, qIdx) => {
                    const userAnswerIdx = answers[qIdx];
                    const isCorrect = userAnswerIdx === question.correctAnswerIndex;
                    const isUnanswered = userAnswerIdx === undefined;

                    return (
                      <div key={qIdx} className="bg-[#243342] rounded-2xl p-6 sm:p-8 border border-[#304254]">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h4 className="text-lg font-medium text-white">
                            <span className="text-slate-400 mr-2">{qIdx + 1}.</span>
                            {question.text}
                          </h4>
                          <div className="shrink-0 mt-1">
                            {isCorrect ? (
                              <div className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full text-xs font-medium border border-emerald-500/20">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Correcta
                              </div>
                            ) : isUnanswered ? (
                              <div className="flex items-center gap-1 text-slate-400 bg-[#1B2733] px-2.5 py-1 rounded-full text-xs font-medium border border-[#304254]">
                                Sin responder
                              </div>
                            ) : (
                              <div className="flex items-center gap-1 text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full text-xs font-medium border border-red-500/20">
                                <XCircle className="w-3.5 h-3.5" /> Incorrecta
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-3 mt-6">
                          {question.options.map((option, oIdx) => {
                            const isSelected = userAnswerIdx === oIdx;
                            const isCorrectOption = question.correctAnswerIndex === oIdx;
                            
                            let optionClass = "p-4 rounded-xl border flex items-start gap-3 ";
                            
                            if (isCorrectOption) {
                              optionClass += "bg-emerald-500/10 border-emerald-500/50 text-emerald-100";
                            } else if (isSelected && !isCorrectOption) {
                              optionClass += "bg-red-500/10 border-red-500/50 text-red-100";
                            } else {
                              optionClass += "border-[#304254] bg-[#1B2733] text-slate-400 opacity-60";
                            }

                            return (
                              <div key={oIdx} className={optionClass}>
                                <div className="mt-0.5 shrink-0">
                                  {isCorrectOption ? (
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                  ) : isSelected ? (
                                    <XCircle className="w-5 h-5 text-red-400" />
                                  ) : (
                                    <div className="w-5 h-5 rounded-full border-2 border-[#304254]" />
                                  )}
                                </div>
                                <span className="text-sm leading-relaxed">{option}</span>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-6 p-5 bg-[#1B2733] rounded-xl border border-[#304254]">
                          <h5 className="text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wider">Explicación</h5>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
