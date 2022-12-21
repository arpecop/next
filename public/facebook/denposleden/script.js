function dothejob(data) {
    var quote_id;
 
            if (data.birthday) {
                var hrbirthday = data.birthday.split("/");
           //value null = 1905
               quote_id =  hrbirthday[2] - 1905  - 8;
        
             
             
          

            } else {
                var quote_id = randomFromTo(18, 33);
             
               
            }

            return(quote_id);



}



      
 

 