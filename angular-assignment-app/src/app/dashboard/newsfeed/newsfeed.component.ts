import { Component, Input, OnInit } from '@angular/core';
import { PostingService } from 'src/app/services/postingService';
import { IPostModel } from '../models/postmodel';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit
{
  @Input()
  postModels:IPostModel[]=[];

  @Input()
  title:string="";

  @Input()
  content:string="";

  constructor(private postingService:PostingService)
  {

  }

  ngOnInit():void 
  {
    this.postingService.currentPostingContent.subscribe(postmodel => {
      this.postModels.push(postmodel)
    });
  }

}
