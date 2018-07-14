var tika = require('tika');
 
var options = {
 
    // Hint the content-type. This is optional but would help Tika choose a parser in some cases.
    contentType: 'application/pdf'
};
 
tika.text('rawPDF/07113786.pdf', options, function(err, text) {
    let textData = text.split('\n');
    let pattern = new RegExp('ABSTRACT');  //start index 
    let i=0;
    let sectionFound=false;
    
    for(let line of textData){
        
        if((pattern.exec(line) ) && !sectionFound){
            sectionFound = true;
        }
        if(sectionFound && (textData[i].indexOf('INDEX TERMS')>=0)){  //end index
            console.log(textData)
          break;
        }
    
        i++;
      }
});