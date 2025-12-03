import { Routes } from '@angular/router';
import { Acceuil } from './acceuil/acceuil';
import { Login } from './login/login';
import { CreateExpert } from './create-expert/create-expert';
import { ConfirmeExpert } from './confirme-expert/confirme-expert';

export const routes: Routes = [
    {path : '', component : Acceuil},
    {path : 'login', component : Login},
    {path : 'create-expert', component : CreateExpert},
    {path : 'confirme-expert', component : ConfirmeExpert}
];
