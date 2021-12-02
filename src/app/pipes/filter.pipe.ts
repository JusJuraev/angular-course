import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform<T extends object, R extends keyof T> (value: T[], filterKey: R, search: string): T[] {
    const searchQuery = search?.trim().toLowerCase()
    if (!searchQuery) return value

    return value.filter(item => {
      const filteringKey = item[filterKey] as unknown as string
      return filteringKey.toLowerCase().includes(searchQuery)
    })
  }
}
