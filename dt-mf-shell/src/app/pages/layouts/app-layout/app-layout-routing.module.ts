import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
const routes: Routes = [
  { 
    path: '', component: AppLayoutComponent,
    children: [
      {
        path: 'angular',
        loadChildren: () => loadRemoteModule({ type: 'module', remoteEntry: 'http://localhost:4201/remoteEntry.js', exposedModule: './AngularModule' }).then((m) => m.AngularModule)
      },
      {
        path: 'react',
        component: WebComponentWrapper,
        data: {
          remoteEntry: 'http://localhost:4204/remoteEntry.js',
          remoteName: 'react',
          exposedModule: './web-components',
          elementName: 'react-element'
        } as WebComponentWrapperOptions
      },
      {
        path: 'vue',
        component: WebComponentWrapper,
        data: {
          remoteEntry: 'http://localhost:4203/remoteEntry.js',
          remoteName: 'vue',
          exposedModule: './web-components',
          elementName: 'vue-element'
        } as WebComponentWrapperOptions
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
