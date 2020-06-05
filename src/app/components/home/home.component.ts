import { Component, OnInit } from '@angular/core';
import {AlbumService} from '../../services/album.service';
import {Album} from '../../interfaces/album';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  albums:Album[];
  
  constructor(
    private albulmService:AlbumService,
    public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums(){
    this.albulmService.getAlbums().subscribe((res:any)=>{
      console.log(res)
      this.albums=res
    },
    (err:any)=>{
      console.log(err)});
  }
  deletePublication(id){
    
      const dialogRef = this.dialog.open(Delete);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if(result){
          // this.deletePublication(id)
          // this.publicationService.deletePublication(this.token, id).subscribe(
          //   res=>{
          //     console.log(res)
              
               
          //   },
          //   err=>{
          //     console.log(err);
          //   }
          // )
        }
      });
    
  }
  
}
@Component({
  selector: 'delete',
  templateUrl: 'delete.component.html',
  styleUrls: ['./home.component.css']
})
export class Delete {

}
