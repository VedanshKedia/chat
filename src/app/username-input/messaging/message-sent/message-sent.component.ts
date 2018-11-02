import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';
import {UsernameInputComponent} from '../../username-input.component';
import {User} from '../../../User';
import {UserService} from '../../../user.service';
import {AfterViewChecked, ElementRef, ViewChild } from '@angular/core'


@Component({
  selector: 'app-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.css']
})
export class MessageSentComponent implements OnInit {
  @ViewChild('vedansh') private myScrollContainer: ElementRef;

  selectedProfile: User;
  @Input() newmessage: Message;
  @Input() tempmessage: Message;
  messages = [];
  temp = '';
  addmessage() {
    if (this.tempmessage) {
      this.newmessage = this.tempmessage;
      this.messages.push(this.newmessage);
      this.scrollToBottom();
    }
  }
  typing() {
    this.temp = 'typing...';
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
    this.scrollToBottom();
  }

  getUser(): void {
    this.userService.getUser()
      .subscribe(selectedProfile => this.selectedProfile = selectedProfile);
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      console.log(this.myScrollContainer.nativeElement.scrollTop);
    } catch(err) { }
  }

  nottyping() {
    this.temp = '';
    this.tempmessage = null;
  }

}
