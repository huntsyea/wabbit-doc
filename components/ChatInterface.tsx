'use client';

import React from 'react';
import { useChat } from 'ai/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SendIcon, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const ChatInterface = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    keepLastMessageOnError: true,
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-semibold mb-2">Welcome to AI Chat</h2>
            <p className="text-muted-foreground">Start a conversation by typing a message below.</p>
          </div>
        )}
        <div className="w-full">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-4 w-full",
                message.role === 'assistant' ? 'bg-secondary/20 py-6 px-8' : 'py-6 px-8'
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                message.role === 'assistant' ? 'bg-primary/10 text-primary' : 'bg-secondary text-secondary-foreground'
              )}>
                {message.role === 'assistant' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
              </div>
              <div className="flex-1 space-y-2 overflow-hidden">
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
        <div className="w-full p-4">
          <form onSubmit={handleSubmit} className="flex w-full gap-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Message AI..."
              className="flex-1 h-12 text-base"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="icon"
              disabled={isLoading}
              className="h-12 w-12 shrink-0"
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <SendIcon className="h-5 w-5" />}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
