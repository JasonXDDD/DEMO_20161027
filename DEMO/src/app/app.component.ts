import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data: any[];

  constructor(private http: Http){
    http.get('assets/api/article.json')
    .subscribe( value => {
      this.data = value.json();
    })
  }


}
