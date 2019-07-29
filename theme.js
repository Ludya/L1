
            function ca(self){
                var target = document.querySelector('body');
                if(self.value === 'black'){
                    target.style.backgroundColor = 'rgba(0, 0, 0, 0.877)';
                    target.style.color = 'white';
                    self.value = 'white'
                    var arin = document.querySelectorAll('a');
                    var i = 0;
                    while(i < arin.length){
                    arin[i].style.color = 'rgb(218, 89, 179)';
                    i = i + 1;
                    }
                }
                else{
                    target.style.backgroundColor = 'white';
                    target.style.color = 'black';
                    self.value = 'black'
                    var arin = document.querySelectorAll('a');
                    var i = 0;
                    while(i < arin.length){
                    arin[i].style.color = 'black';
                    i = i + 1;
                    }
                }
            }
