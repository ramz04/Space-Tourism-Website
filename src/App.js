import Hero from "./components/Home/Hero";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Destination from "./components/Destination/Destination";
import Technology from './components/Technology/Technology'
import Crew from './components/Crew/Crew'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Hero />
    },
    {
      path: '/destination',
      element: <Destination />
    },
    {
      path: '/crew',
      element: <Crew />
    },
    {
      path: '/technology',
      element: <Technology />
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
