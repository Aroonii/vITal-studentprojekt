# vITal-studentprojekt

This project is a proof of concept of a vital parameter entry web app developed as a student project at the University of Linköping for Region Östergötland (Emergency Ward at Vrinnevisjukhuset i Norrköping) during the autumn semester 2019. The app is meant to digitize the entry of vital parameters taken in patient care and automate calculations of NEWS2 scores from these parameters. The web app also uses the device's (e.g. phone's) camera to scan barcodes of patient's id-wrist-bands. 

 * Documentation (UX, design decisions etc.) isis in the subdirectory `Documents`
 * The Angular2 web app itself is in the subdirectory `vITalAngular`.
 * The the Python Flask back-end server used for testing, authentication and mocking philips machine data is in the `Backend` subdirectory.

When deploying the project make sure that all mentions of the URL https://brewinabox.se, in the Angular app, are changed to where you have depolyed the back-end server.
