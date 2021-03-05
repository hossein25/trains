import { createContext, useContext } from 'react';

const LanguageContext = createContext();
export const useLanguageContext = () => useContext(LanguageContext);
export default LanguageContext;
