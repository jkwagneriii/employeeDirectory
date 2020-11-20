//https://stackoverflow.com/questions/14653647/how-to-store-operator-in-variable-using-javascript

var operators = {
    '+': function(a, b){
        let nameA = a.name.first.toLowerCase(), nameB = b.name.first.toLowerCase();
    
        //sort string ascending
        if (nameA < nameB)
         return -1;
        if (nameA > nameB)
         return 1;
         //default return no sorting 
         return 0;
      },
    '-': function(a, b){
        let nameA = a.name.first.toLowerCase(), nameB = b.name.first.toLowerCase();
    
        //sort string ascending
        if (nameA > nameB)
         return -1;
        if (nameA < nameB)
         return 1;
         //default return no sorting 
         return 0;
      }
}

export default operators;