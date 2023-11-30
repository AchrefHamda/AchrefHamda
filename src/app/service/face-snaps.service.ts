import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
@Injectable({
    providedIn:'root'
})
export class fsl{
    facesnaps:FaceSnap[]=[]   
}