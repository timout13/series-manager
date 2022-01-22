import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Serie } from '../../models/serie.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Commments } from '../../models/commments.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<Commments>;

  form!: FormGroup;
  comments!: Commments;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Commments>();
  }

  onSubmitCommentForm(): void {
    this.formSubmitted.emit(this.comments);
    this.initForm();
  }

  ngOnInit(): void {
    this.initForm();
  }

  //Initialize the form

  private initForm(): void {
    this.comments = new Commments(0, new Date(), '', '');
    this.form = this.fb.group({
      author: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(250),
        ],
      ],
      content: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(250),
        ],
      ],
    });
  }
}
