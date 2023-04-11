import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import VDO from "./components/VDO";
import useStyles from "./Styles";
import wordsToNumbers from "words-to-numbers";
import ButtonAppBar from "./components/Header/ButtonAppBar";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: "4396eae6880b1110bcdc38434a5914552e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "home") {
          window.location.reload();

          alanBtn().playText("Welcome to homepage ");
        }
        // } else if (command === "open") {
        //   //wordsToNumber
        //   // if length is greater then 2 it will convert word to number like four=4 , one=1
        //   // here {fuzzy:true} means if it take "fOR" then it make it "4" ,  "TO" change it to "2"
        //   const parseNumber =
        //     number.length > 2
        //       ? wordsToNumbers(number, { fuzzy: true })
        //       : number;
        //   const article = articles[parseNumber - 1];
        //   if (parseNumber > articles.length) {
        //     alanBtn().playText("please try it again.");
        //   } else if {
        //     window.open(article.url, "_blank");
        //     alanBtn().playText("Opening..");
        //   }
        //   else {
        //     alanBtn().playText("Please try that again...");
        //   }
        // }
        else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);

  return (
    <>
      <ButtonAppBar />
      <div style={{ margin: "10px" }}>
        <div className={classes.logoContainer}>
          <VDO articles={newsArticles} className={classes.alanLogo} />
        </div>
        <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        <p style={{ display: "flex", justifyContent: "center" }}>
          Created by👉{" "}
          <strong style={{ color: "blue" }}>SHASHANK KUSHWAHA</strong>{" "}
        </p>
      </div>
    </>
  );
}

export default App;
