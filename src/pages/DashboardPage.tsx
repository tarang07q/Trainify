import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ExerciseCard from '../components/ExerciseCard';
import BodyPartFilter from '../components/BodyPartFilter';
import { exercises } from '../data/exercises';
import { BodyPart } from '../types';
import { Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const DashboardPage: React.FC = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState<BodyPart | 'all'>('all');
  const { currentUser } = useAuth();

  const filteredExercises = selectedBodyPart === 'all'
    ? exercises
    : exercises.filter(exercise => exercise.bodyPart === selectedBodyPart);

  return (
    <div className="min-h-screen bg-gray-200 text-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-orange-500">Welcome, {currentUser?.name || 'User'}!</h1>
            <p className="mt-1 text-sm text-gray-600">
              Browse exercises or track your workouts
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Link
              to="/my-workouts"
              className="inline-flex items-center px-4 py-2 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-orange-500 bg-white hover:bg-gray-100"
            >
              My Workouts
            </Link>
            <Link
              to="/add-workout"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Workout
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Exercise Library</h2>
          <p className="text-gray-700 mb-6">
            Browse our comprehensive collection of exercises organized by body part. Click on any exercise to view detailed instructions and animations.
          </p>
          
          <BodyPartFilter 
            selectedBodyPart={selectedBodyPart} 
            onSelectBodyPart={setSelectedBodyPart} 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredExercises.map(exercise => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
