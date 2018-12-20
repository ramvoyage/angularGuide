import { Component, OnInit, Input } from '@angular/core';
import { IDropDown } from './dropdown.model'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }
   @Input() dropDataSource: IDropDown[];
   @Input() isDropDown=false;
  ngOnInit() {
  }

}
