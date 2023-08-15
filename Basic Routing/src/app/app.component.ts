import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';
}

@Component({
  selector: 'hello',
  template: `<h1>hello worldcomponentn</h1>`,
  styles: []
})
export class HelloComponent {
}

@Component({
  selector: 'hi',
  template: `<h1>hi component</h1>`,
  styles: []
})
export class HiComponent { }

@Component({
  selector: 'new',
  template: `<h1>new component</h1>`,
  styles: []
})
export class NewComponent { }