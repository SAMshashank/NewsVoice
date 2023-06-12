intent('What does this app do?', 'What can I do here?', 
      reply('This is a news project.'));

intent('give me the latest news', 
      reply('OK , but first mention category like Business, Entertainment, General, Health, Science, Sports, Technology extra and try again'));


// intent('start a command',(p)=>{
//     p.play({command:'testCommand'})
// });

const API_KEY='bb477632a33c4449b987315f6b79c228';
let savedArticles=[];

// News by Source
intent('Give me the news from $(source* (.*))', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    
    if(p.source.value) {
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`
    }
    
   api.request(NEWS_API_URL, {headers: {"user-agent": 'user agent' }}, (error, response, body) => {
        const { totalResults,articles } = JSON.parse(body);
        
        if(totalResults.length) {
            p.play('Sorry, please try searching for news from a different source');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles });
        p.play(`Here are the (latest|recent) ${p.source.value}.`);
       
         //below code is calling reading news function
       p.play('Would you like. me to read the headlines?')
       p.then(confirmation);
  
    });
})



// News by term
intent('what\'s up with  $(term* (.*))', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}`;
    
    if(p.term.value) {
        NEWS_API_URL = `${NEWS_API_URL}&q=${p.term.value}`
    }
    
   api.request(NEWS_API_URL, {headers: {"user-agent": 'user agent' }}, (error, response, body) => {
        const { totalResults,articles } = JSON.parse(body);
        
        if(totalResults.length) {
            p.play('Sorry, please try searching for news from a different term');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles });
        p.play(`Here are the (latest|recent) articles on  ${p.term.value}.`);
       
         //below code is calling reading news function
       p.play('Would you like. me to read the headlines?')
       p.then(confirmation);
  
    });
})

// News by category
const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const CATEGORIES_INTENT = `${CATEGORIES.map((category) => `${category}~${category}`).join('|')}`;

intent(`(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) $(N news|headlines) (in|about|on|) $(C~ ${CATEGORIES_INTENT})`,
  `(read|show|get|bring me|give me) (the|) (recent|latest) $(C~ ${CATEGORIES_INTENT}) $(N news|headlines)`, (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=in`;
    
    if(p.C.value) {
        NEWS_API_URL = `${NEWS_API_URL}&category=${p.C.value}`
    }
    
   api.request(NEWS_API_URL, {headers: {"user-agent": 'user agent' }}, (error, response, body) => {
        const { totalResults,articles } = JSON.parse(body);
        
        if(totalResults.length) {
            p.play('Sorry, please try searching for news from a different category');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles });
       
        p.play(`Here are the (latest|recent) articles on  ${p.C.value}.`);
      
       
       //below code is calling reading news function
       p.play('Would you like. me to read the headlines?')
       p.then(confirmation);
  
    });
})
// goto homepage
intent('go to homepage','come to homepage','homepage','go back to homepage',(p)=>{
     p.play({ command: 'home' });
    
   
})
//creating context to means alen ask you to read news 

const confirmation=context(()=>{
    intent('yes','sure',async (p)=>{
        for(let i=0;i<savedArticles.length;i++){
            p.play({command:'highlight',article:savedArticles[i]});
            p.play(`${savedArticles[i].title}`);
        }
    })
     intent('no',(p)=>{
        p.play('Sure, sounds good to me.');
    })
})
//opning article with link here i am using word to number library

intent('open the article number $(number* (.*))',(p)=>{
    if(p.number.value){
        p.play({command:'open',number:p.number.value,articles:savedArticles});
    }
})
