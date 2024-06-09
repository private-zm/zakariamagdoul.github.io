import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import Main from './pages/Main/Main';
import Project from './pages/Project/Project';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>

        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default App;
