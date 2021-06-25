import { Injectable } from '@angular/core';
import { IPerson } from '../_model/person';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPeople() {
    const people: IPerson[] = [
      { name: 'John', surname: 'Smith', age: 25, country: 'USA', phone: '123-456-789' },
      { name: 'Paul', surname: 'William', age: 30, country: 'Russia', phone: '456-789-123' },
      { name: 'Jack', surname: 'Reacher', age: 34, country: 'France', phone: '987-123-654' },
      { name: 'Bon', surname: 'Smith', age: 30, country: 'Germany', phone: '789-654-321' },
      { name: 'Jason', surname: 'Statham', age: 30, country: 'Spain', phone: '321-456-987' },
      { name: 'Denzel', surname: 'Washington', age: 30, country: 'Denmark', phone: '987-456-321' },
      { name: 'Tom', surname: 'Hanks', age: 30, country: 'Greece', phone: '321-789-654' },
      { name: 'Gary', surname: 'Oldman', age: 30, country: 'China', phone: '000-789-555' },
      { name: 'Morgan', surname: 'Cruise', age: 30, country: 'Japan', phone: '111-222-333' }
    ]

    return people;
  }
}
