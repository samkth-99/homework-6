
const boldLine = () => {
    var boldHeaders = document.getElementsByTagName("p");//get the paragraph tags
    console.log(boldHeaders); //Displays 
    for (var i=0; i<boldHeaders.length; i++) {                                                    
        boldHeaders[i].style.fontWeight = "bold";
        boldHeaders[i].style.backgroundColor = "yellow";
    }
    };
boldLine();
  
  
  