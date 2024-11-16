import React from 'react';
import { X } from 'lucide-react';

interface ImagePreviewProps {
  imageUrl: string;
  onRemove: () => void;
}

export function ImagePreview({ imageUrl, onRemove }: ImagePreviewProps) {
  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt="Preview"
        className="w-full h-64 object-contain rounded-lg bg-gray-100"
      />
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <X className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}