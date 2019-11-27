import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'video-poc';

  @ViewChild('videoElement', {static: true}) videoElement: any;
  video: any;

  initCamera(config: any) {
    const browser: any = navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.video.srcObject = stream;
      this.video.play();
    });
  }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
    this.initCamera({video: true, audio: false});
  }
}
