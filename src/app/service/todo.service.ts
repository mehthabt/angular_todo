import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: Http) { }
  getlist() {
    return this.http.get('http://localhost:6002/api/todo');
  }
createlist(list) {
  return this.http.post('http://localhost:6002/api/todo', list);
}
deletelist(list) {
  return this.http.delete('http://localhost:6002/api/todo', { body: list });
}
updatelist(list) {
  return this.http.put('http://localhost:6002/api/todo', list) ;
}
clearlist(list) {
  return this.http.delete('http://localhost:6002/api/todo/al', { body: list });
}
}
