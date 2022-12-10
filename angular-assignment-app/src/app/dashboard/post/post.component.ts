import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostingService } from 'src/app/services/postingService';
import { IPostModel } from '../models/postmodel';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit
{
  title:string="";
  postcontent:string="";
  postCount:number=1;
  postModel:IPostModel={title:"Intial Title", content:"Initial Content"};

  @Output() 
  posting = new EventEmitter<number>();

  constructor(private postingServiceRef:PostingService)
  {
  }

  ngOnInit(): void 
  {
    
  }

  post():void
  {
    if(this.title != "")
    {
      //Using Service
      this.postModel.title = this.title;
      this.postModel.content = this.postcontent;
      this.postingServiceRef.updatePostingContent(this.postModel);

      //Using Output Parameter
      this.postCount++;
      this.posting.emit(this.postCount);
    }
  }

  clear():void
  {
    this.title="";
    this.postcontent="";
  }

}
