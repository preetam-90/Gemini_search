import { useState, KeyboardEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageSquarePlus, Loader2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FollowUpInputProps {
  onSubmit: (query: string) => void;
  isLoading?: boolean;
}

export function FollowUpInput({ 
  onSubmit,
  isLoading = false,
}: FollowUpInputProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (query.trim() && !isLoading) {
      onSubmit(query.trim());
      setQuery('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 border-0 shadow-lg shadow-blue-100/50 dark:shadow-slate-900/50">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-foreground">Continue the conversation</h3>
            <p className="text-sm text-muted-foreground">Ask a follow-up question to dive deeper</p>
          </div>
        </div>

        {/* Input Area */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a follow-up question..."
              className={cn(
                "transition-all duration-200 h-12",
                "focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-emerald-500",
                "placeholder:text-muted-foreground/70",
                "border-slate-200 dark:border-slate-600",
                "bg-white dark:bg-slate-800",
                "shadow-sm"
              )}
              disabled={isLoading}
            />
          </div>

          <Button 
            onClick={handleSubmit}
            disabled={!query.trim() || isLoading}
            className={cn(
              "h-12 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700",
              "text-white font-medium",
              "transition-all duration-200",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "w-full sm:w-auto"
            )}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Thinking...
              </>
            ) : (
              <>
                <MessageSquarePlus className="h-4 w-4 mr-2" />
                Ask Follow-up
              </>
            )}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
} 