import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class DataService {
    private items: string[] = ['Sketch a sunrise', 'Create a short poem'];


    getInitialItems() { return [...this.items]; }
    saveItem(it: string) { this.items.unshift(it); }
}

