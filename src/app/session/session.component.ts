import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get sections(){
    return [
      {"id":1,"content":"saasdasd","title":"one"},
      {"id":2,"content":"saasdasd","title":"two"},
      {"id":3,"content":"saasdasd","title":"three"},
    ]
  }

}
