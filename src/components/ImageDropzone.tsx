import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface ImageDropzoneProps {
  onImageDrop: (file: File) => void;
}

export function ImageDropzone({ onImageDrop }: ImageDropzoneProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.avif']
    },
    maxFiles: 1,
    onDrop: files => files[0] && onImageDrop(files[0])
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full p-8 border-2 border-dashed rounded-xl transition-colors duration-200 cursor-pointer
        ${isDragActive 
          ? 'border-blue-500 bg-blue-50' 
          : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
        }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center gap-4 text-gray-600">
        {isDragActive ? (
          <>
            <Upload className="w-12 h-12 text-blue-500" />
            <p className="text-lg font-medium text-blue-500">Drop your image here</p>
          </>
        ) : (
          <>
            <ImageIcon className="w-12 h-12" />
            <div className="text-center">
              <p className="text-lg font-medium">Drag & drop your image here</p>
              <p className="text-sm text-gray-500">or click to select a file</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}