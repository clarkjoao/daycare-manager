import { Injectable } from '@angular/core';

// Firebase
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  Query,
} from '@angular/fire/firestore';

@Injectable()
export class ApiService {
  constructor(private store: AngularFirestore) {}

  getUsers(params?) {
    const data: AngularFirestoreCollection = this.store.collection(
      'profiles',
      (ref) => {
        let query: Query = ref;

        if (params) {
          query = query.where(params.filter, params.compare, params.value);
        }

        return query;
      }
    );

    return data;
  }

  get(collection, ref) {
    return this.store.doc(`${collection}/${ref}`);
  }

  getDocument(collection, ref) {
    const doc: AngularFirestoreDocument<any> = this.store
      .collection(collection)
      .doc(ref);
    return doc;
  }

  create(collection, data) {
    return this.store.collection(collection).add({
      created_at: new Date(),
      ...data,
    });
  }

  createDoc(collection, ref, data) {
    return this.store.collection(collection).doc(ref).set(data);
  }

  delete(collection, ref) {
    return this.store.doc(`${collection}/${ref}`).delete();
  }

  update(collection, ref, data) {
    return this.store.doc(`${collection}/${ref}`).set(data);
  }
}
