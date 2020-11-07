    $('#btnSendData').click(() => {
          const firstName = $('#firstName').val();
          const lastName = $('#lastName').val();
          const age = $('#age').val();
          const gender = $('#gender').val()
          const country = $('#country').val();
          const currentCountry = $('#currentCountry').val();
          const currentCity = $('#currentCity').val();
          const state = $('#state').val();
          const motherLanguage= $('#motherLanguage').val();
          const maritalStatus = $('#maritalStatus').val();

          const data = {
              firstName,
              lastName,
              age,
              gender,
              country,
              currentCountry,
              currentCity,
              state,
              motherLanguage,
              maritalStatus
          }

          var i = 0; var size = Object.keys(data);
          var dataside = 0;

          for(var dados in data){
            // console.log(dados);
            if(data[dados] == undefined || data[dados] == null || data[dados] == ''){
              dataside;
            } else {
              dataside += 1;
            }
          }

          if(dataside == 10){
            axios({
            method: 'post',
            url: 'http://localhost:3000/people/save',
            data: data
            }).then(() => {
                $('#exampleModal').modal('show');
            }).catch(err => {
                $('#exampleModal2').modal('show');
            });
          } else {
                $('#exampleModal2').modal('show');
          }
       

      }) 
      

      function restart(){
        location.reload();
      }
