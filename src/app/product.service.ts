import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  sendmessage(data):Observable<any>{
    console.log(data)
   // return this.http.post("http://localhost:4123/sendmessage",data)
   return this.http.post("https://portfolioappantony.herokuapp.com/sendmessage",data)
  }
  getnews():Observable<any>{
    

 // return this.http.get("http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0789807160f64177895a4c548e36b754")
      return this.http.get("https://portfolioappantony.herokuapp.com/getnews")
    }
}
