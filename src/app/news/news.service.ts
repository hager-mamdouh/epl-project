import { Injectable } from '@angular/core';
import * as data from '../../assets/data.json'
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public posts= data;

  constructor() { }

  get Data(){
    return this.posts
  }
}
