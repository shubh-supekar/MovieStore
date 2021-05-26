import { Component, OnInit } from '@angular/core';
import { PostService } from './../../post.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {

  datauser: any;
  constructor(
    public api: PostService
  ) { }

  ngOnInit() {
  }


}
