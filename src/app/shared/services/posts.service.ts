import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Post, PostCreateResponse } from '~/models/post'
import { environment } from '~/environments/environment'

@Injectable({ providedIn: 'root' })
export class PostsService {
  static url = `${environment.apiUrl}/posts`

  constructor (private http: HttpClient) {
  }

  create (post: Omit<Post, 'id'>): Observable<Post> {
    return this.http.post<PostCreateResponse>(`${PostsService.url}.json`, post)
      .pipe(map((response) => ({
        ...post,
        id: response.name,
        date: new Date(post.date)
      })))
  }

  getPost (id: string): Observable<Post> {
    return this.http.get<Post>(`${PostsService.url}/${id}.json`)
      .pipe(map(post => {
        return {
          ...post,
          id,
          date: new Date(post.date)
        }
      }))
  }

  getALl (): Observable<Post[]> {
    return this.http.get<Record<string, Post>>(`${PostsService.url}.json`)
      .pipe(map(response => {
        if (!response) return []
        return Object
          .keys(response)
          .map(id => ({
            ...response[id],
            id: id,
            date: new Date(response[id].date)
          }))
      }))
  }

  remove (id: string): Observable<void> {
    return this.http.delete<void>(`${PostsService.url}/${id}.json`)
  }
}
