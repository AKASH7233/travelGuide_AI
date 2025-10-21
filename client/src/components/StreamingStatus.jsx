import { Sparkles, Zap } from 'lucide-react';

const StreamingStatus = ({ isStreaming, chunksReceived = 0, currentStep }) => {
  if (!isStreaming) return null;

  return (
    <div className="card p-6 mb-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Sparkles className="w-6 h-6 text-purple-600 animate-pulse" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">AI is Generating...</h3>
            <p className="text-sm text-gray-600">
              {currentStep || 'Processing your travel preferences'}
            </p>
          </div>
        </div>
        <Zap className="w-8 h-8 text-yellow-500 animate-bounce" />
      </div>

      {/* Streaming Progress Bar */}
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
      </div>

      {chunksReceived > 0 && (
        <p className="text-xs text-gray-500 mt-2 text-center">
          Received {chunksReceived} data chunks
        </p>
      )}
    </div>
  );
};

export default StreamingStatus;
