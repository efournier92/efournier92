import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string): string {
    let returnValue = '';
    if (value.includes('.')) {
      returnValue = value.substring(0, value.indexOf('.'));
    }

    returnValue = returnValue.replace(/([A-Z])/g, ' $1').trim()

    return returnValue;
  }

}
