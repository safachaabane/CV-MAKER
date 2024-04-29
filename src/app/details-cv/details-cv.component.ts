import { Component, Input } from '@angular/core';
import { CV } from '../cv';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrl: './details-cv.component.scss',
})
export class DetailsCvComponent {
  @Input() cvdetails?: CV= {
    id: 0,
    nom: "",
    prenom: "",
    age: "",
    profession: "",
    avatar: ""
  };;
}
