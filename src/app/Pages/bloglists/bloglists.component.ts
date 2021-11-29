import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstoragedataService } from 'src/app/Services/localstoragedata.service';

@Component({
  selector: 'app-bloglists',
  templateUrl: './bloglists.component.html',
  styleUrls: ['./bloglists.component.css']
})
export class BloglistsComponent implements OnInit {
  all_Data: any;
  con: any
  textlength: number = 150;
  showMore: boolean;
  constructor(private locastorser: LocalstoragedataService, private route: Router) {
    this.showMore = false;
    this.con = 4;
  }
  ngOnInit(): void {
    const timer: any = setTimeout(() => {

      this.all_Data = this.locastorser.getdtafrmlocalstor();

    }, 500);

  }
  delete(i: any) {

    this.locastorser.deleteblog(i, this.all_Data)


  }
  Edit(i: any) {
    this.route.navigateByUrl("edit")
    this.locastorser.editdata(i)

  }

}
