import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  tempvideo: any[] = [];
  videoList: any[] = [
    { id: 1, url: 'https://www.youtube.com/watch?v=rJE5jzi4q2Y' },
    { id: 2, url: 'https://www.youtube.com/watch?v=CbWsenby9kw' },
    { id: 3, url: 'https://www.youtube.com/watch?v=_yFFuUtd-uY' },
    { id: 4, url: 'https://www.youtube.com/watch?v=nbv_8luU-cQ' },
    { id: 5, url: 'https://www.youtube.com/watch?v=uQmp6Hz2ODs' },
    { id: 6, url: 'https://www.youtube.com/watch?v=2_c4Iquto2o' },
    { id: 7, url: 'https://www.youtube.com/watch?v=E6tR0iqadfI' },
    { id: 8, url: 'https://www.youtube.com/watch?v=yniJO81MlRI' },
    { id: 9, url: 'https://www.youtube.com/watch?v=fBIgFEePM7Q' },
    { id: 10, url: 'https://www.youtube.com/watch?v=7odKWwm3lfQ' },
    { id: 11, url: 'https://www.youtube.com/watch?v=QPGBQ48Wg9I' },
    { id: 12, url: 'https://www.youtube.com/watch?v=5xK2LtmEz6w' },
    { id: 13, url: 'https://www.youtube.com/watch?v=iqiJ_4RpBq0' },
    { id: 14, url: 'https://www.youtube.com/watch?v=rAmgg1kukKE' },
    { id: 15, url: 'https://www.youtube.com/watch?v=VH0FajIFONY' },
    { id: 16, url: 'https://www.youtube.com/watch?v=3h_2COJk6bw' },
    { id: 17, url: 'https://www.youtube.com/watch?v=q2FoKmqURJk' },
    { id: 18, url: 'https://www.youtube.com/watch?v=Jlw_6NoBkq0' },
    { id: 19, url: 'https://www.youtube.com/watch?v=lQbx5GfKhNY' },
    { id: 20, url: 'https://www.youtube.com/watch?v=D-LVpBtsARY' },
    { id: 21, url: 'https://www.youtube.com/watch?v=U8HU0hIlPHs' },
    { id: 22, url: 'https://www.youtube.com/watch?v=kos2aqo6wac' },
    { id: 23, url: 'https://www.youtube.com/watch?v=Av0hnLQf2ME' },
    { id: 24, url: 'https://www.youtube.com/watch?v=WeU4ZXrSLf4' },
    { id: 25, url: 'https://www.youtube.com/watch?v=g8cYu53U0Js' },
    { id: 26, url: 'https://www.youtube.com/watch?v=8XztYkVzNg0' },
    { id: 27, url: 'https://www.youtube.com/watch?v=fCBzEwYxGz8' },
    { id: 28, url: 'https://www.youtube.com/watch?v=uFQZ63u6LOM' },
    { id: 29, url: 'https://www.youtube.com/watch?v=3SDOwKTAZz4' },
    { id: 30, url: 'https://www.youtube.com/watch?v=DGGP8KSoeDc' },
    { id: 31, url: 'https://www.youtube.com/watch?v=IU4Tkw58rJE' },
    { id: 32, url: 'https://www.youtube.com/watch?v=-1RbzAjAzKU' },
    { id: 33, url: 'https://www.youtube.com/watch?v=nN8zpnEE8Jc' },
    { id: 34, url: 'https://www.youtube.com/watch?v=bgdxi3JDRlc' },
    { id: 35, url: 'https://www.youtube.com/watch?v=Y25AlvQkNtQ' },
    { id: 36, url: 'https://www.youtube.com/watch?v=SUHTfQ2knRQ' },
    { id: 37, url: 'https://www.youtube.com/watch?v=bfElAPMhAg4' },
    { id: 38, url: 'https://www.youtube.com/watch?v=SgcTSHQp04g' },
    { id: 39, url: 'https://www.youtube.com/watch?v=jJmcig1PIBQ' },
    { id: 40, url: 'https://www.youtube.com/watch?v=D8x53uaZyIY' },
  ];

  constructor() {}

  getVideo() {
    return this.videoList;
  }
  getVideobyId(id) {
    console.log(id);

    this.videoList.forEach((e) => {
      if (id == e.id) {
        console.log(e);
        var link = e.url;
        console.log(link);

        var string = link.slice(32, link.length);
        console.log(string);
        e.url = 'https://www.youtube.com/embed/' + string;

        this.tempvideo.push(e);
      }
    });
    return this.tempvideo[0];
  }
}
