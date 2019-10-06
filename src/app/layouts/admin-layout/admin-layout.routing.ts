import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UsersComponent } from '../../pages/user/users/users.component';
import { CategoriesComponent } from '../../pages/categorie/categories/categories.component';
// import { UsersComponent } from '../../pages/user/users/users.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',        component: DashboardComponent },
    { path: 'users',        component: UsersComponent },
    { path: 'category',         component: CategoriesComponent }
];
