                            // <tr class="data-row">
                            //     <td class="column1">28</td>
                            //     <td class ="column2">Larisa</td>
                            //     <td class="column3">Llaneza</td>
                            //     <td class="column4">SCallison@non.org</td>
                            //     <td class="column5">(763)248-9034</td>
                            // </tr>





                            function renderRow(obj)
                            {
                                var tableBody = $("tbody")
                                var dataRow = $("<tr>").attr("class", "data-row")
                                var id = $("<td>").attr("class","column1")
                                    $(id).html(obj.id)
                                var firstName = $("<td>").attr("class","column2")
                                    $(firstName).html(obj.firstName)
                                var lastName = $("<td>").attr("class","column3")
                                    $(lastName).html(obj.lastName)
                                var email = $("<td>").attr("class","column4")
                                    $(email).html(obj.email)
                                var phone = $("<td>").attr("class","column5")
                                    $(phone).html(obj.phone)
                            
                                $(dataRow).append(id)
                                $(dataRow).append(firstName)  
                                $(dataRow).append(lastName)  
                                $(dataRow).append(email)
                                $(dataRow).append(phone)
                                $(tableBody).append(dataRow)
                            
                                
                            
                               
                            
                                
                            
                                $(dataRow).click(function(){
                                    $(".data-row").removeClass("active")
                                    $(dataRow,this).addClass("active") 

                                    flag= obj.id
                                      
                                     localStorage.setItem("currObject", JSON.stringify(obj))
                                     console.log(localStorage)
                                 })
                            
                                
                            }





$(document).ready(function(){
    console.log("Dom ready")
    $.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D', function(data){
        console.log(data)
         
        
        
        for(var i=0; i<data.length; i++)
        {
         renderRow(data[i]) 
        }

        var CurrObj = JSON.parse(localStorage.getItem("currObject"))
     
        var infoContent = $("#info-content")

        var nameBar = $("<div>")
        
      var description =$("<div>")
        
      var addressBar = $("<div>")
        $(addressBar).html("ADDRESS :")
      var city =$("<div>")
        
      var state =$("<div>")
        
      var zip =$("<div>")
        
   
   
      $(infoContent).append(nameBar)
      $(infoContent).append(description)
      $(infoContent).append(addressBar)
      $(infoContent).append(city)
      $(infoContent).append(state)
      $(infoContent).append(zip)

      function renderRow(obj)
                            {
                                var tableBody = $("tbody")
                                var dataRow = $("<tr>").attr("class", "data-row")
                                var id = $("<td>").attr("class","column1")
                                    $(id).html(obj.id)
                                var firstName = $("<td>").attr("class","column2")
                                    $(firstName).html(obj.firstName)
                                var lastName = $("<td>").attr("class","column3")
                                    $(lastName).html(obj.lastName)
                                var email = $("<td>").attr("class","column4")
                                    $(email).html(obj.email)
                                var phone = $("<td>").attr("class","column5")
                                    $(phone).html(obj.phone)
                            
                                $(dataRow).append(id)
                                $(dataRow).append(firstName)  
                                $(dataRow).append(lastName)  
                                $(dataRow).append(email)
                                $(dataRow).append(phone)
                                $(tableBody).append(dataRow)
                            
                                
                            
                               
                            
                                
                            
                                $(dataRow).click(function(){
                                    $(".data-row").removeClass("active")
                                    $(dataRow,this).addClass("active") 
                                      
                                    $(nameBar).html("User selected : " + obj.firstName +" "+ obj.lastName)
                                    $(description).html("Description : "+ obj.description)
                                    $(city).html("City: "+ obj.address.city)
                                    $(state).html("State: "+ obj.address.state)
                                    $(zip).html("Zip: "+ obj.address.zip)

                                    
                                 })
                            
                                
                            }




      
                            $(document).ready(function(){
                                
                                $("#search-box").on("keyup", function() {
                                  var value = $(this).val().toLowerCase();
                                  $("tbody tr").filter(function() {
                                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                                  });
                                });
                              });
      
        
    })
    
})




/* <div id="info-wrapper">
            <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
            <div id="info-content">
                <div><b>User selected:</b> Marcellin Shrestha</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
                    </textarea>
                </div>
                <div><b>Address:</b> 6480 Nec Ct</div>
                <div><b>City:</b> Dinwiddie</div>
                <div><b>State:</b> NV</div>
                <div><b>Zip:</b> 91295</div>
            </div>
        </div> */


       