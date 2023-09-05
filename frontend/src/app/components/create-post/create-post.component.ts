import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  form: FormGroup | undefined;

  createFormGroup(): FormGroup {
    return new FormGroup({});
  }
}
