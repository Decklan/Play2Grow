import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2g-footer',
  templateUrl: './p2g-footer.component.html',
  styleUrls: ['./p2g-footer.component.css']
})
export class P2gFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getCurrentYear(): string {
    return new Date().getFullYear().toString();
  }

}
