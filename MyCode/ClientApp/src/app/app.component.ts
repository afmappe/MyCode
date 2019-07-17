import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  access_token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNTYzMzA3MjY4LCJleHAiOjE1NjMzMTA4NjgsImlhdCI6MTU2MzMwNzI2OCwiaXNzIjoiQW5kcmVzIiwiYXVkIjoiVGVzdF9BdWRpZW5jZSJ9.5miIU7d8N9UFGGYvDg8_1DF--Xhj6U0kjoKq_qisCLI';
  url: string = 'https://localhost:9221/api/SampleData';
  img: string = 'ProfileImage';

  imgSrc: string;

  ngOnInit(): void {
    this.imgSrc = `${this.url}/${this.img}?access_token=${this.access_token}`;
  }
}
