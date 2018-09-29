import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.css"]
})
export class MainpageComponent implements OnInit {
  lists: any[];
  count = 0;
  name;
  flag = false;
  inputtitle;
  constructor(private service: TodoService) {}
  createnew() {
    let list = { title: this.inputtitle, status: 0 };
    this.service.createlist(list)
      .subscribe(response => {
        this.lists.push(response.json());
        console.log(response.json());
        ++this.count;
      });
  }

  deleteitem(x: number, y: number, z) {
    console.log(x);
    let list = { todo_id: x };
    this.service.deletelist(list)
      .subscribe(response => {
        this.lists.splice(y, 1);
        if (z === 0) {
          --this.count;
        }
      });
  }

  ngOnInit() {
    this.service.getlist()
    .subscribe(response => {
      console.log(response.json());
      this.lists = response.json();
      for (let i = 0; i < response.json().length; i++) {
        if (response.json()[i].status === 0) {
          ++this.count;
        }
      }
    });
  }

  status(name, x: number, y, z) {
    x === 0 ? (x = 1) : (x = 0);
    if (x === 1) {
      --this.count;
    } else {
      ++this.count;
    }
    this.changename(name, z, y, x);
  }

  statusRecieved(event){
    console.log('=======>',event)
  }

  changename(name, z, y, status) {
    console.log(this.name);
    let list = { title: name, todo_id: y, status: status };
    this.service.updatelist(list)
      .subscribe(response => {
        this.lists.splice(z, 1, response.json());
        console.log(response.json());
      });
  }

  downbuttons(a) {
    this.service.getlist()
    .subscribe(response => {
      if (a === 0) {
        let j = 0;
        for (let i = 0; i < response.json().length; ++i) {
          if (response.json()[i].status === a) {
            this.lists.splice(j, 1, response.json()[i]);
            ++j;
          }
        }
        this.lists = this.lists.slice(0, j);
      } else if (a === 1) {
        let j = 0;
        for (let i = 0; i < response.json().length; ++i) {
          if (response.json()[i].status === a) {
            this.lists.splice(j, 1, response.json()[i]);
            ++j;
          }
        }
        this.lists = this.lists.slice(0, j);
      } else {
        console.log(response.json());
        this.lists = response.json();
      }
    });
  }

  clear(x) {
    let list = { status: x };
    this.service.clearlist(list)
      .subscribe(response => {
        console.log(response.json());
        this.downbuttons(null);
      });
  }

  item(i) {
    this.lists[i].flag = !this.lists[i].flag;
  }
}
