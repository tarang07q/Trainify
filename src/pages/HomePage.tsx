import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ClipboardList, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-orange-400">
            Trainify Workout Tracker
          </h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-300">
            Track your fitness journey, monitor progress, and achieve your goals with our comprehensive workout tracking platform.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-orange-400 hover:bg-orange-500 md:text-lg"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 md:text-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-orange-400">Why Choose Trainify?</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Our platform helps you track and optimize your fitness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { title: "Extensive Exercise Library", Icon: Dumbbell, desc: "Access a detailed database of exercises with animations and form guides." },
            { title: "Personalized Workouts", Icon: ClipboardList, desc: "Create and track custom workout routines tailored to your fitness goals." },
            { title: "Progress Tracking", Icon: BarChart3, desc: "Monitor your performance with visual stats to stay motivated." }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg border-t-4 border-orange-400">
              <div className="flex justify-center">
                <feature.Icon className="h-12 w-12 text-orange-400" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-100 text-center">{feature.title}</h3>
              <p className="mt-2 text-gray-300 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-orange-400">Get Started Today</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Join thousands of fitness enthusiasts transforming their workout routines with Trainify.
          </p>
          <div className="mt-6">
            <Link
              to="/signup"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-orange-400 hover:bg-orange-500 md:text-lg"
            >
              Create Your Free Account
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Dumbbell className="h-8 w-8 mr-2 text-orange-400" />
            <span className="text-xl font-bold text-white">Trainify</span>
          </div>
          <div className="text-sm">&copy; {new Date().getFullYear()} Trainify Workout Tracker. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
