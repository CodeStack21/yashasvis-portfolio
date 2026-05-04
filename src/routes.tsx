import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import AchievementsPage from './pages/AchievementsPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'achievements', element: <AchievementsPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

export default router;
