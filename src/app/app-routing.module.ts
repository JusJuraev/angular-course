import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('~/routes/home-page/home-page.module')
      .then(m => m.HomePageModule)
  },
  {
    path: 'organizer',
    loadChildren: () => import('~/routes/organizer-page/organizer-page.module')
      .then(m => m.OrganizerPageModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
