import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsernameInputComponent } from './username-input/username-input.component';
import { MessageSentComponent } from './username-input/messaging/message-sent/message-sent.component';
import { MessagingComponent } from './username-input/messaging/messaging.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UsernameInputComponent,
    MessageSentComponent,
    MessagingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
