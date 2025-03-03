import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { exercises } from '../data/exercises';
import { ArrowLeft, Info, CheckCircle } from 'lucide-react';

const ExerciseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = exercises.find(ex => ex.id === id);

  if (!exercise) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-orange-400">Exercise not found</h2>
          <p className="mt-2 text-gray-300">The exercise you're looking for doesn't exist.</p>
          <Link to="/dashboard" className="mt-4 inline-flex items-center text-orange-400 hover:text-orange-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/dashboard" className="inline-flex items-center text-orange-400 hover:text-orange-500 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Exercises
        </Link>
        
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={exercise.imageUrl} 
                alt={exercise.name} 
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <div className="flex items-center mb-2">
                <span className="inline-block bg-orange-400 text-gray-900 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                  {exercise.bodyPart}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-orange-400 mb-2">{exercise.name}</h1>
              <p className="text-gray-300 mb-6">{exercise.description}</p>
              
              <div className="mb-6">
                <h2 className="flex items-center text-lg font-semibold text-gray-100 mb-3">
                  <Info className="h-5 w-5 mr-2 text-orange-400" />
                  Instructions
                </h2>
                <ol className="space-y-2">
                  {exercise.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold text-gray-100 mb-3">3D Animation</h2>
                <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center h-64">
                  <img 
                    src={exercise.animationUrl} 
                    alt={`${exercise.name} animation`} 
                    className="max-h-full object-contain"
                  />
                  <p className="text-gray-400 text-sm italic">
                    (In a real app, this would be a 3D animation)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetailPage;
