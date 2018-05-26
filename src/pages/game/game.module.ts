import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamePage } from './game';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GamePage,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    CommonModule,
    IonicPageModule.forChild(GamePage),
  ],
})
export class GamePageModule {}
