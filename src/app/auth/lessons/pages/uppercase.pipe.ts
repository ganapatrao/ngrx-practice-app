import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  standalone: true
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, special: string): string {



  if (!value) return '';

  return value
    .split(' ')
    .map(result => {
      return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase()+ special;
    })
    .join(' ');
    
    //value.charAt(0).toUpperCase()+value.slice(1).toLowerCase();
  }

}
