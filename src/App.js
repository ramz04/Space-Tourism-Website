import Hero from "./components/Home/Hero";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Destination from "./components/Destination/Destination";
import Technology from "./components/Technology/Technology";
import Crew from "./components/Crew/Crew";
import ErrorPage from "./ErrorPage";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Hero />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/destination',
      element: <Destination />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/crew',
      element: <Crew />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/technology',
      element: <Technology />,
      errorElement: <ErrorPage />,
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
