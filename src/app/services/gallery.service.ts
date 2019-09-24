import { Injectable } from '@angular/core';
import { CordovaService } from '../services/app-cordova.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private album = 'Reddit';

  constructor(private cordova: CordovaService) { }

  /**
   * Adds an image to the gallery using the remote url
   */
  public addImage(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.cordova.enabled) {
        const api = this.cordova.api;
        api.plugins.photoLibrary.saveImage(url, this.album, (item) => {
          resolve(item);
        }, (err) => {
          reject(err);
        });
      }
    });
  }

  /*
   * Remotes an image from the gallery using the library item
   */
  public removeImage(url): any {
      /*
      @todo
      */
  }
}
