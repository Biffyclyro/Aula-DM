import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'listar-clientes',
    loadChildren: () => import('./pages/principal/clientes/listar-clientes/listar-clientes.module').then( m => m.ListarClientesPageModule)
  },
  {
    path: 'cadastrar-clientes',
    loadChildren: () => import('./pages/principal/clientes/cadastrar-clientes/cadastrar-clientes.module')
        .then( m => m.CadastrarClientesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
