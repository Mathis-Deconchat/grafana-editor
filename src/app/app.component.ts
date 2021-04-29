import { Component } from '@angular/core';
import { DashboardFetcherService } from './services/dashboard-fetcher.service'
import { Dashboard } from './dashboard'
import { Panels } from './panels';
import { DashboardSearch } from './dashboard-search';

interface DashTitle {
  title: string,
  viewTitle: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private DashboardFetcherService: DashboardFetcherService) { }

  arrayOfDashboard: DashboardSearch[] = [];
  selectedDashboard = '';


  ngOnInit(): void {

    this.DashboardFetcherService.getAllDashboard()
      .subscribe(response => {
        let filteredResponse = response.filter(response => {
          return response.type = 'dash-db'
        })
        this.arrayOfDashboard = filteredResponse;
      })
  }


  arrayOfPanels: Panels[] = [];
  dashboard?: Dashboard;
  arrayOfTitles: string[] = [];

  changeSelect(event: any) {

    this.loadJson(event.value)
  }

  loadJson(uid: string) {
    this.arrayOfPanels = [];
    this.DashboardFetcherService.getDashboard(uid)
      .subscribe(response => {

        this.dashboard = response;
        localStorage.clear()
        localStorage.setItem('currentDashBoard', JSON.stringify(this.dashboard))


        response?.dashboard.panels.map((e, i) => {  // Map on Panels

          let arrayOfSql: string[] = [];

          let title: string = e.title
          e.targets?.map(v => {                     // Map on each targets of the panel
            arrayOfSql.push(v.rawSql)
          })

          this.arrayOfTitles.push(title)
          let panelObject = {
            'id': i,
            'title': title,
            'sql': arrayOfSql,
          }

          this.arrayOfPanels.push(panelObject)

        })
      })


  }



}













// let arrayOfSql = [];

        // response?.dashboard?.panels?.map(e => {
        //  e.targets[0].
        // })

        // let dashboardObject: Dashboard = {
        //   dashboard: {
        //     uid: uid,
        //     title: response?.dashboard?.title,
        //     // panels: [{
        //     //   sql: response?.dashboard?.panels?.rawsql
        //     // }]
        //   },
        // };

        // response?.dashboard?.





        // this.dashboard = dashboardObject;

        // console.log(uid)

