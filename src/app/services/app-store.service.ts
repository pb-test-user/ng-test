import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  // Timestamp could be used for storage maintenance
  save(key, val) {
    const restored = this.restore(key);
    const value = Object.assign(restored || {}, val);
    const time = new Date().getTime();
    localStorage.setItem(key, JSON.stringify({
      value, time
    }));
  }

  restore(key) {
    const t = new Date().getTime();
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item).value : null;
  }
}
