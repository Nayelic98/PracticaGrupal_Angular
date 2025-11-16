import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomePages } from './features/HomePages/HomePages';
import { PerfilPage } from './features/perfilPage/perfilPage';

@Component({
    selector: 'app-home',
    template: `<h1>Home</h1>`
})
export class HomeComponent {}

export const routes: Routes = [
    {
        path: "",
        component: HomePages
    },
    {
        path: "perfil",
        component: PerfilPage
    }
    
];
