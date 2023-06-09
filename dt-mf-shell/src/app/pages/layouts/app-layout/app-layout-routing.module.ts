import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { 
    path: '', component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => loadRemoteModule({ type: 'module', remoteEntry: 'http://localhost:4201/remoteEntry.js', exposedModule: './AngularModule' }).then((m) => m.AngularModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
