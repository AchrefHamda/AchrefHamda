import { Component , Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Component({
  selector: 'app-face-snap',
  templateUrl: './tp1.component.html',
  styleUrls: ['./tp1.component.scss']
})

export class Tp1Component {
  @Input() 
  faceSnap!: FaceSnap;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!:string;
  buttonText!:string;
  ngOnInit(){
    this.title='Achref !!';
    this.description='Etudien_iset tozeur_DSI21';
    this.createdDate=new Date();
    this.snaps=22;
    this.imageUrl='https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText ='Oh Snap!';
  }
  faceSnaps!: FaceSnap[];
  
  onSnap(){
    if(this.buttonText ==='Oh Snap!'){
      this.buttonText ='Opss, unSnap!';
      this.snaps++;

    }else{
      this.buttonText ='Oh Snap!';
      this.snaps--;
    }
  }}
