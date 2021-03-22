//africa

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const MongoClient = require('mongodb').MongoClient;
// require('dotenv').config();
// const port = 4000;

// const uri = `mongodb+srv://${process.env.DBNAME}:${process.env.DBPASS}@cluster0.02jxk.mongodb.net/${process.env.DBCOLLECTION}?retryWrites=true&w=majority`;

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect((err) => {
//   const coinCollection = client.db('jsonData').collection('coinCollection');
//   const sellCoinCollection = client
//     .db('stableCoin')
//     .collection('sellCoinCollection');

//   //sellerdata

//   app.post('/buyerdata', (req, res) => {
//     const singlebuyerdata = req.body;
//     console.log(singlebuyerdata);
//     coinCollection.insertOne(singlebuyerdata).then((result) => {
//       res.send(result.insertedCount > 0);
//     });
//   });

//   app.post('/sellerdata', (req, res) => {
//     const singlesellerdata = req.body;
//     console.log(singlesellerdata);
//     sellCoinCollection.insertOne(singlesellerdata).then((result) => {
//       res.send(result.insertedCount > 0);
//     });
//   });

//   console.log('database connected');
// });

// app.get('/', (req, res) => {
//   res.send('Hello !');
// });

// app.listen(process.env.PORT || port, () => {
//   console.log(`we are opened at ${port}`);
// });

const express = require('express');
const app = express();
const port = 5000;
const bp = require('body-parser');
const cors = require('cors');
const env = require('dotenv');
const qr = require('qrcode');

env.config();
// app.set('view engine', 'ejs');
app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.get('/', (req, res) => {
  // res.render('index');
  res.send('data');
});

app.post('/qrcode', (req, res) => {
  const {
    name,
    busName,
    journeyDate,
    time,
    fromPlace,
    toPlace,
    receiveDate,
  } = req.body;
  console.log(
    name,
    busName,
    journeyDate,
    time,
    fromPlace,
    toPlace,
    receiveDate
  );
  const qrcodeData =
    'name:' + name + ':bus:' + busName + journeyDate + ':time:' + time;
  const qrCodeImageData = qrcodeData.replace(/\s+/g, '');
  console.log(qrCodeImageData);
  if (qrCodeImageData) res.send('Empty Data!');
  qr.toDataURL(qrCodeImageData, (err, src) => {
    if (err) res.send('Error occured');
    else {
      console.log(src);

      const setQRcodeToDataBae = {
        name,
        busName,
        journeyDate,
        time,
        fromPlace,
        toPlace,
        receiveDate,
        qrCodeImageData,
        src,
      };
      console.log(setQRcodeToDataBae);
      // qrcodeCollection.insertOne(setQRcodeToDataBae).then((result) => {
      //   res.send(result.insertedCount > 0);
      // });
    }
  });
});

app.listen(port, () => {
  console.log('Server at 5000');
});

//
//
//
//
//
//
//
//
//

// const express = require('express');
// const app = express();
// const port = 5000;
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const env = require('dotenv');
// const qrcode = require('qrcode');
// //mongodb
// // const MongoClient = require('mongodb').MongoClient;
// // const uri = `mongodb+srv://${process.env.DBNAME}:${process.env.DBPASS}@cluster0.02jxk.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
// env.config();

// // app.set('view engine', 'ejs');

// //middlewares

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // const client = new MongoClient(uri, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // client.connect((err) => {
// //   const qrcodeCollection = client.db(`${process.env.DATABASE}`).collection('qrcodeCollection');
//   // const sellCoinCollection = client
//   //   .db(`${process.env.DATABASE}`)
//   //   .collection('sellCoinCollection');

// //   app.post('/buyerdata', (req, res) => {
// //     const singlebuyerdata = req.body;
// //     console.log(singlebuyerdata);
//   //   qrcodeCollection.insertOne(singlebuyerdata).then((result) => {
// //       res.send(result.insertedCount > 0);
// //     });
// //   });

// //});

// //
// app.post('/qrcode', (req, res) => {
//   const { name, busName, journeyDate, time } = req.body;
//   console.log(name, busName, journeyDate, time);
//   const qrcodeData =
//     'name:' + name + ':bus:' + busName + journeyDate + ':time:' + time;
//   console.log(qrcodeData.replace(/\s+/g, ''));
//   if (qrcodeData) res.send('Empty Data!');
//   //let qrcodeImage;
//   qrcode.toDataURL(qrcodeData, (err, src) => {
//     if (err) res.send('Error occured');
//     console.log(src);
//     //qrcodeImage = src;
//     //  res.render('scan', { src });
//   });
//  // console.log(qrcodeImage);

// app.get('/', (req, res) => {
//   // res.render('index');
//   res.send('data');
// });

// app.listen(port, () => {console.log('Server at 5000')})
