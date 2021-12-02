import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'camel' })
export class CamelCasePipe implements PipeTransform {
  transform (value: string): string {
    if (!value) return ''

    return value
      .replace(/_/g, ' ')
      .replace(/-/g, ' ')
      .replace(/(?:^\w|[A-Z]|_|\b\w)/g, (letter, index) =>
        index === 0 ? letter.toLowerCase() : letter.toUpperCase())
      .replace(/\s+/g, '')
  }
}
