import { Component, ContentChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ContentChild('buttonIcon') buttonIcon!: ElementRef;

  buttonTitle = 'Mon bouton';

  ngAfterContentInit() {
    console.log(this.buttonIcon);
  }
}
