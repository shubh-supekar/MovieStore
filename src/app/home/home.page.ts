import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService, SearchType } from './../post.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  datauser: any;
  public topic: any;

  results: Observable<any>;
  searchTerm: '';
  type: SearchType.all;
  constructor(public routere: Router,  public movieService: PostService) {}



  searchChanged($event){
    this.results = this.movieService.searchData(this.searchTerm, this.type);

  }

  // tslint:disable-next-line: member-ordering
  options =  {
    centeredSlides: true,
    loop: true,
    spaceBetween: -100,

  };


  goToContent(){
    // tslint:disable-next-line: quotemark
    this.routere.navigateByUrl("/content");
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
