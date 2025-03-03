import React from 'react';
import { Workout } from '../types';
import { exercises } from '../data/exercises';
import { Calendar, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WorkoutCardProps {
  workout: Workout;
  onDelete: (id: string) => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, onDelete }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getExerciseName = (id: string) => {
    const exercise = exercises.find(ex => ex.id === id);
    return exercise ? exercise.name : 'Unknown Exercise';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">{formatDate(workout.date)}</h3>
          </div>
          <div className="flex space-x-2">
            <Link 
              to={`/edit-workout/${workout.id}`}
              className="text-indigo-600 hover:text-indigo-800"
            >
              <Edit className="h-5 w-5" />
            </Link>
            <button 
              onClick={() => onDelete(workout.id)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-md font-medium text-gray-700 mb-2">Exercises:</h4>
        <ul className="space-y-2">
          {workout.exercises.map((exercise, index) => (
            <li key={index} className="text-sm text-gray-600">
              <div className="flex justify-between">
                <span className="font-medium">{getExerciseName(exercise.exerciseId)}</span>
                <span>{exercise.sets} sets × {exercise.reps} reps {exercise.weight > 0 ? `@ ${exercise.weight} lbs` : ''}</span>
              </div>
              {exercise.notes && (
                <p className="text-xs text-gray-500 mt-1 italic">{exercise.notes}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutCard;