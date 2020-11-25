function totalMarks(){
    let temp1 =document.getElementById("temp1").value;
    temp1=parseFloat(temp1);

    let temp2 = document.getElementById("temp2").value;
    temp2 = parseFloat(temp2);

    let result1= document.getElementById("result1");
    result1.innerHTML=((temp2*100)/temp1).toFixed(0);

    let finalResult = result1.innerHTML;



    // let temp2 = document.getElementById("temp2").value;
    // temp2 = parseFloat(temp2);

    if(finalResult <=100 && finalResult >=80){
        document.getElementById("result2").innerHTML="<h1> Congragulations! You've Got A+ Grade.";

    }
    else if(finalResult<=80 && finalResult >=70){
        document.getElementById("result2").innerHTML="<h1> Congragulations! You've Got A Grade.";
    }


    else if(finalResult <=70 && finalResult >=60){
        document.getElementById("result2").innerHTML="<h1>You've Got B Grade.";
    }


    else if(finalResult <=60 && finalResult >=50){
        document.getElementById("result2").innerHTML="<h1> You've Got C Grade.";
    }

    else if(finalResult <=50 && finalResult >=40){
        document.getElementById("result2").innerHTML="<h1> You've Got D Grade.";
    }

    else{
            document.getElementById("result2").innerHTML="<h1> Sorry! You dont've got any grade.";
        }
    


}

// function gradeCheck(){
//     let temp2 = document.getElementById("temp2").value;
//     temp2 = parseFloat(temp2);

//     if(temp2 <=100 && temp2 >=80){
//         document.getElementById("result2").innerHTML="<h1> Congragulations! You've Got A+ Grade.";

//     }
//     else if(temp2<=80 && temp2 >=70){
//         document.getElementById("result2").innerHTML="<h1> Congragulations! You've Got A Grade.";
//     }


//     else if(temp2<=70 && temp2 >=60){
//         document.getElementById("result2").innerHTML="<h1>You've Got B Grade.";
//     }


//     else if(temp2<=60 && temp2 >=50){
//         document.getElementById("result2").innerHTML="<h1> You've Got C Grade.";
//     }

//     else if(temp2<=50 && temp2 >=40){
//         document.getElementById("result2").innerHTML="<h1> You've Got D Grade.";
//     }

//     else{
//             document.getElementById("result2").innerHTML="<h1> Sorry! You dont've got any grade.";
//         }


// }