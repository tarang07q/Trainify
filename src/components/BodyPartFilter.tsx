import React from 'react';
import { BodyPart } from '../types';

interface BodyPartFilterProps {
  selectedBodyPart: BodyPart | 'all';
  onSelectBodyPart: (bodyPart: BodyPart | 'all') => void;
}

const bodyParts: { value: BodyPart | 'all'; label: string }[] = [
  { value: 'all', label: 'All Body Parts' },
  { value: 'chest', label: 'Chest' },
  { value: 'back', label: 'Back' },
  { value: 'shoulders', label: 'Shoulders' },
  { value: 'arms', label: 'Arms' },
  { value: 'legs', label: 'Legs' },
  { value: 'core', label: 'Core' }
];

const BodyPartFilter: React.FC<BodyPartFilterProps> = ({ selectedBodyPart, onSelectBodyPart }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {bodyParts.map((part) => (
        <button
          key={part.value}
          onClick={() => onSelectBodyPart(part.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selectedBodyPart === part.value
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {part.label}
        </button>
      ))}
    </div>
  );
};

export default BodyPartFilter;