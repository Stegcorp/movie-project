import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {


  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTBjZjM5MzliNTIwZTJkMTJkMjQ2MzY4M2YzY2M3NyIsInN1YiI6IjYyOTQ4NWQ1Y2RkYmJjMTMwY2JhOTE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zR9logKd1Y8xUoD672qaYkXWDaHd7ZXKHMDqZXcKQb0';

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      }
    );
    return next.handle(request);
  }
}
