import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RandomWordComponent } from './random-word/random-word';
@NgModule({
	declarations: [RandomWordComponent],
	imports: [BrowserModule, CommonModule],
	exports: [RandomWordComponent]
})
export class ComponentsModule {}
