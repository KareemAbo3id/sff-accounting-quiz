import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootPage from './pages/RootPage';
import McqQuizPage from './pages/quizzesPages/McqQuizPage';
import FinishPage from './pages/FinishPage';
import NavBar from './components/common/NavBar';
import SffFooter from './components/common/SffFooter';
import ErrorPage from './pages/ErrorRoute/ErrorPage';
//////////////////////////////////////////////////

// React Routers:
const globalRouters = createBrowserRouter([
  { path: '/', element: <RootPage /> },
  { path: '/quiz', element: <McqQuizPage /> },
  { path: '/finish', element: <FinishPage /> },
  { path: '*', element: <ErrorPage /> },
]);

//////////////////////////////////////////////////
// MAIN UI FUNCTION //////////////////////////////
export default function App() {
  return (
    <div style={{ fontFamily: 'cairo' }}>
      <NavBar navTitle="إختبار مقابلة عمل - قسم المالية" />
      <RouterProvider router={globalRouters} />
      <SffFooter />
    </div>
  );
}
