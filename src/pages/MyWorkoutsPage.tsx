import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import WorkoutCard from '../components/WorkoutCard';
import { useWorkout } from '../context/WorkoutContext';
import { Plus } from 'lucide-react';

const MyWorkoutsPage: React.FC = () => {
  const { getUserWorkouts, deleteWorkout } = useWorkout();
  const workouts = getUserWorkouts();

  const handleDeleteWorkout = (id: string) => {
    if (window.confirm('Are you sure you want to delete this workout?')) {
      deleteWorkout(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My Workouts</h1>
          <Link
            to="/add-workout"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Workout
          </Link>
        </div>

        {workouts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-medium text-gray-900 mb-2">No workouts yet</h2>
            <p className="text-gray-600 mb-6">
              Start tracking your fitness journey by adding your first workout.
            </p>
            <Link
              to="/add-workout"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Your First Workout
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map(workout => (
              <WorkoutCard 
                key={workout.id} 
                workout={workout} 
                onDelete={handleDeleteWorkout} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWorkoutsPage;