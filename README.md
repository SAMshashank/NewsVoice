[Website live](https://avnnews.netlify.app/)
 
# npx create-react-app myapp

now i am installing all the dependencies

# <@alan-ai/alan-sdk-web>> for ai assistance

# <@material-ui/core>> for styling

# < classnames >>multiple library for class names

# < words-to-numbers >> convert voice to number

# how to get alan key

go to alan.app

after registration go to billing section apply promo code "JSMASTERY"

code template

<!-- // Use this sample to create your own voice commands
intent('hello there', p => {
    p.play('(hello|hi there)');
});


// Give Alan some knowledge about the world
corpus(`
    Hello, I'm Alan.
    This is a demo application.
    You can learn how to teach Alan useful skills.
    I can teach you how to write Alan Scripts.
    I can help you. I can do a lot of things. I can answer questions. I can do tasks.
    But they should be relevant to this application.
    I can help with this application.
    I'm Alan. I'm a virtual assistant. I'm here to help you with applications.
    This is a demo script. It shows how to use Alan.
    You can create dialogs and teach me.
    For example: I can help navigate this application.
`); -->

# now got to get news api

link-> https://newsapi.org/

code in alan

<!-- intent('what does the app do','what can i do here?',reply('this is a news project'));

//
// intent('start a command',(p)=>{
//     p.play({command:'testCommand'})
// });

const API_KEY='bb477632a33c4449b987315f6b79c228';

//new by Source
intent('Give me the news from $(source* (.*))',(p)=>{
    let NEWS_API_URL=`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

    if(p.source.value){
        NEWS_API_URL=`${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join("-")}`
    }
}); -->

# metarial UI

way of writting css in Material ui

<!-- import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
}); -->

if you want to add pixel style dont use in string just use number like this -> height:250,

Typography = everything in material ui which is TEXT is comes under typography

# toDateString() is used to show only date not the time

# make scroll while reading automatic 1:36:03

# all about const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50); in newCard.jsx

The code window.scroll(0, ref.current.offsetTop - 50) is used to scroll the window to a specific position on the page, which is determined by the offsetTop property of a specified element.

Here's what the different parts of the code do:

window.scroll is a method that scrolls the window to a specified position. The first argument specifies the horizontal position, and the second argument specifies the vertical position.

0 is the value passed as the first argument, which means that we're scrolling to the top of the page horizontally.

ref.current is a reference to a DOM element that we want to scroll to.

offsetTop is a property of the element that gives the distance between the top of the element and the top of the nearest positioned ancestor element.

- 50 is subtracted from the offsetTop value to scroll the element to a position that's 50 pixels above its top.

So the overall effect of the code is to scroll the window to a position that's 50 pixels above the top of the specified element. This can be useful in situations where you want to automatically scroll the page to a specific element when the user performs a certain action, such as clicking a button.

# here i am using "words to number" library which i am install in begning

when i am calling article with link
