const quotes = [
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney",
    },
    {
        quote : "Life is what happens when you're busy making other plans.",
        author : "John Lennon",
    },
    {
        quote : "The world is a book and those who do not travel read only one page.",
        author : "Saint Augustine",
    },
    {
        quote : "But I know, somehow, that only when it is dark enough can you see the stars.",
        author : "Martin Luther King, Jr",
    },
    {
        quote : "I didn’t get there by wishing for it or hoping for it, but by working for it. ",
        author : "Estée Lauder",
    },
    {
        quote : "Only a life lived for others is a life worthwhile.",
        author : "Albert Einstein",
    },
    {
        quote : "You only live once, but if you do it right, once is enough.",
        author : "Mae West",
    },
    {
        quote : "Never go on trips with anyone you do ntot love.",
        author : "Hemmingway",
    },
    {
        quote : "We wander for distraction, but we travel for fulfilment.",
        author : "Hilaire Belloc",
    },
    {
        quote : "Travel expands the mind and fills the gap.",
        author : "Sheda Savage",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;