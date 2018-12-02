import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{ MapsPage }from './Maps.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ' //Google API key for maps
    }),
    RouterModule.forChild([{ path: '', component: MapsPage }])
    
  ],
  declarations: [MapsPage]
})
export class MapsPageModule {
  lat: number = 26.765844;
  lng: number = 83.364944;
}
