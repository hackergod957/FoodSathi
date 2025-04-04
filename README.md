I've configured the google-services.json file for the Firebase project food-2b9f5.
The webClientId in the code matches the client_id for client_type: 3 in the google-services.json file.
I've added the SHA-1 and SHA-256 fingerprints of the debug keystore to the Firebase project.
Google Sign-In is enabled in the Firebase Authentication settings.
When I attempt to sign in using Google, I get the following error in the console:

(NOBRIDGE) LOG Error during sign-in: [com.google.android.gms.common.api.ApiException: DEVELOPER_ERROR]

I've verified the configuration multiple times, but the issue persists. Based on my research, this error could be related to a mismatch in the webClientId, SHA fingerprints, or Firebase project setup.

Could you please take a look and let me know if there's anything I might have missed or if there's a specific step I should revisit?
