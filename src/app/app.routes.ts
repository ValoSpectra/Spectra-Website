import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/mainPage/mainPage.component';
import { CreditsPageComponent } from './pages/creditsPage/creditsPage.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: "",
        component: MainPageComponent
    },
    {
        path: "credits",
        component: CreditsPageComponent
    }
];