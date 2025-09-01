import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Clock, Search, Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { SourceList } from '@/components/SourceList';
import { Logo } from '@/components/Logo';

interface SearchResultsProps {
  query: string;
  results: any;
  isLoading: boolean;
  error?: Error;
  isFollowUp?: boolean;
  originalQuery?: string;
}

export function SearchResults({ 
  query,
  results,
  isLoading,
  error,
  isFollowUp,
  originalQuery
}: SearchResultsProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (results && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [results]);

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Alert variant="destructive" className="border-red-200 dark:border-red-800 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="font-medium">
            {error.message || 'An error occurred while searching. Please try again.'}
          </AlertDescription>
        </Alert>
      </motion.div>
    );
  }

  if (isLoading) {
    return (
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Loading Header */}
        <div className="flex items-center justify-center space-x-3 py-8">
          <Logo animate className="w-8 h-8" />
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Clock className="w-4 h-4 animate-spin" />
            <span className="text-sm font-medium">Searching the web...</span>
          </div>
        </div>

        {/* Query Skeleton */}
        <div className="space-y-3">
          <Skeleton className="h-3 w-24 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600" />
          <Skeleton className="h-8 w-3/4 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600" />
        </div>

        {/* Sources Loading */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex space-x-3 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="shrink-0"
              >
                <Card className="w-[280px] h-[120px] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-0">
                  <div className="p-4 space-y-3">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content Loading */}
        <Card className="overflow-hidden border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 shadow-lg">
          <div className="p-8 space-y-4">
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
            </div>
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <div className="space-y-3">
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  if (!results) return null;

  return (
    <div ref={contentRef} className="space-y-8">
      {/* Search Query Display */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {isFollowUp && originalQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800">
              <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <div className="flex-1">
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">Original search</p>
                <p className="text-sm text-blue-900 dark:text-blue-100">"{originalQuery}"</p>
              </div>
            </div>
          </motion.div>
        )}
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isFollowUp ? 0.3 : 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 mt-1">
              {isFollowUp ? (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              {isFollowUp && (
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-2">
                  Follow-up question
                </p>
              )}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                "{query}"
              </h1>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Sources Section */}
      {results.sources && results.sources.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <SourceList sources={results.sources} />
        </motion.div>
      )}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative"
      >
        <Card className="overflow-hidden border-0 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 shadow-xl shadow-blue-100/50 dark:shadow-slate-900/50">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 dark:from-slate-800 dark:to-blue-800 px-8 py-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white">AI-Generated Summary</h2>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-8">
            <div
              className={cn(
                "prose prose-slate max-w-none",
                "dark:prose-invert",
                // Enhanced typography
                "prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-100",
                "prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b-2 prose-h2:border-gradient-to-r prose-h2:from-blue-200 prose-h2:to-purple-200 prose-h2:pb-3",
                "prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-slate-800 dark:prose-h3:text-slate-200",
                // Enhanced paragraph styles
                "prose-p:text-base prose-p:leading-8 prose-p:my-5 prose-p:text-slate-700 dark:prose-p:text-slate-300",
                "prose-p:first-of-type:text-lg prose-p:first-of-type:leading-8 prose-p:first-of-type:font-medium prose-p:first-of-type:text-slate-800 dark:prose-p:first-of-type:text-slate-200",
                // Enhanced list styles
                "prose-ul:my-6 prose-ul:space-y-2",
                "prose-li:my-3 prose-li:pl-2",
                "prose-li:marker:text-blue-500 dark:prose-li:marker:text-blue-400",
                "prose-ol:my-6 prose-ol:space-y-2",
                // Enhanced emphasis
                "prose-strong:font-bold prose-strong:text-slate-900 dark:prose-strong:text-slate-100",
                "prose-em:italic prose-em:text-slate-600 dark:prose-em:text-slate-400",
                // Enhanced links
                "prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline prose-a:font-medium",
                "hover:prose-a:text-blue-800 dark:hover:prose-a:text-blue-300 hover:prose-a:underline",
                // Code styles
                "prose-code:text-sm prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded",
                "prose-pre:bg-slate-100 dark:prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-slate-700",
                // Blockquote styles
                "prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-6 prose-blockquote:rounded-r-lg"
              )}
              dangerouslySetInnerHTML={{ 
                __html: results.summary
              }}
            />
          </div>

          {/* Card Footer */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 px-8 py-4 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-2">
              <Sparkles className="w-3 h-3" />
              <span>Powered by Gemini AI</span>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}