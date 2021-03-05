import React from 'react';
import { LanguageProvider } from './Language';
import Navbar from './Navbar';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  );
}
