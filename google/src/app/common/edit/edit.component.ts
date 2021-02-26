import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public show=false
  @Input() label:string
  @Input() title:string
  constructor() {
    
   }

  ngOnInit(): void {
  }
  
  close(e){
    e.stopPropagation();
    e.preventDefault();
    this.show=false;
  }

}
