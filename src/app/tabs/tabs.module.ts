import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import {MapsPageModule}from '../Maps/Maps.module';
import{ StatusPageModule } from '../Status/Status.module';
import { HomePageModule } from '../home/home.module';
import { from } from 'rxjs';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    MapsPageModule,
    StatusPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
