import { useState } from 'react';
import { Mail, Sparkles, Calendar, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';

export default function MailReader() {
  const [emailText, setEmailText] = useState('');
  const [analysis, setAnalysis] = useState<{
    summary: string;
    deadline: string;
    priority: 'low' | 'medium' | 'high';
    action: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const analyzeEmail = async () => {
    if (!emailText.trim()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const mockAnalysis = {
      summary: 'Assignment submission for Software Engineering course with project report requirements.',
      deadline: '8th February 2026, 11:59 PM',
      priority: 'high' as const,
      action: 'Complete the project report and submit it via the student portal before the deadline.',
    };

    setAnalysis(mockAnalysis);
    setLoading(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'from-red-500 to-orange-500';
      case 'medium':
        return 'from-yellow-500 to-orange-500';
      case 'low':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getPriorityBg = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      case 'medium':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'low':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      default:
        return 'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-3xl p-6 border border-blue-200/50 dark:border-blue-700/50">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Smart Mail Reader</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Paste your college email and let AI extract key information instantly
        </p>
      </div>

      <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Email Content
        </label>
        <textarea
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          placeholder="Paste your college email here...

Example:
Subject: Important: Software Engineering Project Submission

Dear Students,

This is to remind you that the Software Engineering project report is due on 8th February 2026 at 11:59 PM. Please ensure you submit your complete project documentation via the student portal.

Best regards,
Dr. Kumar"
          className="w-full h-64 p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none"
        />

        <button
          onClick={analyzeEmail}
          disabled={loading || !emailText.trim()}
          className="mt-4 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Analyze Email
            </>
          )}
        </button>
      </div>

      {loading && (
        <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-900 rounded-full"></div>
              <div className="w-16 h-16 border-4 border-blue-600 dark:border-blue-400 rounded-full animate-spin border-t-transparent absolute top-0 left-0"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              AI is analyzing your email...
            </p>
          </div>
        </div>
      )}

      {analysis && !loading && (
        <div className="space-y-4">
          <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Summary</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{analysis.summary}</p>
          </div>

          <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Deadline</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <p className="text-green-900 dark:text-green-300 font-semibold">
                  {analysis.deadline}
                </p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Priority Level</h3>
            </div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${getPriorityColor(
                analysis.priority
              )} text-white font-semibold`}
            >
              {analysis.priority.toUpperCase()}
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Suggested Action</h3>
            </div>
            <div
              className={`p-4 rounded-xl border ${getPriorityBg(analysis.priority)}`}
            >
              <p
                className={`${
                  analysis.priority === 'high'
                    ? 'text-red-900 dark:text-red-300'
                    : analysis.priority === 'medium'
                    ? 'text-yellow-900 dark:text-yellow-300'
                    : 'text-green-900 dark:text-green-300'
                }`}
              >
                {analysis.action}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
