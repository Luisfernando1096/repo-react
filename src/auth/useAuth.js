// useAuth.js
import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

export const useAuth = () => {
  return useContext(DataContext);
};
