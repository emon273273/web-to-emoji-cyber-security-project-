let emon=""

let found;
function encryption(){

  document.querySelector("#encrypt-btn").addEventListener("click",function(){

     let input=document.getElementById("textmsg").value;
     let pass=document.getElementById("password").value
    //  console.log(input)
    //  console.log(pass)

     //input ke array

     let str=input.split("")
   
//  let str3=str.concat(str1);
 
//     console.log(str1)



//converting input in an emojis


     str.forEach(element=>{

      emon+=`&#128${element.charCodeAt()} `
     })
    //  console.log(emon)

//storing in #result
    
     document.querySelector("#result").innerHTML=emon;


      //local stroage a save
      let dataarr=[];
      if(JSON.parse(localStorage.getItem('data1'))){

        dataarr=JSON.parse(localStorage.getItem("data1"))

        dataarr.push({"pass":pass,"input":input,"emon":emon})
      }
      else{

      

      dataarr=[{"pass":pass,"input":input,"emon":emon}]
 
      }

      localStorage.setItem('data1',JSON.stringify(dataarr))
  })

 



 
}



//Encrypt theke decrept page a neya ba decrypt theeke encrypt a neya

function decryption(){

  document.querySelector("#decrypt-btn").addEventListener("click",function(){

    let emon2=""
    //getting emoji msg
    let input2=document.querySelector("#emojimsg").value
      //getting final password
    let password2=document.querySelector("#finalpassword").value

    let  user=JSON.parse(localStorage.getItem('data1'))

    // console.log(user)

    let str2=input2.split(" ")

   str2.forEach(e=>{
    emon2+=`&#${(e.codePointAt(0))} `

   });

    console.log(emon2)

let found;

    for(let i of user){

      if(i.emon===emon2){
      found=i;
    console.log(i);
      }
    }

    if(found.emon===emon2 && found.pass==password2){

      document.querySelector("#result").style.display="block"
      document.querySelector("#result").style.color="#eee"

      document.querySelector("#result").innerHTML=found.input;

    }else{
      document.querySelector("#result").style.display="block"
      document.querySelector("#result").style.color="red"
      document.querySelector("#result").innerHTML="wrong  password";
    }








  })
}



function btnClicking() {

  document.querySelector("button").addEventListener("click", function () {
      document.querySelector("#result").style.display = "block"
      // console.log(localStorage.getItem("password"))
      // console.log(localStorage.getItem("emojis"))
  })
  document.querySelector("#dec-btn").addEventListener("click", function () {
      document.querySelector("#result").style.display = "none"
      document.querySelector("#decryption").style.display = "block"
      document.querySelector("#encryption").style.display = "none"
      document.querySelector("#dec-btn").style.backgroundColor = "#333"
      document.querySelector("#enc-btn").style.backgroundColor = "#222"
      document.querySelector("#main>h1 span img").style.rotate = '270deg'
  })
  document.querySelector("#enc-btn").addEventListener("click", function () {
      document.querySelector("#decryption").style.display = "none"
      document.querySelector("#result").style.display = "none"
      document.querySelector("#encryption").style.display = "block"
      document.querySelector("#dec-btn").style.backgroundColor = "#222"
      document.querySelector("#enc-btn").style.backgroundColor = "#333"
      document.querySelector("#main>h1 span img").style.rotate = '90deg'

  })
}
 btnClicking() 

 encryption()
 decryption();
 //local storage niye kaj
