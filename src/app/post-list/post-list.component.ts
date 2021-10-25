import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

allposts: Post[] = [
{title: 'Grand Circus', thought: 'Grand Circus is cool' },
{title: 'Ritual', thought: 'Ritual is a well developed app' },
{title: 'Scott', thought: 'Scott rides scooters' }
  ];

  thetitle: string = '';
  thethought: string = '';

  constructor() { }

  ngOnInit(): void {
  }

addPost(){
this.allposts.push({title:this.thetitle, thought:this.thethought });
  }

}
