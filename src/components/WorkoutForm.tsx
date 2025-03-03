import React, { useState, useEffect } from 'react';
import { Exercise, WorkoutExercise } from '../types';
import { exercises } from '../data/exercises';
import { Plus, Trash2 } from 'lucide-react';

interface WorkoutFormProps {
  initialDate?: string;
  initialExercises?: WorkoutExercise[];
  onSubmit: (date: string, exercises: WorkoutExercise[]) => void;
  buttonText: string;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({ 
  initialDate = new Date().toISOString().split('T')[0], 
  initialExercises = [], 
  onSubmit,
  buttonText
}) => {
  const [date, setDate] = useState(initialDate);
  const [workoutExercises, setWorkoutExercises] = useState<WorkoutExercise[]>(initialExercises);

  const addExercise = () => {
    setWorkoutExercises([
      ...workoutExercises,
      {
        exerciseId: '',
        sets: 3,
        reps: 10,
        weight: 0,
        notes: ''
      }
    ]);
  };

  const removeExercise = (index: number) => {
    setWorkoutExercises(workoutExercises.filter((_, i) => i !== index));
  };

  const updateExercise = (index: number, field: keyof WorkoutExercise, value: any) => {
    const updatedExercises = [...workoutExercises];
    updatedExercises[index] = {
      ...updatedExercises[index],
      [field]: value
    };
    setWorkoutExercises(updatedExercises);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(date, workoutExercises);
  };

  const getExerciseName = (id: string) => {
    const exercise = exercises.find(ex => ex.id === id);
    return exercise ? exercise.name : '';
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Workout Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Exercises</h3>
          <button
            type="button"
            onClick={addExercise}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Exercise
          </button>
        </div>

        {workoutExercises.length === 0 && (
          <p className="text-gray-500 text-center py-4">No exercises added yet. Click "Add Exercise" to start.</p>
        )}

        {workoutExercises.map((exercise, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-md">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-md font-medium text-gray-700">
                {exercise.exerciseId ? getExerciseName(exercise.exerciseId) : `Exercise ${index + 1}`}
              </h4>
              <button
                type="button"
                onClick={() => removeExercise(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`exercise-${index}`} className="block text-sm font-medium text-gray-700">
                  Exercise
                </label>
                <select
                  id={`exercise-${index}`}
                  value={exercise.exerciseId}
                  onChange={(e) => updateExercise(index, 'exerciseId', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                >
                  <option value="">Select an exercise</option>
                  {exercises.map((ex) => (
                    <option key={ex.id} value={ex.id}>
                      {ex.name} ({ex.bodyPart})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label htmlFor={`sets-${index}`} className="block text-sm font-medium text-gray-700">
                    Sets
                  </label>
                  <input
                    type="number"
                    id={`sets-${index}`}
                    value={exercise.sets}
                    onChange={(e) => updateExercise(index, 'sets', parseInt(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    min="1"
                    required
                  />
                </div>
                <div>
                  <label htmlFor={`reps-${index}`} className="block text-sm font-medium text-gray-700">
                    Reps
                  </label>
                  <input
                    type="number"
                    id={`reps-${index}`}
                    value={exercise.reps}
                    onChange={(e) => updateExercise(index, 'reps', parseInt(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    min="1"
                    required
                  />
                </div>
                <div>
                  <label htmlFor={`weight-${index}`} className="block text-sm font-medium text-gray-700">
                    Weight (lbs)
                  </label>
                  <input
                    type="number"
                    id={`weight-${index}`}
                    value={exercise.weight}
                    onChange={(e) => updateExercise(index, 'weight', parseInt(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    min="0"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor={`notes-${index}`} className="block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <textarea
                  id={`notes-${index}`}
                  value={exercise.notes || ''}
                  onChange={(e) => updateExercise(index, 'notes', e.target.value)}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default WorkoutForm;