import { Component, OnInit, Input } from '@angular/core';
import { Dashboard } from '../../dashboard'

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {


  @Input()
  code!: string;

  @Input()
  dashboard?: Dashboard;

  @Input()
  targetIndex: number = 0;

  @Input()
  panelId: number = 0;

  displayDashboard() {
    console.log(this.code)
    console.log(this.targetIndex)
    console.log(this.panelId)


    if (!(this.targetIndex >= 0 && this.panelId >= 0)) {
      this.targetIndex = 0
      this.panelId = 0
    }


    if (this.dashboard) {
      let copyOfDashboard = this.dashboard
      copyOfDashboard.dashboard.panels[this.panelId].targets[this.targetIndex].rawSql = this.code
      copyOfDashboard.dashboard.version = this.dashboard.dashboard.version + 1
      console.log(copyOfDashboard)


    }


  }
  constructor() { }

  ngOnInit(): void {
  }

  editorOptions = { theme: 'vs-dark', language: 'sql' };
  // code: string = 'SELECT * FROM glpi_tickets\nHello';

}
