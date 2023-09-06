import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';

import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$!: Observable<Post[]>;
  userId!: Pick<User, "id">;

  constructor(private postService: PostService, private authService: AuthService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.fetchAll();
    this.userId = this.authService.userId!;
  }

  fetchAll(): Observable<Post[]> {
    return this.postService.fetchAll();
  }

  createPost(): void {
    this.posts$ = this.fetchAll();
  }

  deletePost(): void {
    this.postService
      .deletePost(postId)
      .subscribe(() => (this.posts$ = this.fetchAll()));
  }
}
