const quote = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.getElementById('button');

const quotes = [];
const quote1 = {
    citation: "I'm stupid, I'm ugly, I'm dumb, I smell. Did I mention I'm stupid?",
    auth: 'Eminem'
};
const quote2 = {
    citation: "The stupid neither forgive nor forget; the naive forgive and forget; the wise forgive but do not forget.",
    auth: 'Thomas Szasz'
};
const quote3 = {
    citation: "We are all born ignorant, but one must work hard to remain stupid.",
    auth: 'Unknown'
};
const quote4 = {
    citation: "If you want to improve, be content to be thought foolish and stupid.",
    auth: 'Epictetus'
};

quotes.push(quote1, quote2, quote3, quote4);

button.addEventListener('click', function() {
    const randomNum = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNum];

    quote.innerHTML = randomQuote.citation;
    author.innerHTML = randomQuote.auth;
});