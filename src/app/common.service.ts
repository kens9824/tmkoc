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
        { id: 41, url: 'https://www.youtube.com/watch?v=l7oiIuvzN2w' },
    { id: 42, url: 'https://www.youtube.com/watch?v=IB0zf44ZsQY' },
    { id: 43, url: 'https://www.youtube.com/watch?v=7Nqx0Ho2RMM' },
    { id: 44, url: 'https://www.youtube.com/watch?v=9qAxsfdSkQM' },
    { id: 45, url: 'https://www.youtube.com/watch?v=XQbNEwmNarM' },
    { id: 46, url: 'https://www.youtube.com/watch?v=ErS2axszcX4' },
    { id: 47, url: 'https://www.youtube.com/watch?v=K2eCaj3r6pw' },
    { id: 48, url: 'https://www.youtube.com/watch?v=EGs1t2Pk4wM' },
    { id: 49, url: 'https://www.youtube.com/watch?v=XdudbL59-jI' },
    { id: 50, url: 'https://www.youtube.com/watch?v=RnAz7SgLo2A' },
    { id: 51, url: 'https://www.youtube.com/watch?v=_akSeyN5K_g' },
    { id: 52, url: 'https://www.youtube.com/watch?v=nExfyZmDhGM' },
    { id: 53, url: 'https://www.youtube.com/watch?v=5RohCRrESGs' },
    { id: 54, url: 'https://www.youtube.com/watch?v=5C5YnlWaX3M' },
    { id: 55, url: 'https://www.youtube.com/watch?v=wcRb59S4qnU' },
    { id: 56, url: 'https://www.youtube.com/watch?v=lGYi9tC33h0' },
    { id: 57, url: 'https://www.youtube.com/watch?v=HW0DE7coVzY' },
    { id: 58, url: 'https://www.youtube.com/watch?v=hbC_yHHGIM0' },
    { id: 59, url: 'https://www.youtube.com/watch?v=igRdRujw-Ik' },
    { id: 60, url: 'https://www.youtube.com/watch?v=MpnVDf9EIBY' },
    { id: 61, url: 'https://www.youtube.com/watch?v=81e8wJCfxU0' },
    { id: 62, url: 'https://www.youtube.com/watch?v=zv4OOZqmfu4' },
    { id: 63, url: 'https://www.youtube.com/watch?v=GbuqoL3Jn5M' },
    { id: 64, url: 'https://www.youtube.com/watch?v=kug4fNI6RQs' },
    { id: 65, url: 'https://www.youtube.com/watch?v=6T0njFPFLJk' },
    { id: 66, url: 'https://www.youtube.com/watch?v=B3LLSy_Goes' },
    { id: 67, url: 'https://www.youtube.com/watch?v=QSsfGRsqnOM' },
    { id: 68, url: 'https://www.youtube.com/watch?v=IPiC3-BVLO0' },
    { id: 69, url: 'https://www.youtube.com/watch?v=Au_WIITyxhg' },
    { id: 70, url: 'https://www.youtube.com/watch?v=-5NHIBo6gGc' },
    { id: 71, url: 'https://www.youtube.com/watch?v=aMgPWmI-JwA' },
    { id: 72, url: 'https://www.youtube.com/watch?v=FhzM030KPus' },
    { id: 73, url: 'https://www.youtube.com/watch?v=EkrfwWrBDUM' },
    { id: 74, url: 'https://www.youtube.com/watch?v=CwQXVoHkUmk' },
    { id: 75, url: 'https://www.youtube.com/watch?v=EJcx7WXkd4Q' },
    { id: 76, url: 'https://www.youtube.com/watch?v=4W3-Fmjt7sA' },
    { id: 77, url: 'https://www.youtube.com/watch?v=gWxUgDZVsdU' },
    { id: 78, url: 'https://www.youtube.com/watch?v=lmJkMmghZEs' },
    { id: 79, url: 'https://www.youtube.com/watch?v=ePLnqm1aEws' },
    { id: 80, url: 'https://www.youtube.com/watch?v=CzuMTjnj0Rw' },
    { id: 81, url: 'https://www.youtube.com/watch?v=-ltrsy0a_Gc' },
    { id: 82, url: 'https://www.youtube.com/watch?v=04BtLCPullE' },
    { id: 83, url: 'https://www.youtube.com/watch?v=aeaNu7pipDo' },
    { id: 84, url: 'https://www.youtube.com/watch?v=4Abr_TMuGmE' },
    { id: 85, url: 'https://www.youtube.com/watch?v=YN3zdloZbeQ' },
    { id: 86, url: 'https://www.youtube.com/watch?v=zVe8HzT5Md0' },
    { id: 87, url: 'https://www.youtube.com/watch?v=SntESUovHI4' },
    { id: 88, url: 'https://www.youtube.com/watch?v=fAyyiym_KxE' },
    { id: 89, url: 'https://www.youtube.com/watch?v=Oi48hHqWFm4' },
    { id: 90, url: 'https://www.youtube.com/watch?v=R9noKi812bA' },
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
