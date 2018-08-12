import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class GithubService {

  // Подключаем модуль для работы с http
  constructor(private http: HttpClient) {}

  // Метод для запроса пользователя
  getUser(name: string): Observable<User> {
    const url = `https://api.github.com/users/${name}`;
    return this.http.get<User>(url);
  }
}
