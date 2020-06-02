import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private router: Router) { }

  getGraphData(): Observable<any> {
    return this.http.get<any>('http://www.mocky.io/v2/5ed635f13400000f8a06d820');
  }

  getTableData(): Observable<any> {
    return this.http.get<any>('http://www.mocky.io/v2/5ed63696340000560006d824');
  }
}
