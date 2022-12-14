
    function add_item(){
        let item = document.getElementById("box");
        let list_item = document.getElementById("list_item");
        if(item.value !=""){
            let make_li = document.createElement('li');
            make_li.appendChild(document.createTextNode(item.value));
            list_item.appendChild(make_li);
            item.value=""

            make_li.onclick = function(){
                this.parentNode.removeChild(this);
            }
        }
        else{
            alert("please add a value to item");
        }
    }






    anime({
        targets: '.heading',
        translateX: 10,
        scale: 1,
        rotate: '1turn',
        duration: 3000
      });

      anime({
        targets: '.information',
        translateX: 10,
        scale: 1,
        rotate: '1turn',
        duration: 3000
      });


    