import { Component, Input, OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';


@Component({
    selector: 'app-lifecycle-demo',
    templateUrl: './lifecycle.component.html',
    styleUrls: ['./lifecycle.component.css']
})
export class LifecycleDemoComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {
    @Input() sample = 'lifecycle sample';
    log: string[] = [];


    constructor() { this.push('constructor'); }
    ngOnChanges(changes: SimpleChanges) { this.push('ngOnChanges'); }
    ngOnInit() { this.push('ngOnInit'); }
    ngDoCheck() { this.push('ngDoCheck'); }
    ngAfterViewInit() { this.push('ngAfterViewInit'); }
    ngOnDestroy() { this.push('ngOnDestroy'); }


    push(msg: string) { this.log.unshift(`${new Date().toLocaleTimeString()} — ${msg}`); }


    clear() { this.log = []; }
}