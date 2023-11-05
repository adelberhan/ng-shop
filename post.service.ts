import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, throwError } from 'rxjs';
import { Posts } from './post.modile';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Posts = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-test-30b5e-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    return (
      this.http
        .get<{ [key: string]: Posts }>(
          'https://ng-test-30b5e-default-rtdb.firebaseio.com/posts.json',
          {
            headers: new HttpHeaders({
              'my-headers': 'Adel',
            }),
            params: new HttpParams().set('parented', 'true'),
          }
        )
        // .pipe(
        //   map(responseData => {
        //     const postsArray: Posts[] = [];
        //     for (const key in responseData) {
        //       if (responseData.hasOwnProperty(key)) {
        //         postsArray.push({ ...responseData[key], id: key });
        //       }
        //     }
        //     return postsArray;
        //   }),
        //   catchError(errorRes => {
        //     // Send to analytics server
        //     return throwError(errorRes);
        //   })
        // );
        .pipe(
          map((responseData) => {
            if (responseData === null || responseData === undefined) {
              // Handle the case where responseData is null or undefined
              // console.error('Received null or undefined data from the HTTP request.');
              return []; // Return an empty array or handle it as needed
            }

            return Object.keys(responseData).map((key) => ({
              id: key,
              ...responseData[key],
            }));
          }),
          catchError((errorRes) => {
            // Handle the error, send to analytics server, or rethrow the error
            console.error('An error occurred:', errorRes);
            return throwError(errorRes);
          })
        )
    );
  }

  deletePosts() {
    return this.http.delete(
      'https://ng-test-30b5e-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
