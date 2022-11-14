import {db} from "../firebase";
import {collection, getDocs} from "firebase/firestore/lite";
import firebase from 'firebase/compat';
import SnapshotOptions = firebase.firestore.SnapshotOptions;
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import DocumentData = firebase.firestore.DocumentData;
import FirestoreDataConverter = firebase.firestore.FirestoreDataConverter;
import firestore = firebase.firestore;


export type Book = {
    id: string
    title: string
}
//
export const bookConverter: FirestoreDataConverter<ArtistCategory> = {
    toFirestore(artist: ArtistCategory): firestore.DocumentData {
        return {
            artistName: artist.artistName, artistValue: artist.artistValue, videoIds: artist.videoIds, randomVideoNumber: artist.randomVideoNumber
        }
    },
    fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>, options?: SnapshotOptions): ArtistCategory {
        const data = snapshot.data(options)
        return {
            artistName: data.artistName, artistValue: data.artistValue, videoIds: data.videoIds, randomVideoNumber: data.randomVideoNumber
        }
    },
}

// /** Firestore から books コレクションを読み込む。 */
// export async function getBooks(): Promise<A> {
//     const collRef = await firebase.firestore()
//         .collection('books')
//         .withConverter(bookConverter)
//         .doc().get();
//     const book = collRef.data()
//     if (!book) {
//         throw new Error()
//     }
// return  book;
// }

