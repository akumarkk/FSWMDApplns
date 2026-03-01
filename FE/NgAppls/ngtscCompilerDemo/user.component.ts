import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <div class="profile">
      <h2>{{ name }}</h2>
      <p>Status: {{ status }}</p>
    </div>
  `
})
export class UserComponent {
  @Input() name: string = 'Guest';
  status: string = 'Active';
}