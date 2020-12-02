import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  upload(formData: FormData) {
    return this.http.post(this.baseUrl + '/api/files', formData);
  }
}
