import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Fullscreen2Service {

  constructor() { }

  public get isFullscreen(): boolean {
    return window.innerHeight === screen.height;
  }

  public isSupported(document: HTMLDocument): boolean {
    const doc = document.documentElement as any;
    return doc.requestFullScreen || doc.mozRequestFullScreen || doc.webkitRequestFullscreen || doc.msRequestFullscreen;
  }

  public enter(document: HTMLDocument) {

    const elem = document.documentElement as any;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  public exit(document: HTMLDocument) {
    const doc = document as any;
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      /* Firefox */
      doc.mozCancelFullScreen();
    } else if (doc.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      /* IE/Edge */
      doc.msExitFullscreen();
    }
  }
}
