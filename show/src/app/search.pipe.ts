// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'search'
// })
// export class SearchPipe implements PipeTransform {

//   transform(value: any, args?: any): any {
//     return null;
//   }

// }

// import { Pipe, PipeTransform } from '@angular/core';
// import { Show } from '../app/show';
// import { SHOWS } from '../app/mock-shows';

// @Pipe({
//     name: 'FilterPipe',
// })
// export class  SearchPipe implements PipeTransform {
//     transform(value: any, input: string) {
//         if (input) {
//             input = input.toLowerCase();
//             return value.filter(function (title) {
//                 return title.toLowerCase().indexOf(input) > -1;
//             })
//         }
//         return value;
//     }
// }

// export class SearchPipe implements PipeTransform {
//   transform(items: any[], field: string, value: string): any[] {
//     if (!items) return [];
//     return items.filter(it => it[field] == value);
//   }
//  }

// export class SearchPipe implements PipeTransform {
//   transform(items: any[], searchText: string) {
//     if(!items) return [];
//     if(!searchText) return items;
// searchText = searchText.toLowerCase();
// return items.filter( it => {
//       return it.toLowerCase().includes(searchText);
//     });
//    }
// }

import { Injectable, Pipe, PipeTransform } from '@angular/core';
import {  Show } from '../app/show'
// import { SHOWS } from '../app/mock-shows';

@Pipe({
  name: 'search'
})

@Injectable()
export class SearchPipe implements PipeTransform {

  transform(value: any, input: any ){
      if(input) {
        input = input.toLowerCase();
        return value.filter(function (el: any){
          return el.show_title.toLowerCase().indexOf(input) > -1;
        })
      }
      return value;
  }

}