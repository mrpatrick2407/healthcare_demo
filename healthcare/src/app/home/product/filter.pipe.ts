import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : true
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], search: string): any {
    console.log("PIPES!!♥")
    if (!items || !items.length) return items;
    if (!search || !search.length) return items;
    return items.filter(item => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    });
   
  }

}
