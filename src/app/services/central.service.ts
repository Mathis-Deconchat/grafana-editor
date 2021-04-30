import { Injectable } from '@angular/core';
import { DashboardFetcherService } from './dashboard-fetcher.service'
import { Dashboard } from '../dashboard';
import { Panels, DashboardTitles } from '../panels'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CentralService {


  private _arrayOfTitlesSource = new BehaviorSubject<DashboardTitles[]>([{ 'title': '', 'uid': '' }, { 'title': '', 'uid': '' }])
  arrayOfTitles = this._arrayOfTitlesSource.asObservable()


  constructor(
    private _dashboardFectherService: DashboardFetcherService,

  ) { }
  _dashboard?: Dashboard

  getList(dashboardTitles: DashboardTitles[]) {
    this._arrayOfTitlesSource.next(dashboardTitles)
  }



  loadDashboard(uid: string) {
    this._dashboardFectherService.getDashboard(uid)
      .subscribe(
        res => {
          this._dashboard = res
          console.log('Loaded')
        },
        err => {
          console.log(err)
        }
      )
  }

  displayDashboard() {
    console.log(this._dashboard)
  }


}
