import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any = [];
  loading: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
    //  this.users = data;
    //  setTimeout(()=>{
    //    this.loading = false;
    //  }, 2000);
    //})
  }

}
