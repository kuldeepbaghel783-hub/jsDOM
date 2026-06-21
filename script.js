 

    function greetUser() {

        
        let name = document.getElementById("username").value;

        if(name === ""){
            alert("Please enter your name");
        }
        else{
            document.getElementById("greeting").innerText =
            "Hello, " + name;
        }
    }



    function changeColor(box){
        let colorName = box.innerText;
        box.style.backgroundColor = colorName;

        if(colorName === "yellow"){
            box.style.color = "black";
        }else{
            box.style.color = "white";
        }
    }











