import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/services/serie/serie.service';
import { Serie } from '../../models/serie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.css'],
})
export class SerieEditComponent implements OnInit {
  serie!: Serie;

  constructor(
    private serieService: SerieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.serieService.findById(+id).then((serie: Serie) => {
      this.serie = serie;
    });
  }

  onSubmittedEditedSerie(editedSerie: Serie): void {
    this.serieService.editSerie(editedSerie).then(() => {
      this.router.navigateByUrl('/series');
    });
  }
}
