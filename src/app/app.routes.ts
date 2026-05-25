import { Routes } from '@angular/router';
import {HomeComponent} from './puntos/home/home'
import {PuntoA} from './puntos/puntoA/puntoA';
import { PuntoB } from './puntos/puntoB/puntoB';
import { PuntoC } from './puntos/puntoC/puntoC';
import { PuntoD } from './puntos/puntoD/puntoD';
import {PuntoE} from'./puntos/puntoE/puntoE';
export const routes: Routes = [
    { path: '',component: HomeComponent},
    {path: 'PuntoA', component:PuntoA},
    {path:'PuntoB', component:PuntoB},
    {path:'PuntoC', component:PuntoC},
    {path:'PuntoD', component:PuntoD },
    {path:'PuntoE',component:PuntoE}
];
