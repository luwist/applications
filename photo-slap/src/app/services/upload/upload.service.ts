import { Injectable } from '@angular/core';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytes,
  uploadString,
} from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private _storage: Storage) {}

  async uploadPhoto(photo: Photo): Promise<string> {
    const storageRef = ref(
      this._storage,
      `${new Date().getTime()}.${photo.format}`
    );
    const imageBase64 = photo.dataUrl as string;

    await uploadString(storageRef, imageBase64, 'data_url');

    return await getDownloadURL(storageRef);
  }
}
