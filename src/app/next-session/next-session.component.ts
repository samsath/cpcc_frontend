import { Component, OnInit } from '@angular/core';
import { NextSessionService } from './next-session.service';

@Component({
  selector: 'app-next-session',
  templateUrl: './next-session.component.html',
  styleUrls: ['./next-session.component.scss']
})
export class NextSessionComponent implements OnInit {

  session;

  constructor(
    private nextsessionService: NextSessionService
  ) { }

  ngOnInit() {
    this.session = this.nextsessionService.getSession();
    console.log(this.session);
  }


}
