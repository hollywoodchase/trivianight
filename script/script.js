$('#start-game').on('click', function() {
    $('.game-info').css('display', 'block');
    $('#start-game').css('display', 'none');

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var selection = this;
    var endScreen = "";
    var answers = document.querySelectorAll('.answers');

    $('.input').on('click', function() {
        $(this).attr('checked', "");
    });

    $('#submit').on('click', function() {
        for (let i = 0; i < answers.length; i++) {
            var currentQ = answers[i].children;
            var finalWords = 'Correct answers: ' + correct; 
            // console.log(currentQ);
            for (let j = 0; j < answers[i].children.length; j++) {
                if ((currentQ[j].type === 'radio') && ($(currentQ[j]).hasClass('right-answer')) && (currentQ[j].hasAttribute('checked'))) {
                    correct++;
                    endScreen = '<h3>Correct answers: ' + correct + '</h3><h3>Incorrect answers: ' + incorrect + '</h3><h3>Unanswered questions: ' + unanswered + '</h3>';
                    console.log(correct);
                } else if ((currentQ[j].type === 'radio') && ($(currentQ[j]).hasClass('right-answer')) && (!currentQ[j].hasAttribute('checked'))) {
                    incorrect++;
                }
            }
            
        }
        $('#game-zone').css('display', 'none');
        $('#lowest-text').html(endScreen);
        $('.btn')[1].value = 'Restart Game';
        $('#submit').on('click', function() {
            location.reload(true);
        });
    });
});


// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.

// ### Option Two: Advanced Assignment (Timed Questions)

// ![Advanced](Images/2-advanced.jpg)

// **[Click Here to Watch the demo](https://youtu.be/xhmmiRmxQ8Q)**.

// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

// ### Reminder: Submission on BCS

// * Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

// - - -

// ### Minimum Requirements

// Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

// - - -

// ### Create a README.md

// Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

// * [About READMEs](https://help.github.com/articles/about-readmes/)

// * [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

// - - -

// ### Add To Your Portfolio

// After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

// - - -

// ### A Few Last Notes

// * Styling and theme are completely up to you. Get creative!

// * Remember to deploy your assignment to Github Pages.

// *If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

//   **Good Luck!**
