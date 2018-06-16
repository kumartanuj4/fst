import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

      constructor( private Dom:  DomSanitizer ) {
         
       }

  transform(value, args) {
    return this.Dom.bypassSecurityTrustResourceUrl(value);
  }

}
