import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { OtComponent } from './components/ot/ot.component';

const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'ot', component: OtComponent },
    { path: 'starting', component: GettingStartedComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}