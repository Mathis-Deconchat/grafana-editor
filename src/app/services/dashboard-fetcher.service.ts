import { Injectable } from '@angular/core';
import { Dashboard } from '../dashboard';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dashboard1 } from '../dashboard'
import { DashboardSearch } from '../dashboard-search'


@Injectable({
  providedIn: 'root'
})
export class DashboardFetcherService {

  constructor(private http: HttpClient) { }
  private url = "http://192.168.99.61/grafana/api/"

  getDashboard(uid?: string): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.url + `dashboards/uid/${uid}`)
  }

  postDashboard(dashboard: Dashboard1): Observable<Dashboard1> {
    return this.http.post<Dashboard1>(this.url + 'dashboards/db', { 'dashboard': dashboard })
  }

  getAllDashboard(): Observable<DashboardSearch[]> {
    return this.http.get<DashboardSearch[]>(this.url + 'search')
  }

}
