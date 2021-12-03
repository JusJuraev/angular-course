import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { AlertService } from '~/admin/shared/services/alert.service'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() delay = 5000

  public text: string
  public type = 'success'

  aSub: Subscription

  constructor(private alert: AlertService) { }

  ngOnInit(): void {
    this.aSub = this.alert.alert$.subscribe(alert => {
      this.text = alert.text
      this.type = alert.type

      const timeout = setTimeout(() => {
        clearTimeout(timeout)
        this.text = ''
      }, this.delay)
    })
  }

  ngOnDestroy () {
    if (this.aSub) this.aSub.unsubscribe()
  }
}
