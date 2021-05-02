import { Component, OnInit } from '@angular/core';
import { CentralService } from '../../services/central.service'
import { DashboardTitles } from '../../panels'

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {


  constructor(private _centralService: CentralService) { }


  ngOnInit(): void {
    this._centralService.loadInitialList()
  }

  // loadDashboard() {
  //   console.log('l')
  //   this._centralService.loadDashboard('jY7U3suMk')


  // }

  // displayList() {
  //   this._centralService.displayDashboard()
  // }







}
