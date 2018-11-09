import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data) {
    const keys = [];
    for (const enumMember in data) {
      keys.push({
        key: enumMember,
        value: data[enumMember]
      });
    }
    return keys;
  }
}


