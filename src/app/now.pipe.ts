import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'now', pure: false })
export class NowPipe implements PipeTransform {
    transform(_: any) {
        return new Date().toLocaleString();
    }
}