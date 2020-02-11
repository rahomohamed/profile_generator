const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyAnswers = {}

rl.question('What is your name? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  surveyAnswers.name = answer;

 rl.question('What\'s an activity you like doing?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  surveyAnswers.activity = answer;

    rl.question('What do you listen to while doing that?', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    surveyAnswers.music = answer; 

     rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
     console.log(`Thank you for your valuable feedback: ${answer}`);
     surveyAnswers.meal = answer;
       
     rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
       console.log(`Thank you for your valuable feedback: ${answer}`);
       surveyAnswers.eat = answer;

         rl.question('Which sport is your absolute favourite?', (answer) => {
         console.log(`Thank you for your valuable feedback: ${answer}`);
         surveyAnswers.sport = answer;
    
           rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
           console.log(`Thank you for your valuable feedback: ${answer}`);
           surveyAnswers.superpower = answer;
          
            
            console.log(`My name is ${surveyAnswers.name} and an activity that I enjoy doing is ${surveyAnswers.activity}. While doing this activity my favourite thing to listen to is ${surveyAnswers.music}. My favourite meal is ${surveyAnswers.meal} and my favourite thing to eat is ${surveyAnswers.eat}. My absolute favourite sport is ${surveyAnswers.sport} and something I'm really good at is ${surveyAnswers.superpower}.`); 
            
            rl.close();
          })
          })
        })
      })
    })
  })
});
