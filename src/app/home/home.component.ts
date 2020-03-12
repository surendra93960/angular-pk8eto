import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { LoremService } from '../lorem.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private lorem : LoremService) { }
    posts : Post;
    ngOnInit() 
    {
        this.lorem.getPosts().subscribe((data : Post)=>{
            console.log(data.slice(0,10));
            this.posts = data.slice(0,10);
            console.log({'my posts are' : this.posts[2]})
        })
    }

   

}