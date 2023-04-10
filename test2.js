const axios = require('axios')

axios.get('https://reqres.in/api/users')
  
  // Show response data
  .then(function(res){
        var f =0;
        for(i = 0 ; i < res.data.data.length;i++){
            if(res.data.data[i].first_name.toLowerCase().startsWith("e") && f == 0){
                console.log(res.data.data[i])
                f = 1;
                
            }
        }
    })
  .catch(function(err){
    console.log(err.data)
})