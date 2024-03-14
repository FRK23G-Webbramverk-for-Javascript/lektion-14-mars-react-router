import { createBrowserRouter } from 'react-router-dom';

import About from '../pages/About';
import Projects from '../pages/Projects';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
    {
      path: '/om',
      element: <About />
    },
    {
      path: '/project',
      element: <Projects />
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default router;