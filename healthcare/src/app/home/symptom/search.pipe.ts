import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(items: any[], searchTxt: FormControl): any[] {
  //   if (!items || !items.length) return items;
  //   if (!searchTxt.value || !searchTxt.value.length) return items;
  //   return items.filter(item => {
  //     return item.text.toLowerCase().indexOf(searchTxt.value.toLowerCase()) > -1
  //   });
  // }
  transform(items: any[], searchTxt: string): any[] {
    if (!items || !items.length) return items;
    if (!searchTxt || !searchTxt.length) return items;
    return items.filter(item => {
      return item.text.toLowerCase().indexOf(searchTxt.toLowerCase()) > -1
    });
  }

}
