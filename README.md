# A simple example of MFA

To try to run this project:

* `cd` into the project folder and run `npm install` to get all the dependencies.

## Dependencies:
* Express
* EJS
* qrcode
* *speakeasy*
* Nodemon

## Usage

* http://localhost:8080/ would return the base stored *Secret Key* as well as the QRCode
* Open Google Authenticator and add the application by scanning the given QRCode
* Once done, hit the following url: http://localhost:8080/:secretToken
* If the token you have entered is correct, it would redirect you to a success page else an error page.
