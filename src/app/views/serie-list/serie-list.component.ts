import { Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie.model';
import { SerieService } from '../../services/serie/serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
})
export class SerieListComponent implements OnInit {
  series!: Serie[];
  constructor(private serieService: SerieService) {}

  /* LifeCycle Method */
  ngOnInit(): void {
    this.series = this.serieService.series;
    console.log(this.series);
  }

  //Method called to delete the book selected

  onClickDeleteSerie(arrayIndex: number): void {
    this.serieService.deleteSerie(this.series[arrayIndex].id).then(() => {
      //Delete the books from the local array
    });
  }
}
