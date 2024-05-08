let findMaxAndMin = () =>  {

    let num1 = (document.getElementById("num1").value);
    let num2 = (document.getElementById("num2").value);
    let num3 = (document.getElementById("num3").value);


    let max = Math.max(num1, num2, num3);


    let min = Math.min(num1, num2, num3);


console.log("Maximum element :" + max  )
console.log("Minimum element :" + min  )
}  



        let VovelOrConsonant = () => {

        let character = document.getElementById("character").value ;
        
        if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
            var result = "The character '" + character + "' is a vowel.";
        } else {
            var result = "The character '" + character + "' is a consonant.";
        }

        console.log(result);
}



        let Multi = () => {
              
            let number = (document.getElementById("number").value);
            
            for (let i = 1; i <= 12; i++) {
                let result = number * i; 
                console.log(number + " x " + i + " = " + result);
            }
        }

                 let printEvenNumbers = () => {

                    let number = document.getElementById("number2").value;

                    
                    for (let i = 0; i <= number; i++) {
                        if(i % 2 === 0)
                            {
                                console.log(i);
                            }
                    }
                }

                 
    let calAvgPerMarks = () => {
        
        let marks1 = parseFloat(document.getElementById("marks1").value);
        let marks2 = parseFloat(document.getElementById("marks2").value);
        let marks3 = parseFloat(document.getElementById("marks3").value);
        let marks4 = parseFloat(document.getElementById("marks4").value);
        let marks5 = parseFloat(document.getElementById("marks5").value);

        let totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
        let averageMarks = totalMarks / 5;
        let percentage = (totalMarks / 500) * 100;
        console.log("Total Marks: " + totalMarks);
        console.log("Average Marks: " + averageMarks);
        console.log("Percentage: " + percentage + "%");
      }




      let calculateGrade = () => {

        let physicsMarks = parseFloat(document.getElementById("physicsMarks").value);
        let chemistryMarks = parseFloat(document.getElementById("chemistryMarks").value);
        let biologyMarks = parseFloat(document.getElementById("biologyMarks").value);
        let mathematicsMarks = parseFloat(document.getElementById("mathematicsMarks").value);
        let computerMarks = parseFloat(document.getElementById("computerMarks").value);
  

        let totalMarks = physicsMarks + chemistryMarks + biologyMarks + mathematicsMarks + computerMarks;
  

        let percentage = (totalMarks / 500) * 100;
  

        let grade;
        if (percentage >= 90) {
            grade = "A+";
        } else if (percentage >= 80) {
            grade = "A";
        } else if (percentage >= 70) {
            grade = "B";
        } else if (percentage >= 60) {
            grade = "C";
        } else if (percentage >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }


        console.log("Percentage: " + percentage + "%");
        console.log("Grade: " + grade);
    }