import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessagingComponent} from './username-input/messaging/messaging.component';
import {UsernameInputComponent} from './username-input/username-input.component';

const routes: Routes = [
  { path: 'messaging', component: MessagingComponent },
  { path: '', component: UsernameInputComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
