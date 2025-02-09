import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center space-x-2 text-red-500 text-sm mt-1">
      <AlertCircle className="w-4 h-4" />
      <span>{message}</span>
    </div>
  );
}
