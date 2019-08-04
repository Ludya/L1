var link = {
    setcolor:function(color){
    // var arin = document.querySelectorAll('a');
    //     var i = 0;
    //     while(i < arin.length){
    //     arin[i].style.color = color;
    //     i = i + 1;
    //     }
    $('a').css('color',color);
    }
}
var body={
    setcolor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
    },
    setbackgroundcolor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
    }
}
function ca(self){
    var target = document.querySelector('body');
    if(self.value === 'black'){
        body.setbackgroundcolor('rgba(0, 0, 0, 0.877)');
        body.setcolor('white')
        self.value = 'white';

        link.setcolor('rgb(218, 89, 179)');
    }
    else{
        body.setbackgroundcolor('white');
        body.setcolor('black');
        self.value = 'black';
        
        link.setcolor('blue');
    }
}


