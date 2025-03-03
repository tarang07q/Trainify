import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkout } from '../context/WorkoutContext';
import { ArrowLeft } from 'lucide-react';

const AddWorkoutPage: React.FC = () => {
  const { addWorkout } = useWorkout();
  const navigate = useNavigate();

  const handleSubmit = (date: string, exercises: any[]) => {
    addWorkout(date, exercises);
    navigate('/my-workouts');
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </button>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Workout</h1>
          
          <WorkoutForm 
            onSubmit={handleSubmit}
            buttonText="Add Workout"
          />
        </div>
      </div>
    </div>
  );
};

export default AddWorkoutPage;
