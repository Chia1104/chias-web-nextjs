import { initializeApp, FirebaseOptions, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

function createFirebaseApp(config: FirebaseOptions) {
    try {
        return getApp();
    } catch {
        return initializeApp(config);
    }
}

const app = createFirebaseApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const storage = getStorage(app, 'gs://chia1104.appspot.com');