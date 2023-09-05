import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
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
