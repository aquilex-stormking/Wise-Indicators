import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [],
  template: `<h1>Hellou MotherFucker</h1>`
  
})
export class HeavyLoadersSlowComponent {
  
  constructor(){
    console.log('HeavyLoader Component')
  }
}
