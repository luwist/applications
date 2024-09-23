import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  getDoc,
  getDocs,
  onSnapshot,
} from '@angular/fire/firestore';
import { Photo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PhotoRepository {
  constructor(private _firestore: Firestore) {}

  async getAllPhotos(): Promise<Photo[]> {
    const photos: Photo[] = [];
    const collRef = collection(this._firestore, 'photos');
    const querySnapshot = await getDocs(collRef);

    querySnapshot.forEach((doc) => {
      const photo = doc.data() as Photo;

      photos.push(photo);
    });

    return photos;
  }

  async add(photo: Photo): Promise<void> {
    const collRef = collection(this._firestore, 'photos');

    await addDoc(collRef, photo);
  }
}
