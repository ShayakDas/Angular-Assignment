import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IPostModel } from "../dashboard/models/postmodel";

@Injectable({
    providedIn: 'root'
   })
export class PostingService
{
    private postingContent = new BehaviorSubject<any>("");
    currentPostingContent = this.postingContent.asObservable();
    constructor()
    {

    }

    updatePostingContent(postModel:IPostModel):void
    {
        this.postingContent.next(postModel);
    }


}