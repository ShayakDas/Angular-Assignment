import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posttracker',
  templateUrl: './posttracker.component.html',
  styleUrls: ['./posttracker.component.css']
})
export class PosttrackerComponent 
{
  @Input()
  totalPostTrackerCount:number=0;
}
