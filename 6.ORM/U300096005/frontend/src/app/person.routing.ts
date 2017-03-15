/**
 * Created by gary_ on 2017-03-15.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';


const appRoutes: Routes = [
  {
    path: '',
    component: PersonComponent
  },
  {
    path: 'person',
    component: PersonComponent
  }

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
