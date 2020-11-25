const express = require('express');
const speakeasy = require('speakeasy');
const path = require('path');
const qrcode = require('qrcode');

const app = express();
const PORT = 8080;

app.use(express.json());
app.set('view engine', 'ejs');

const auth_url = 'otpauth://totp/SecretKey?secret=KFWVOZSRMESGISRKJBOSIUKWOR2GK4LUOISUU5ZVJRIXKZS3HNSA';
const secret = 'KFWVOZSRMESGISRKJBOSIUKWOR2GK4LUOISUU5ZVJRIXKZS3HNSA';

app.get('/', (req, res) => {
    // const { base32: secret, otpauth_url: auth_url } = speakeasy.generateSecret();
    qrcode.toDataURL(auth_url, (err, data_url) => {
        if (err) throw err;

        res.render('index', {
            secret, data_url
        });
    })

});

app.get('/:token', (req, res) => {
    var verified = speakeasy.totp.verify({ secret: secret,
        encoding: 'base32',
        token: req.params.token });

    if(verified) {
        res.render('success');
    }
    res.render('error');
});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
});