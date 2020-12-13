var readlineSync=require('readline-sync');
const chalk=require('chalk');

console.log("                 "+chalk.bold.green.underline("Welcome to the quiz\n")+chalk.blue("\nthis quiz will test your knowledge about India's First's.\nQuiz consits of 5 questions.\nEach right answer rewards you 100 points.\n"));
console.log(chalk.green("           ---------------------------------\n"));
var userName=readlineSync.question(chalk.red("Enter your Name to begin? - "));
console.log(chalk.red("Welcome ")+chalk.yellow.bold(userName)+chalk.red(",let's begin >>>>> \n"));
console.log(chalk.green("           ---------------------------------\n"));
var score=0;
function playgame(question,answer){
  var userAnswer=readlineSync.question(chalk.cyan(question));
  if(userAnswer===answer){
    score +=100;
    console.log(chalk.yellow(questionsNow.ans)+" is the right answer. ");
    console.log(chalk.greenBright(" Score -> "+score));
  }
  else {
    console.log(" oops!! WRONG ANSWER, Please try again");
    console.log(chalk.red(" Score -> "+score));
  }}
  var questions=[
    {question:"Q.1 Who was the First Indian to go into Space? \n a. Kalpana Chawla\n b. Rakesh Sharma\n c. tanay Pratap\n\n Enter Answer(a/b/c) - ",answer:"b",ans:"Rakesh Sharma"},
     {question:"\n\nQ2. Who is the 1st female IPS officer in India?\n a. Kiran Bedi\n b. Sonia narang\n c. Aparajita Rai\n\n Enter Answer(a/b/c) - ",answer:"a",ans:"Kiran Bedi"},
     {question:"\n\nQ3. Who was the first Indian to win an Academy(Oscar) Award?\n a. A.R. Rahman\n b. Bhanu Athiya\n c. Gulzar\n\n Enter Answer(a/b/c) - ",answer:"b",ans:"Bhanu Athiya"},
     { question:"\n\nQ4. Who was the First Indian to win a Nobel prize?\n a. Shubash chandra Bose\n b. J.R.D Tata\n c. Rabindranath Tagore\n\n Enter Answer(a/b/c) - ",answer:"c",ans:"Rabindranath Tagore"},
     {question:"\n\nQ5. Who was the first woman to receive the Bharat Ratna?\n\n a. Indira Gandhi\n b. Lata Mangeshkar\n c. Mother Teresa\n\n Enter Answer(a/b/c) - ",answer:"a",ans:"Indira Gandhi"}
  ]
  for(var i=0;i<questions.length;i++){
    var questionsNow=questions[i];
    playgame(questionsNow.question,questionsNow.answer);
  }
  console.log(chalk.blue("\n\nYour Total Score = ")+chalk.greenBright(score)+chalk.red.bold ("\n Thanks for Playing"));
    
    
    