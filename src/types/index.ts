export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

export interface Exercise {
  id: string;
  name: string;
  bodyPart: BodyPart;
  description: string;
  imageUrl: string;
  animationUrl: string;
  instructions: string[];
}

export interface Workout {
  id: string;
  userId: string;
  date: string;
  exercises: WorkoutExercise[];
}

export interface WorkoutExercise {
  exerciseId: string;
  sets: number;
  reps: number;
  weight: number;
  notes?: string;
}

export type BodyPart = 'chest' | 'back' | 'shoulders' | 'arms' | 'legs' | 'core';