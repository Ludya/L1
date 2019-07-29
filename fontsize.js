
            function fontt(asd){
                var target = document.querySelector('#content');
                if(asd.value === 'big'){
                target.style.fontSize = '5rem';
                asd.value = 'medium'
                }
                else if(asd.value === 'medium'){
                target.style.fontSize = '3.5rem';
                asd.value = 'small'
                }
                else{
                target.style.fontSize = '2rem';
                asd.value = 'big'
                }
            }
