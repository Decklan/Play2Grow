import { Component, OnInit } from '@angular/core';
import { DisorderService, Disorder } from './../../services/disorder.service';

@Component({
  selector: 'app-st',
  templateUrl: './st.component.html',
  styleUrls: ['./st.component.css']
})
export class StComponent implements OnInit {
  public currentDisorder: number;
  public disorders: Disorder[];

  constructor(private disorderService: DisorderService) {
    this.currentDisorder = 0;
  }

  ngOnInit() {
    this.disorders = this.disorderService.getDisorders();
  }

  /**
   * Sets the current disorder index to the one the user 
   * clicked on
   * @param index The index of the disorder the user clicked on 
   */
  setCurrentDisorder(index: number) {
    this.currentDisorder = index;
  }

}
