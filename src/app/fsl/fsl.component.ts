import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { fsl } from '../service/face-snaps.service';

@Component({
  selector: 'app-fsl',
  templateUrl: './fsl.component.html',
  styleUrls: ['./fsl.component.scss']
  
})
export class FSLComponent implements OnInit{
  faceSnaps!: FaceSnap[];
  title = 'Project1';
  ngOnInit(): void {
    this.faceSnaps = this.fsl.facesnaps;
    }
  constructor(private fsl:fsl){}
}
