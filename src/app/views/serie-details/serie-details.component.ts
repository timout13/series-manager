import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../../models/serie.model';
import { SerieService } from '../../services/serie/serie.service';
import { Commments } from '../../models/commments.model';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.css'],
})
export class SerieDetailsComponent implements OnInit {
  series!: Serie;
  form!: FormGroup;

  constructor(
    private serieService: SerieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; // :id, return a string
    this.serieService.findById(+id).then((serie: Serie) => {
      this.series = serie;
    });
  }

  // Apply the addComment f() to create a comment

  createComment(comment: Commments, serie: Serie): void {
    this.serieService.addComment(comment, serie).then();
  }
}
