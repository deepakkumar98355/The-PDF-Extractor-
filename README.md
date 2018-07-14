# The PDF Extractor

A sample script to use Apache Tika to decode PDF into text and extracting requisite data  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
step 1: npm install 
step 2: node test_han.js

### Prerequisites

Apcahe Tika needs node gyp to externally run python and C++ embedded library codes in case getting any error to that node gyp ,java envrionment variable needs to be set accordingly .

```
var tika = require('tika');
 
var options = {
 
    contentType: 'application/pdf'
};
 
tika.text('test/data/file.pdf', options, function(err, text) {
    console.log(text);
});

```

## Built With

* https://www.npmjs.com/package/tika


## Authors

* **Deepak Kumar** - *Initial work* - [deepakkumar98355](https://github.com/deepakkumar98355)


## Further Enhancement

* Can be enhanced to extract specific using data custom script and regex pattern.


