import { Component, forwardRef, Provider } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CounterComponent),
  multi: true
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class CounterComponent implements ControlValueAccessor {
  counter = 0

  private onChange = (value: number) => {}

  setCounter (value: number) {
    this.counter = value

    this.onChange(value)
  }

  registerOnChange (fn: any): void {
    this.onChange = fn
  }

  registerOnTouched (fn: any): void {
  }

  writeValue (value: number): void {
    this.counter = value
  }
}
