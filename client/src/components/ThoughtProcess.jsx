import { Brain, Check } from 'lucide-react';

const ThoughtProcess = ({ thoughts, currentThought = 0 }) => {
  return (
    <div className="card p-6 mb-6 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="flex items-center space-x-2 mb-4">
        <Brain className="w-6 h-6 text-purple-600" />
        <h3 className="text-lg font-bold text-gray-900">AI Thinking Process</h3>
      </div>
      <div className="space-y-3">
        {thoughts.map((thought, index) => (
          <div 
            key={index}
            className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 ${
              index < currentThought 
                ? 'bg-white shadow-sm' 
                : index === currentThought 
                  ? 'bg-primary-50 border-2 border-primary-300' 
                  : 'opacity-50'
            }`}
          >
            {index < currentThought ? (
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            ) : index === currentThought ? (
              <div className="w-5 h-5 border-2 border-primary-600 border-t-transparent rounded-full animate-spin flex-shrink-0 mt-0.5"></div>
            ) : (
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0 mt-0.5"></div>
            )}
            <p className={`text-sm ${index <= currentThought ? 'text-gray-700' : 'text-gray-400'}`}>
              {thought}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThoughtProcess;
