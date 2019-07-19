import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  showDetail: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onShowDetail(): void {
    this.showDetail = !this.showDetail;
  }

}
