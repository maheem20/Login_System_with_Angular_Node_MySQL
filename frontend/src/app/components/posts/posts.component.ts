import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent  {
  posts$!: Observable<Post[]>;
}
