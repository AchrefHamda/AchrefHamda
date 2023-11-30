import { Component ,OnInit} from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  title = 'Project1';
  ngOnInit(){
    this.faceSnaps = [{
      title:'Archibald',
      decription:'Mon meilleur ami depuis tout petit !',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate:new Date,
      snaps: 1
    },
      {
        title:'three rock mountain',
        decription:'en droit magnifique',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate:new Date(),
        snaps:0
      },
      {
        title:'un bon repas',
        decription:'yummm c bon !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate:new Date(),
        snaps:0
      }
      
    ];
    
  }
}
