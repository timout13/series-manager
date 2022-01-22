import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Commments } from 'src/app/models/commments.model';
import { Serie } from 'src/app/models/serie.model';

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css'],
})
export class SerieFormComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<Serie>;
  @Input() buttonLabel!: string;
  @Input() serieToEdit!: Serie;

  form!: FormGroup;
  serie!: Serie;
  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Serie>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  // Method called when the user submit the form

  onSubmitSerieForm(): void {
    this.formSubmitted.emit(this.serie);
  }

  // Method called to init the form

  private initForm(): void {
    this.serie = this.serieToEdit
      ? this.serieToEdit
      : new Serie(
          '',
          new Date(),
          0,
          '',
          '',
          '',
          [new Commments(0, '', '', '')],
          0
        );

    //Options for the form's fields

    this.form = this.fb.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      dateBegin: [null, [Validators.required]],
      nbSeason: [null, [Validators.required]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      imgUrl: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(250),
        ],
      ],
      review: [null, [Validators.required, Validators.minLength(5)]],
    });
  }
  onChangeDateBegin(dateBeginString: string) {
    this.serie.dateBegin = new Date(Date.parse(dateBeginString));
  }
}
