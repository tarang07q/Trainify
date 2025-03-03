import { Workout } from '../types';

// This is a mock database for workouts
// In a real application, this would be stored in a database
export const workouts: Workout[] = [
  {
    id: '1',
    userId: '1',
    date: '2025-06-01',
    exercises: [
      {
        exerciseId: 'chest-1',
        sets: 3,
        reps: 10,
        weight: 135,
        notes: 'Felt good, increased weight from last time'
      },
      {
        exerciseId: 'chest-3',
        sets: 3,
        reps: 15,
        weight: 0,
        notes: 'Did these until failure on the last set'
      }
    ]
  },
  {
    id: '2',
    userId: '1',
    date: '2025-06-03',
    exercises: [
      {
        exerciseId: 'back-1',
        sets: 3,
        reps: 8,
        weight: 0,
        notes: 'Used assisted pull-up machine'
      },
      {
        exerciseId: 'back-2',
        sets: 3,
        reps: 12,
        weight: 95,
        notes: 'Focused on form'
      }
    ]
  }
];