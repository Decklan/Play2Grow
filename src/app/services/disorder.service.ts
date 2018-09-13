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
    this.disordersArray.push(new Disorder('Attention Deficit/Hyperactivity Disorder', 'ADHD is a highly genetic, brain-based syndrome that has to do with the regulation of a particular set of brain functions and related behaviors. These brain operations are collectively referred to as "executive functioning skills" and include important functions such as attention, concentration, memory, motivation and effort, learning from mistakes, impulsivity, hyperactivity, organization, and social skills. There are various contributing factors that play a role in these challenges including chemical and structural differences in the brain as well as genetics.'));
    this.disordersArray.push(new Disorder('Autism Spectrum Disorder', 'Autism, or autism spectrum disorder, refers to a range of conditions characterized by challenges with social skills, repetitive behaviors, speech and nonverbal communication, as well as by unique strengths and differences. We now know that there is not one autism but many types, caused by different combinations of genetic and environmental influences.'));
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
