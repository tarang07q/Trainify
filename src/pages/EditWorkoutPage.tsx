import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkout } from '../context/WorkoutContext';
import { ArrowLeft } from 'lucide-react';

const EditWorkoutPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getWorkout, updateWorkout } = useWorkout();
  const navigate = useNavigate();
  
  const workout = getWorkout(id || '');
  
  if (!workout) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Workout not found</h2>
            <p className="mt-2 text-gray-600">The workout you're trying to edit doesn't exist.</p>
            <button
              onClick={() => navigate('/my-workouts')}
              className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to My Workouts
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = (date: string, exercises: any[]) => {
    updateWorkout(workout.id, date, exercises);
    navigate('/my-workouts');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </button>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Workout</h1>
          
          <WorkoutForm 
            initialDate={workout.date}
            initialExercises={workout.exercises}
            onSubmit={handleSubmit}
            buttonText="Update Workout"
          />
        </div>
      </div>
    </div>
  );
};

export default EditWorkoutPage;