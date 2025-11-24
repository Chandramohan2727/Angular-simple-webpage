import { Component } from '@angular/core';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';


@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
providers: [LoggerService] 
})
export class AppComponent {
title = 'new-webpage';
creativity = '';
items: string[] = [];


constructor(private data: DataService) {
this.items = data.getInitialItems();
// this.logger.log('AppComponent constructed');
}


addItem() {
if (!this.creativity.trim()) return;
this.items.unshift(this.creativity.trim());
this.data.saveItem(this.creativity.trim());
// this.logger.log(`Added: ${this.creativity.trim()}`);
this.creativity = '';
}
toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

}