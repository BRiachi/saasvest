import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, DollarSign } from 'lucide-react';

interface Question {
  text: string;
  type: 'text' | 'email' | 'select' | 'yesno';
  options?: string[];
}

const questions: Question[] = [
  {
    text: "What's your name?",
    type: "text",
  },
  {
    text: "What's your email address?",
    type: "email",
  },
  {
    text: "What's your company name?",
    type: "text",
  },
  {
    text: "What's your website URL?",
    type: "text",
  },
  {
    text: "How old is your business?",
    type: "select",
    options: ["Less than 1 year", "1-2 years", "2-5 years", "5+ years"],
  },
  {
    text: "What was your total revenue for the last 12 months?",
    type: "text",
  },
  {
    text: "What's your current monthly recurring revenue (MRR)?",
    type: "text",
  },
  {
    text: "What's your customer churn rate?",
    type: "text",
  },
  {
    text: "What's your customer acquisition cost (CAC)?",
    type: "text",
  },
  {
    text: "Are you looking to sell your business in the near future?",
    type: "yesno",
  },
];

const ValuationTool: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = async () => {
    if (currentAnswer) {
      setAnswers({ ...answers, [currentQuestion]: currentAnswer });
      setCurrentAnswer('');
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsComplete(true);
        await sendEmail();
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setCurrentAnswer(answers[currentQuestion - 1] || '');
    }
  };

  const sendEmail = async () => {
    const templateParams = {
      to_email: 'baz@saasvest.com',
      from_name: answers[0],
      from_email: answers[1],
      message: JSON.stringify(answers, null, 2)
    };

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateParams),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Valuation email sent successfully:', result);
      } else {
        console.error('Failed to send valuation email:', result);
      }
    } catch (error) {
      console.error('Error sending valuation email:', error);
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    if (!question) return null;

    switch (question.type) {
      case 'text':
      case 'email':
        return (
          <input
            type={question.type}
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            placeholder="Your answer"
            className="w-full p-2 border border-gray-300 rounded-md font-display"
          />
        );
      case 'select':
        return (
          <select
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md font-display"
          >
            <option value="">Select an option</option>
            {question.options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'yesno':
        return (
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentAnswer('Yes')}
              className={`px-4 py-2 rounded-md font-display ${
                currentAnswer === 'Yes' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setCurrentAnswer('No')}
              className={`px-4 py-2 rounded-md font-display ${
                currentAnswer === 'No' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              No
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6 uppercase font-display">
            Business Valuation Questionnaire
          </h2>
          {isComplete ? (
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 font-display">Thank you for completing the questionnaire!</h3>
              <p className="mb-4 font-display">We will process your information and get back to you with a valuation soon.</p>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setIsComplete(false);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 uppercase font-display"
              >
                Start Over
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-right text-sm mt-1 font-display">{`${currentQuestion + 1} / ${questions.length}`}</p>
              </div>
              {questions[currentQuestion] && (
                <p className="text-lg mb-6 font-display">
                  {questions[currentQuestion].text}
                </p>
              )}
              {renderQuestion()}
              <div className="flex justify-between mt-8">
                {currentQuestion > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 uppercase font-display"
                  >
                    <ChevronLeft className="mr-2" />
                    Back
                  </button>
                )}
                <button
                  onClick={handleAnswer}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-auto uppercase font-display"
                >
                  {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
                  <ChevronRight className="ml-2" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC = () => (
  <div className="blue-bg py-20">
    <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <DollarSign size={64} className="mx-auto mb-4" />
      <h1 className="text-4xl font-bold mb-4 uppercase font-display">
        Free SaaS Valuation Tool
      </h1>
      <p className="text-xl max-w-2xl mx-auto font-display">
        Discover the true value of your SaaS business with our comprehensive valuation tool. Get an accurate estimate based on industry standards and market trends.
      </p>
    </div>
  </div>
);

export default ValuationTool;