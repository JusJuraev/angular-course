import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SharedModule } from '~/shared/shared.module'
import { CalendarComponent } from './components/calendar/calendar.component'
import { SelectorComponent } from './components/selector/selector.component'
import { OrganizerComponent } from './components/organizer/organizer.component'
import { OrganizerPageComponent } from './organizer-page.component'

@NgModule({
  declarations: [
    OrganizerPageComponent,
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: OrganizerPageComponent }
    ])
  ],
  exports: [RouterModule]
})
export class OrganizerPageModule {

}
