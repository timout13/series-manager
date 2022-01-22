import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerieService } from '../../services/serie/serie.service';
import { Serie } from '../../models/serie.model';

@Component({
  selector: 'app-serie-new',
  templateUrl: './serie-new.component.html',
  styleUrls: ['./serie-new.component.css'],
})
export class SerieNewComponent implements OnInit {
  constructor(private serieService: SerieService, private router: Router) {}

  ngOnInit(): void {}

  // On submit of the btn, apply the addSerie f()
  onSubmitNewSerie(serieToAdd: Serie): void {
    this.serieService.addSerie(serieToAdd).then(() => {
      this.router.navigateByUrl('/series');
    });
  }
}
