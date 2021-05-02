import { Injectable } from '@angular/core';
import { DashboardFetcherService } from './dashboard-fetcher.service'
import { Dashboard } from '../dashboard';
import { Panels, DashboardTitles } from '../panels'
import { BehaviorSubject } from 'rxjs';
import { DashboardSearch } from '../dashboard-search';


@Injectable({
  providedIn: 'root'
})
export class CentralService {


  private _arrayOfTitlesSource = new BehaviorSubject<DashboardTitles[]>([{ 'title': '', 'uid': '' }, { 'title': '', 'uid': '' }])
  arrayOfTitles = this._arrayOfTitlesSource.asObservable()


  constructor(
    private _dashboardFetcherService: DashboardFetcherService,

  ) { }
  _dashboard?: Dashboard
  _dashboardList?: DashboardSearch[]
  _panelsTitles?: DashboardTitles[]

  loadInitialList() {
    this._dashboardFetcherService.getAllDashboard()
      .subscribe(
        res => {
          let filteredResponse = res.filter(res => {
            return res.type = 'dash-db'
          })
          return filteredResponse;
        },
        err => {
          console.log(err)
        })
  }

  // getList(dashboardTitles: DashboardTitles[]) {
  //   this._arrayOfTitlesSource.next(dashboardTitles)
  // }



  // loadDashboard(uid: string) {
  //   this._dashboardFectherService.getDashboard(uid)
  //     .subscribe(
  //       res => {
  //         this._dashboard = res
  //         console.log('Loaded')
  //       },
  //       err => {
  //         console.log(err)
  //       }
  //     )
  // }

  // displayDashboard() {
  //   console.log(this._dashboard)
  // }


}
