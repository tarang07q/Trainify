import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { WorkoutProvider } from './context/WorkoutContext';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ExerciseDetailPage from './pages/ExerciseDetailPage';
import MyWorkoutsPage from './pages/MyWorkoutsPage';
import AddWorkoutPage from './pages/AddWorkoutPage';
import EditWorkoutPage from './pages/EditWorkoutPage';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <WorkoutProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/exercise/:id" 
              element={
                <ProtectedRoute>
                  <ExerciseDetailPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/my-workouts" 
              element={
                <ProtectedRoute>
                  <MyWorkoutsPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/add-workout" 
              element={
                <ProtectedRoute>
                  <AddWorkoutPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/edit-workout/:id" 
              element={
                <ProtectedRoute>
                  <EditWorkoutPage />
                </ProtectedRoute>
              } 
            />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </WorkoutProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;