console.log("Dictionary Project");

let input=document.getElementById("input");
let search=document.getElementById("search");
let reset= document.getElementById("reset");

//event listener for search function
search.addEventListener('click',searchfunc);

//event listener for the reset function
reset.addEventListener('click',resetfunc);


//seracg function to trigger on clicking the searchfunction
function searchfunc(){
    // console.log("you clicked search");
    let data=input.value;
    // console.log(data);
    let url=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${data}`;
    
    //using the fetch api
     fetch(url).then(function(response){
        return response.json();
     }).then(function(data){
      //   console.log(data);

         //meaning(definition of the word)
         let definition1=data[0].meanings[0].definitions[0].definition;
      //   console.log(definition1);

        //partof speech
        let partofspeech=data[0].meanings[0].partOfSpeech;
      //   console.log(partofspeech);

         // pronunciation
         let pronunciation=data[0].phonetics[0].audio;
      //   console.log(pronunciation);

     //incorporate the audio file  
         let audio=new Audio(pronunciation);
         audio.play();


//get the element by id and insert into it
        let answer=document.getElementById("answer");
        answer.innerHTML=`
      <div class="jumbotron">
            <div class="alert alert-primary" >
            Meaning : ${definition1}
            </div>
            <div class="alert alert-primary" >
            Part of Speech : ${partofspeech}
            </div>
      </div>
        `
     });
}
//Fucntion for resteing the written thing in the input box
function resetfunc(){
   input.value="";
}