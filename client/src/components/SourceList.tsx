import { Card } from '@/components/ui/card';
import { ExternalLink, Link2, Globe, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Source {
  title: string;
  url: string;
  snippet: string;
}

interface SourceListProps {
  sources: Source[];
}

export function SourceList({ sources }: SourceListProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div 
        className="flex items-center justify-between"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Link2 className="h-4 w-4 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Sources</h2>
            <p className="text-sm text-muted-foreground">Found {sources.length} relevant sources</p>
          </div>
        </div>
        <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          <Clock className="w-3 h-3 mr-1" />
          Fresh
        </Badge>
      </motion.div>

      {/* Sources Grid */}
      <ScrollArea className="w-full whitespace-nowrap rounded-xl">
        <motion.div 
          className="flex space-x-4 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {sources.map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="shrink-0"
            >
              <Card 
                className="w-[320px] group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-slate-900/50 cursor-pointer bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1"
                onClick={() => window.open(source.url, '_blank')}
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-slate-100 to-blue-50 dark:from-slate-700 dark:to-slate-600 px-4 py-3 border-b border-slate-200 dark:border-slate-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-300 truncate max-w-[220px]">
                        {new URL(source.url).hostname.replace('www.', '')}
                      </span>
                    </div>
                    <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 space-y-3">
                  <h3 className="font-bold text-sm text-foreground line-clamp-2 leading-relaxed group-hover:text-blue-900 dark:group-hover:text-blue-100 transition-colors">
                    {source.title.replace(/\*\*/g, '')}
                  </h3>

                  {source.snippet && (
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {source.snippet.replace(/\*\*/g, '')}
                    </p>
                  )}

                  {/* Card Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-600">
                    <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300">
                      Verified Source
                    </Badge>
                    <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                      <span>Click to read</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <ScrollBar orientation="horizontal" className="bg-slate-200 dark:bg-slate-700" />
      </ScrollArea>
    </div>
  );
}