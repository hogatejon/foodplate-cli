import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirements } from '../models/requirements';

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  private requirementsUrl: string = 'assets/server/requirements.json';

  constructor(private http: HttpClient) { }

  getRequirements(): Observable<Requirements[]> {
    return this.http.get<Requirements[]>(this.requirementsUrl);
  }
}
