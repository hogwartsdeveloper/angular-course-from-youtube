import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, throwError, map, delay} from "rxjs";
import {Cars} from "./app.component";

interface Title {
  value: string;
}

@Injectable()
export class CarsService {
  cars = [
    {
      id: 1,
      name: 'Lexus'
    },
    {
      id: 2,
      name: 'Tesla'
    },
    {
      id: 3,
      name: 'Tayota'
    },
    {
      id: 4,
      name: 'BMW'
    }
  ]
  constructor(private http: HttpClient) {
  }

  getTitle(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/title').pipe(map(e => e.value), delay(3000))
  }

  getCars(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8'
    });
    return this.http.get('http://localhost:3000/cars', {
      headers
    }).pipe(catchError((err) => {
      return throwError('сервер не доступен');
      // return throwError(() => new Error())
    }))
  }

  addCar(name: string, color: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8'
    });
    const data = { name, color }
    return this.http.post('http://localhost:3000/cars', data, {headers});
  }

  updateCar(id: number, name: string, color: string): Observable<any> {
    const data = { name, color }
    return this.http.put(`http://localhost:3000/cars/${id}`, data)
  }

  delete(car: Cars): Observable<any> {
    return this.http.delete(`http://localhost:3100/cars/${car.id}`);
  }
}
