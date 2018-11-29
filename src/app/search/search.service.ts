

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import {Search} from '../search/search';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {map} from 'rxjs/operators';
//import 'rxjs/add/operator/subscribe';







@Injectable()
export class SearchService{

  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  showEmployee: Search[];

  //readonly url: 'http://localhost:49412/';
  //private access_token: string = 'BQD2aXH_gh91cKE5h6WkrYE552w_p5HmgvRj0UjjRx6FH3lHofE5XeRGoDclheNcGgcunpIHo939WJRjMhOnpGFw4ZohkzpoXIjHku0G0TbmUuP5_JPVLaD2frG_a28c64u7SiuPBQJnJzUV3aeDB8BdAMTL01QCLu3aLg1RUpXIHO_YQw';
  constructor (private http: HttpClient ){
  //}

 // searchArtist(fn: string){

    //  let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);

     // this.searchUrl = this.url + 'api/Employes?fn=' + fn;
//return this._http.get(this.searchUrl, {headers: headers })
    //  .map(res => res);
 }

 registerUser(user: Search) {
  const body: Search = {
    flights_Id: user.flights_Id,
    flights_Name: user.flights_Name,
    from_Location: user.from_Location,
    to_Location: user.to_Location,
    departure_Date: user.departure_Date,
    arrival_Date: user.arrival_Date,
    total_Seats: user.total_Seats,
    available_Seats: user.available_Seats,
    price: user.price,
    total: user.total
  }

 
  var reqHeader = new HttpHeaders({'No-Auth':'True'});
  return this.http.post('http://localhost:49412/api/bookings', body,{headers : reqHeader});
}

getEmployee(from_Location: string )
{
 // this.http.get("http://localhost:49412/api/Employes?fname="+Fname).map((data :Response) => {
   // return data.json() as Search[];
  //}).toPromise().then(x => {this.showEmployee = x;
  //})
 

  //return this.http.get<Search[]>("http://localhost:49412/api/Employes?fname="+Fname)).subscribe(Search => console.log(user));

  // this.http.get("http://localhost:49412/api/Employes?fname="+Fname).map((response :Response) =>
  // response.json()); 

  return this.http.get<Search[]>("http://localhost:49412/api/flights/?from_Location="+from_Location).toPromise().then(x => {this.showEmployee = x;})


}



 // getArtist(ID){

    //   let headers = new HttpHeaders().set('Authorization', 'Bearer ');

    //   this.artistUrl = "api/Employes";
    //   return this._http.get(this.artistUrl, {headers: headers })
    //   .map(res => res);

    //this._http.get('http://localhost:49412/api/Employes'+ID)
    //.map((res: Response) => res.json() );

//   getAlbums(artistId:string){

//       let headers = new HttpHeaders().set('Authorization', 'Bearer ');
//       this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+ '/albums';
//       return this._http.get(this.albumsUrl, {headers: headers })
//       .map(res => res);
//   }

//   getAlbum(id:string){

//       let headers = new HttpHeaders().set('Authorization', 'Bearer ');
//       this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
//       return this._http.get(this.albumUrl, {headers: headers })
//       .map(res => res);
//   }
//}

createUser(user: Search) {
  return this.http.post("http://localhost:49412/api/booking", user);
}
}