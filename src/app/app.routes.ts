import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children:[
            {
                path: 'view-transition',
                title: 'Columbia Indicators',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component'),
            },
            {
                path: 'change-detection',
                title: 'Kansas Indicators',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
            },
            // {
            //     path: 'control-flow',
            //     title: 'Control Flow',
            //     loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
            // },
            // {
            //     path: 'defer-options',
            //     title: 'Defer Options',
            //     loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
            // },
            // {
            //     path: 'defer-views',
            //     title: 'Defer Views',
            //     loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
            // },
            // {
            //     path: 'user/:id',
            //     title: 'User View',
            //     loadComponent: () => import('./dashboard/pages/user/user.component'),
            // },
            // {
            //     path: 'user-list',
            //     title: 'Users',
            //     loadComponent: () => import('./dashboard/pages/users/users.component'),
            // },
            {
                path:'',
                redirectTo:'control-flow',
                pathMatch: 'full'

            }
           


        ]
    },
    {
        path:'',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }

];
