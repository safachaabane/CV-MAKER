import { Component,OnInit} from '@angular/core';
import { CV } from '../cv';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent implements OnInit {
  currentCv?: CV 
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.currentCv = data[0];
      console.log(data[0]);
    });
  }

  showDetails(cv: CV) {
    this.currentCv = cv;
  }
}