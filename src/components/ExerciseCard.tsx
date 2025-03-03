import React from 'react';
import { Exercise } from '../types';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={exercise.imageUrl} 
        alt={exercise.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{exercise.name}</h3>
        <p className="text-sm text-gray-600 capitalize mb-2">{exercise.bodyPart}</p>
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">{exercise.description}</p>
        <div className="flex justify-between items-center">
          <Link 
            to={`/exercise/${exercise.id}`}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
          >
            View Details
          </Link>
          <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700">
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;