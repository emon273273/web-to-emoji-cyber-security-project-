let emon=""

function encryption(){

  document.querySelector("#encrypt-btn").addEventListener("click",function(){

     let input=document.getElementById("textmsg").value;
     let pass=document.getElementById("password").value
    //  console.log(input)
    //  console.log(pass)

     //input ke array

     let str=input.split("")
     let str1=pass.split("")
//  let str3=str.concat(str1);
 
//     console.log(str1)



//converting input in an emojis


     str.forEach(element=>{

      emon+=`&#128${element.charCodeAt()}`
     })
     console.log(emon)

//storing in #result
    
     document.querySelector("#result").innerHTML=emon;


      //local stroage a save
      let dataarr=[];
      if(JSON.parse(localStorage.getItem('data1'))){

        dataarr=JSON.parse(localStorage.getItem("data1"))

        dataarr.push=({"pass":pass,"input":input,"emon":emon})
      }
      else{

      

      dataarr=[{"pass":pass,"input":input,"emon":emon}]
 
      }

      localStorage.setItem('data1',JSON.stringify(dataarr))
  })

 



 
}

encryption()

//Encrypt theke decrept page a neya ba decrypt theeke encrypt a neya



function btnClicking() {

    //decryption button
  document.querySelector("#dec-btn").addEventListener("click", function () {
    document.querySelector("#decryption").style.display = "block";

    document.querySelector("#encryption").style.display= "none";

    //color change korlam

    document.querySelector("#dec-btn").style.backgroundColor="#333";
    document.querySelector("#enc-btn").style.backgroundColor="#222";

    //arrow niye kaj 

    document.querySelector("#main >h1 span img").style.rotate="270deg";
  });



//encryption button 
  document.querySelector("#enc-btn").addEventListener("click", function () {
    document.querySelector("#encryption").style.display= "block";

    document.querySelector("#decryption").style.display= "none";

    //color change 
    document.querySelector("#dec-btn").style.backgroundColor="#222";
    document.querySelector("#enc-btn").style.backgroundColor="#333";
    document.querySelector("#main >h1 span img").style.rotate="90deg";
    document.querySelector("#result").style.display="none"
  });

  document.querySelector("#encrypt-btn").addEventListener("click",function(){

    document.querySelector("#result").style.display="block"
  })



  //decrypt button a click korle

  document.querySelector("#enc-btn").addEventListener("click",function(){

    document.querySelector("#result").style.display="block"
  })


  document.querySelector("#dec-btn").addEventListener("click",function(){

    document.querySelector("#result").style.display="block"
  })
}
 btnClicking() 

 //local storage niye kaj

 let arr=
localStorage.getItem("")