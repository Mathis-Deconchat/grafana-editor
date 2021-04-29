import { Component, OnInit, Input } from '@angular/core';
import { Dashboard, Dashboard1 } from '../../dashboard';
import { DashboardFetcherService } from '../../dashboard-fetcher.service';
import { format } from 'sql-formatter';

import {
  MonacoEditorModule, NgxMonacoEditorConfig
} from "ngx-monaco-editor";


@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {
  constructor(private DashboardFetcherService: DashboardFetcherService, private MonacoEditorModule: MonacoEditorModule) {

  }


  ngOnInit(): void {

    this.DashboardFetcherService.getDashboard(this.uid)
      .subscribe(response => {
        console.log(response)
        this.dashboard = response;
        this.code = format(this.dashboard.dashboard.panels[this.panelIndex].targets[this.targetIndex].rawSql, {
          uppercase: true
        })
        this.title = this.dashboard.dashboard.panels[this.panelIndex].title
      })
  }

  @Input()
  uid?: string;

  @Input()
  targetIndex: number = 0;

  @Input()
  panelIndex: number = 0;

  code!: string;
  title!: string
  i = 0
  dashboard?: Dashboard;

  savePanel() {
    if (this.dashboard) {


      let version: number = this.dashboard?.dashboard.version
      let copyOfDashboard = this.dashboard


      copyOfDashboard.dashboard.panels[this.panelIndex].targets[this.targetIndex].rawSql = this.code

      copyOfDashboard.dashboard.version = this.dashboard.dashboard.version
      console.log('Version:' + copyOfDashboard.dashboard.version)

      console.log(copyOfDashboard)
      this.DashboardFetcherService.postDashboard(copyOfDashboard.dashboard)
        .subscribe(
          res => { console.log(res) },
          err => {
            copyOfDashboard.dashboard.version = copyOfDashboard.dashboard.version + 1
            this.DashboardFetcherService.postDashboard(copyOfDashboard.dashboard)
              .subscribe(
                res => { console.log(res) },
                err => { console.log(err) })
          }
        )
      this.i = 1
    }


  }

  resetPanel() {
    let storedCurrentDashboard = localStorage.getItem('currentDashBoard')
    if (storedCurrentDashboard) {
      let currentDashboard: Dashboard = JSON.parse(storedCurrentDashboard)
      this.code = format(currentDashboard.dashboard.panels[this.panelIndex].targets[this.targetIndex].rawSql, {
        uppercase: true
      })
    }



  }





  editorOptions = { theme: 'vs-dark', language: 'sql' };
  onInit(editor: any) {
    editor.getAction('editor.action.formatDocument').run();

  }


  // code: string = 'SELECT * FROM glpi_tickets\nHello';

}
