import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class ServReportsService {

  path = this.servPath.getPathReports();
  constructor(private http: HttpClient, private servPath: PathService) { }

  getReports(){
   return this.http.get<any>(this.path);
  }
}
