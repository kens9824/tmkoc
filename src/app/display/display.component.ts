import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  storeId: any;
  showvideo: any = [];

  constructor(
    private route: ActivatedRoute,
    private common: CommonService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.storeId = JSON.parse(this.route.snapshot.paramMap.get('id'));
    console.log(this.storeId);
    this.showvideo.push(this.common.getVideobyId(this.storeId));
    console.log(this.showvideo);
  }
}
