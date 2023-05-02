import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get<CallResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID V3Sbwf_KPpNzmid31PNcN59bQgmT4Rq0w5o77N0iGDs'
      }
    })
  }
}

interface CallResponse{
  urls: {
    regular: string
  };
}
