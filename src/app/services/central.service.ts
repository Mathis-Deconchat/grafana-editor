import { Injectable } from '@angular/core';
import { DashboardFetcherService } from './dashboard-fetcher.service'
import { Dashboard } from '../dashboard';
import { Panels, DashboardTitles } from '../panels'
import { BehaviorSubject, EMPTY } from 'rxjs';
import { DashboardSearch } from '../dashboard-search';


@Injectable({
  providedIn: 'root'
})
export class CentralService {

  _dashboardList?: DashboardSearch[]
  private _rxDashboardList = new BehaviorSubject<DashboardSearch[]>([])

  _selectedDashboard: string = ''
  private _rxSelectedDashboard = new BehaviorSubject<string>('')

  _dashboard?: Dashboard
  private _rxDashboardContent = new BehaviorSubject<any>('')

  constructor(private _dashboardFetcherService: DashboardFetcherService,) {
    this._selectedDashboard
    this.loadInitialTitles()

    this._rxSelectedDashboard.next(this._selectedDashboard)
    this


  }



  _panelsTitles?: Panels[]



  get titles() {
    return this._rxDashboardList.asObservable()
  }

  get selectedDashboard() {
    return this._rxSelectedDashboard.asObservable()
  }

  get dashboard() {
    return this._rxDashboardContent.asObservable()
  }




  loadInitialTitles() {
    this._dashboardFetcherService.getAllDashboard()
      .subscribe(response => {
        let filteredResponse = response.filter(response => {
          return response.type = 'dash-db'
        })
        this._rxDashboardList.next(filteredResponse);
      })
  }

  updateSelectedDashboard(uid: string) {
    this._rxDashboardContent.next('')
    this._rxSelectedDashboard.next('')

    this._rxSelectedDashboard.next(uid)
    this._dashboardFetcherService.getDashboard(uid)
      .subscribe(
        res => {
          this._rxDashboardContent.next(res)
        },
        err => {
          console.log(err)
        }
      )
  }








  // private _arrayOfTitlesSource = new BehaviorSubject<Dashboard>([{ 'title': '', 'uid': '' }, { 'title': '', 'uid': '' }])
  // arrayOfTitles = this._arrayOfTitlesSource.asObservable()




  // loadInitialList() {
  //   this._dashboardFetcherService.getAllDashboard()
  //     .subscribe(
  //       res => {
  //         let filteredResponse = res.filter(res => {
  //           return res.type = 'dash-db'
  //         })
  //         return filteredResponse;
  //       },
  //       err => {
  //         console.log(err)
  //       })
  // }

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
