import { Component, OnInit } from '@angular/core';
import { Show } from '../show';
import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
import { ShowService } from '../show.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
// import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  show: Show;

  constructor( 
    private route: ActivatedRoute,
    private showService: ShowService,
    public sanitizer: DomSanitizer
    // private location: Location

    ) { }

  ngOnInit(): void {
    // this.getShow();
    let _id = this.route.snapshot.params['_id'];
    this.showService.getShow(_id).subscribe(
         (DShow) => this.show = DShow,
         (error) => {console.log(error);
         }
    );
  }

  // getShow(): void {
  //   const id = +this.route.snapshot.paramMap.get('_id');
  //   this.showService.getShow(id)
  //     .subscribe(show => this.show = show);
  // }
   

}
