import { Pipe, PipeTransform } from '@angular/core';
import { Friend } from '../../shared';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(f: Friend, args?: any): any {
    return `${f.firstName} ${f.lastName}`;
  }

}
