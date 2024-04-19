import { Component, OnInit } from '@angular/core';
import { CVService } from '../cv.service';
import { CV } from '../cv';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrl: './cv-component.component.scss',
})
export class CvComponentComponent implements OnInit {
  CVs: CV[] = [];
  constructor(private CVService: CVService) {}

  ngOnInit(): void {
    this.CVService.getCV().subscribe((CVs) => {
      this.CVs = CVs;
    });
  }
}
