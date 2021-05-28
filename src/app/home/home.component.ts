import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videoList: any = [];
  showvideo: any = [];

  withoutfil: boolean = true;
  withfil: boolean = false;

  Options: any = [
    { id: 1, value: '1 - 10' },
    { id: 2, value: '11 - 20' },
    { id: 3, value: '21 - 30' },
    { id: 4, value: '31 - 40' },
  ];

  constructor(
    private sanitizer: DomSanitizer,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.videoList = this.common.getVideo();
    this.videoList.forEach((e) => {
      var index = e.url.indexOf('=', 0);
      var string = e.url.slice(index + 1, e.url.length);
      e.url = 'https://www.youtube.com/embed/' + string;

      // this.showvideo.push(obj);
    });
    console.log(this.videoList);
  }

  search(event) {
    console.log(event);

    this.router.navigate(['/home', event]);
  }

  selectChange(event) {
    console.log(event);

    if (event == 1) {
      this.showvideo.length = 0;
      this.videoList.forEach((e) => {
        if (e.id <= 10) {
          this.showvideo.push(e);
        }
      });
    }
    if (event == 2) {
      this.showvideo.length = 0;
      this.videoList.forEach((e) => {
        if (e.id >= 11 && e.id <= 20) {
          this.showvideo.push(e);
        }
      });
    }
    console.log(this.showvideo);

    this.withoutfil = false;
    this.withfil = true;
  }
}
