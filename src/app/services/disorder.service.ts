import { Injectable } from '@angular/core';

export class Disorder {
  public disorderName: string;
  public disorderDescription: string;

  constructor(name: string, description: string) {
    this.disorderName = name;
    this.disorderDescription = description;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DisorderService {
  private disordersArray: Disorder[];

  constructor() { 
    // Create the disorders array
    this.createDisorders();
  }

  /**
   * Initializes the disorders array and creates each of the 
   * disorders
   */
  createDisorders() {
    this.disordersArray = [];
    this.disordersArray.push(new Disorder('Attention Deficit/Hyperactivity Disorder', 'Description1'));
    this.disordersArray.push(new Disorder('Autism Spectrum Disorder', 'Description2'));
    this.disordersArray.push(new Disorder('Cleft Lip and Cleft Palate', 'Description3'));
    this.disordersArray.push(new Disorder('Traumatic Brain Injury', 'Description4'));
    this.disordersArray.push(new Disorder('Down Syndrome', 'Description5'));
    this.disordersArray.push(new Disorder('Cerebral Palsy', 'Description6'));
  }

  /**
   * Returns the array of disorders to the caller
   * @returns The array of disorders
   */
  getDisorders(): Disorder[] {
    return this.disordersArray;
  }

}
