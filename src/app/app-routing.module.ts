import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { HomePageComponent } from '~/routes/home-page/home-page.component'
import { TodosPageComponent } from '~/routes/todos-page/todos-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'todos',
    component: TodosPageComponent
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
