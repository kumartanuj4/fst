import { Component, OnInit } from '@angular/core';
import { Show } from '../show';
import { ShowService } from '../show.service';
import { SearchPipe } from '../search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})

export class ShowsComponent implements OnInit {   
  title = "List of TV SHOWS";
  shows: Show[];
  show: Show;
  // selectedShow: Show;
  // show_id: Number;
  show_title: String;
  show_year: String;
  show_description: String;
  show_poster: String;
  show_trailer:  String;

  constructor(private showService:  ShowService) { }

  ngOnInit() {
    // this.getShows();
    this.showService.getShows()
        .subscribe( shows => 
          this.shows = shows );
  }

  // onSelect(show: Show): void {
  //   this.selectedShow =show;
  // }

  // getShows(): void {
  //   // this.shows = this.showService.getShows();
  //   this.showService.getShows()
  //     .subscribe(shows => this.shows = shows);
  // }

  addShow() 
  {
    const newShow ={
        // show_id: this.show_id,
        show_title: this.show_title,
        show_year: this.show_year,
        show_description:  this.show_description,
        show_poster: this.show_poster,
        show_trailer: this.show_trailer
    }
      this.showService.addShow(newShow)
          .subscribe(show => {
              this.shows.push(show);
          });
  }

  // deleteShow(id:any) {
  //   var shows = this.shows;
  //     this.showService.deleteShow(id)
  //       .subscribe(data => {
  //           if(data.n == 1)
  //         {
  //           for(var i = 0; i < shows.length; i++ ) 
  //           {
  //             if(shows[i]._id == id )
  //              {
  //                 shows.splice(i,1);
  //             }
  //           }
  //         }
  //       })
  // }


  previousState() {
    window.history.back();
  }

  // myFunction() {
  //   location.reload();
  // }

  
  
} 
