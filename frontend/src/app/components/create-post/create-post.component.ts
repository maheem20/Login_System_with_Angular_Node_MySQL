import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  @ViewChild("formDirective") formDirective: NgForm | undefined;
  @Output() create: EventEmitter<any> = new EventEmitter();
  form: FormGroup | undefined;

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl("", [Validators.required, Validators.minLength(5)]),
      body: new FormControl("", [
        Validators.required,
        Validators.minLength(10)
      ]),
    });
  }

  onSubmit(formData: Pick<Post, "title" | "body">): void {
    console.log(formData);
    this.form?.reset();
    this.formDirective?.resetForm();
  }
}
