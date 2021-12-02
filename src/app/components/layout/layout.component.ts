import { Component } from '@angular/core'

export interface Route {
  link: string
  title: string
  exact?: boolean
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  routes: Route[] = [
    { link: '/', title: 'Home', exact: true },
    { link: '/posts', title: 'Posts' },
    { link: '/organizer', title: 'Organizer' }
  ]
}
