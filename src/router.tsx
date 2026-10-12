import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/AppLayout';

import { Home } from './pages/home/home';
import { Favorites } from './pages/favorites/favorites';
import { Deals } from './pages/deals/deals';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/favorites',
                element: <Favorites />
            },
            {
                path:'/deals',
                element: <Deals />
            }

        ]
    }
])
