
		
        var bunuelo=document.getElementById('frrra');
      
      function fr()
      {

       pan=bunuelo.value;
       document.getElementById('d1').innerHTML=pan;

      }



		var a1=document.getElementById('d1');
		function teclado() {
		console.log(event.code);
		console.log(event.type);
		
		
        
        

			if(event.code=="KeyA")
			{
				a1.className = "B2";
				
			}
			if(event.code=="KeyB")
			{
				a1.className = "container";
			}
			if(event.code=="KeyC")
			{
				a1.className = "B3";
			}
             if(event.code=="KeyD")
			{
				a1.className = "B4";
			}
			
             if(event.code=="KeyN")
			{
				a1.className = "B5";
			}

             if(event.code=="KeyT")
			{
				a1.className = "B6";
			}

        }