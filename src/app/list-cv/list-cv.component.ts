import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { CV } from '../cv';
@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrl: './list-cv.component.scss',
})
export class ListCvComponent implements OnInit {
  data: CV[] = [];
  cvDetails?: CV;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
  }
  @Output() newItemEvent = new EventEmitter<CV>();

  showDetails(dataItem: CV) {
    this.newItemEvent.emit(dataItem);
  }
}
