import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubService } from './services/github.service';
import { User } from './models/user.model';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Контрол для поиска пользователей
  findControl = new FormControl();
  // Ошибка поиска
  error: boolean = false;
  // Найденный пользователь
  user: User = null;

  // Подключение githubService для поиска пользователя
  constructor(private githubService: GithubService) {}

  // Хук инициализации компонента
  ngOnInit() {
    this.findControl.valueChanges
      .pipe(
        // Фильтруем если введено меньше двух символов
        filter(value => value.length > 2),
        // Ставим задержку одну секунду
        debounceTime(1000),
        // Запрашиваем данные пользователя
        switchMap(value =>
          this.githubService.getUser(value).pipe(
            // Обработка ошибок
            catchError(err => {
              this.user = null;
              this.error = true;
              return EMPTY;
            })
          )
        )
      )
      // Получение данных
      .subscribe(user => {
        this.user = user;
        this.error = false;
      });
  }
}
