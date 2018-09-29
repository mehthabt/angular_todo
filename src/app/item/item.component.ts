import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


export class ItemComponent implements OnInit {
  @Input() list: any[];
  @Input() i;
  @Input() count;
  @Input() name;
  @Input() flag;
  @Output() statusChange = new EventEmitter();
  @Output() nameChanege = new EventEmitter();
  @Output() item = new EventEmitter();
  @Output() deleteitem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeStatus(){
    this.statusChange.emit(true);
  }
  changeName(){
    this.nameChanege.emit(true);
  }

  inputfield(){
    this.item.emit(true);
  }
  delete(){
this.deleteitem.emit(true);
  }

}
