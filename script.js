(function(){

        'use strict';
        let convertType = "meter";
        const heading = document.querySelector('h1');
        const intro = document.getElementById('headChange');
        const answer = document.getElementById('answer');
        const form = document.getElementById('convert');
        
        
        document.addEventListener('keydown', (event)=>{
            var key = event.code;
            if(key === "KeyK"){
                // Kilometers to meters
                convertType="kilometers";
                heading.innerHTML="Kilometers to Meters Converter."
                intro.innerHTML="Type in a number of Kilometers and click the button to convert the distance to Meters."
            }
            else if(key === "KeyM"){
                // Meters to Kilometers
                convertType="meters";
                heading.innerHTML="Meters to Kilometers Converter."
                intro.innerHTML="Type in a number of Meters and click the button to convert the distance to Kilometers."
            }
        })

        form.addEventListener('submit', (event)=>{
            event.preventDefault();
             var distance = parseFloat(document.getElementById('distance').value);
            if(distance){
                // Convert kilometers to meter.
                if(convertType=="kilometers"){
                    var conversion = (distance * 1000).toFixed(2);
                    answer.innerHTML =  `<h2>The ${distance} Kilometers converts to ${conversion} Meters</h2>`
                }
                else{
                    // default meter to kilometers
                    var conversion = (distance * 0.001).toFixed(2);
                    answer.innerHTML =  `<h2>The ${distance} Meters converts to ${conversion} Kilometers</h2>`
                    
                }

            }
            else{
                answer.innerHTML="Please provide a number!";
            }
        })

        
})();
