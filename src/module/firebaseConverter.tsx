import firebase from "firebase/compat/app";
import FirestoreDataConverter = firebase.firestore.FirestoreDataConverter;
import DocumentData = firebase.firestore.DocumentData;
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import SnapshotOptions = firebase.firestore.SnapshotOptions;

export const bookConverter: FirestoreDataConverter<ArtistCategory> = {
  toFirestore(artist: ArtistCategory): DocumentData {
    return {
      artistName: artist.artistName,
      artistValue: artist.artistValue,
      videoIds: artist.videoIds,
      randomVideoNumber: artist.randomVideoNumber,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options?: SnapshotOptions
  ): ArtistCategory {
    const data = snapshot.data(options);
    return {
      artistName: data.artistName,
      artistValue: data.artistValue,
      videoIds: data.videoIds,
      randomVideoNumber: data.randomVideoNumber,
    };
  },
};

// async function getBooks(): Promise<ArtistCategory> {
//   const collRef = await firebase
//     .firestore()
//     .collection("artistVideos")
//     .withConverter(bookConverter)
//     .doc()
//     .get();
//   const book = collRef.data();
//   if (!book) {
//     throw new Error();
//   }
//   return book;
// }
