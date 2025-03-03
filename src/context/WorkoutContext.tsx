import React, { createContext, useContext, useState, useEffect } from 'react';
import { Workout, WorkoutExercise } from '../types';
import { workouts as initialWorkouts } from '../data/workouts';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from './AuthContext';

interface WorkoutContextType {
  workouts: Workout[];
  getUserWorkouts: () => Workout[];
  addWorkout: (date: string, exercises: WorkoutExercise[]) => void;
  updateWorkout: (id: string, date: string, exercises: WorkoutExercise[]) => void;
  deleteWorkout: (id: string) => void;
  getWorkout: (id: string) => Workout | undefined;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }
  return context;
};

export const WorkoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [workouts, setWorkouts] = useState<Workout[]>(initialWorkouts);
  const { currentUser } = useAuth();

  useEffect(() => {
    // Load workouts from localStorage if available
    const storedWorkouts = localStorage.getItem('workouts');
    if (storedWorkouts) {
      setWorkouts(JSON.parse(storedWorkouts));
    }
  }, []);

  // Save workouts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const getUserWorkouts = () => {
    if (!currentUser) return [];
    return workouts.filter(workout => workout.userId === currentUser.id);
  };

  const addWorkout = (date: string, exercises: WorkoutExercise[]) => {
    if (!currentUser) return;
    
    const newWorkout: Workout = {
      id: uuidv4(),
      userId: currentUser.id,
      date,
      exercises
    };
    
    setWorkouts([...workouts, newWorkout]);
  };

  const updateWorkout = (id: string, date: string, exercises: WorkoutExercise[]) => {
    setWorkouts(workouts.map(workout => 
      workout.id === id ? { ...workout, date, exercises } : workout
    ));
  };

  const deleteWorkout = (id: string) => {
    setWorkouts(workouts.filter(workout => workout.id !== id));
  };

  const getWorkout = (id: string) => {
    return workouts.find(workout => workout.id === id);
  };

  const value = {
    workouts,
    getUserWorkouts,
    addWorkout,
    updateWorkout,
    deleteWorkout,
    getWorkout
  };

  return <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>;
};