{/*
  * keep all the route of app
*/}

import { createBrowserRouter } from 'react-router-dom';

import PlayGameContainer from '../components/PlayGame/PlayGameContainer';
import StartGame from '../components/StartGame/StartGame';
import HomeContainer from '../pages/Home/HomeContainer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeContainer />,
        errorElement: <div>Error 404...</div>
    },

    {
        path: '/start',
        element: <StartGame />

    },
    {
        path: '/play',
        element: <PlayGameContainer />
    },
])

export default router;