import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  information = null;

  constructor(private activatedRoute: ActivatedRoute, private movieService: PostService) { }

  ngOnInit() {
    // tslint:disable-next-line: prefer-const
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.movieService.getDetails(id).subscribe(result => {
      console.log('details:', result);
      this.information = result;
    });
  }

  openWebsite(){
    window.open(this.information.openWebsite, '_blank');
  }

}
