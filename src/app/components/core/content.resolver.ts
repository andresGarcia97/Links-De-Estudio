import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResolveFn } from '@angular/router';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/models/models';

export function contentResolver(fileName: string): ResolveFn<Item[]> {
    return () => {
        const http = inject(HttpClient);
        return http.get<Record<string, string[]>>(`assets/content/${fileName}.json`).pipe(
            map((data: Record<string, string[]>) =>
                Object.entries(data).map(([key, content]) => new Item(key, content))
            )
        );
    };
}