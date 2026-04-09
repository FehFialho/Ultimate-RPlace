import { Routes } from '@angular/router';
import { LoginPage } from './features/login-page/login-page';
import { CanvasPage } from './features/canvas-page/canvas-page';
import { NotFoundPage } from './features/not-found-page/not-found-page';

export const routes: Routes = [
    {path: "", component:CanvasPage},
    {path: "login", component:LoginPage},
    {path: "**", component:NotFoundPage}
];
