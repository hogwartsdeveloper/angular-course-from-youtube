import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTest'
})
export class MyTestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
