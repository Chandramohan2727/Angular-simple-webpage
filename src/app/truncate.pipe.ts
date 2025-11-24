import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
    transform(value: string, limit = 20) {
        if (!value) return value;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
}

