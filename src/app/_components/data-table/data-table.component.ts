import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/_model/person';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  people: IPerson[] = [];
  tmpPeople: IPerson[] = [];
  columns: string[] = [];
  selectedColumns: string[] = [];
  textFilter!: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.people = this.dataService.getPeople();
    this.tmpPeople = [...this.people];

    [this.columns] = this.people.map(x => {
      return Object.keys(x);
    });

    this.selectedColumns = this.columns.toString().split(',');
  }

  updateColumns(columns: string[]) {
    this.selectedColumns = columns;
  }

  filterData() {
    if (this.textFilter) {
      this.people = this.tmpPeople.filter(item => {
        return this.selectedColumns.find(property => {
          const value = item[property].toString().toLowerCase();
          return value.includes(this.textFilter.toLowerCase());
        }) ? item : null;
      })
    }
    else {
      this.people = [...this.tmpPeople];
    }
  }
}
