import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstoragedataService } from 'src/app/Services/localstoragedata.service';


@Component({
  selector: 'app-cardtemplate',
  templateUrl: './cardtemplate.component.html',
  styleUrls: ['./cardtemplate.component.css']
})
export class CardtemplateComponent implements OnInit {
  @Input() info: any
  all_Data: any;
  con: any
  url: any;
  textlength: number = 150;
  showMore: boolean;
  constructor(private locastorser: LocalstoragedataService, private route: Router) {
    this.showMore = false;
    this.con = 4;
  }

  ngOnInit(): void {
    this.locastorser.getdatafromapi();
    const timer: any = setTimeout(() => {

      this.all_Data = this.locastorser.getdtafrmlocalstor();
      console.log(typeof (this.all_Data));


    }, 500);
  }


  delete(i: any) {
    this.locastorser.deleteblog(i, this.all_Data)

  }

  showmore() {
    let len = Object.keys(this.all_Data).length;
    this.con = len;
  }
  showless() {

    this.con = 4;
  }
  specificdata(url: any) {

    this.route.navigateByUrl("blogdetails" + url)

  }

}
