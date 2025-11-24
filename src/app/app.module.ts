import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LifecycleDemoComponent } from './lifecycle/lifecycle.component';
import { HighlightDirective } from './highlight.directive';
import { TruncatePipe } from './truncate.pipe';


import { CardComponent } from './card/card.component';

import { NowPipe } from './now.pipe';


@NgModule({
declarations: [
AppComponent,
HeaderComponent,
LifecycleDemoComponent,
HighlightDirective,
TruncatePipe,
CardComponent,
NowPipe
],
imports: [BrowserModule, FormsModule],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule {}