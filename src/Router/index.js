import Root from '../App';
import Home from '../Views/Home';
import About from '../Views/About';

export const routes = [
    {
        component: Root,
        routes: [
            {
                component: Home,
                exact: true,
                path: '/'
            },
            {
                component: About,
                exact: true,
                path: '/about'
            }
        ]
    }
];
