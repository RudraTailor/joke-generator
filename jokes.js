/*
Full Name: Rudra Paresh Tailor
ID: 041-140-251
File Name: jokes.js
Date: 4/06/2024 
Description:javascript of jokes.js
*/



// Array containing some light-hearted jokes with authors
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('get-joke').addEventListener('click', getJoke);
    getJoke();
});


const jokesArray = [
    {
        "joke": "Why don't scientists trust atoms? Because they make up everything!",
       
        "author": "Anonymous"
    },
    {
        "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        
        "author": "John Doe"
    },
    {
        "joke": "What do you call fake spaghetti? An Impasta!",
        
        "author": "Jane Smith"
    },
    {
        "joke": "Why was the math book sad? Because it had too many problems.",
        
        "author": "Math Enthusiast"
    },
    {
        "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        
        "author": "Golf Lover"
    },
    {
        "joke": "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
       
        "author": "Farm Fanatic"
    },
    {
        "joke": "What do you get when you cross a vampire and a snowman? Frostbite.",
        
        "author": "Monster Mixer"
    },
    {
        "joke": "How do you organize a space party? You planet.",
     
        "author": "Space Enthusiast"
    },
    {
        "joke": "Why did the bicycle fall over? Because it was two-tired!",
        
        "author": "Bike Rider"
    },
    {
        "joke": "What do you call a bear with no teeth? A gummy bear!",
       
        "author": "Nature Lover"
    },
    {
        "joke": "How does a penguin build its house? Igloos it together.",
        "author": "Arctic Explorer"
    },
    {
        "joke": "Why don't some couples go to the gym? Because some relationships don't work out.",
        "author": "Fitness Enthusiast"
    },
    {
        "joke": "What do you call a fish wearing a bowtie? Sofishticated.",
        "author": "Ocean Lover"
    },
    {
        "joke": "Why was the computer cold? It left its Windows open.",
        "author": "Tech Savvy"
    },
    {
        "joke": "Why do programmers prefer dark mode? Because light attracts bugs.",
        "author": "Coder"
    },
    {
        "joke": "How does a computer get drunk? It takes screenshots.",
        "author": "Tech Humorist"
    },
    {
        "joke": "Why did the computer cross the road? To get to the other website.",
        "author": "Internet Explorer"
    },
    {
        "joke": "What do you call a computer superhero? A screensaver.",
        "author": "Cyber Hero"
    },
    {
        "joke": "Why did the coffee file a police report? It got mugged.",
        "author": "Coffee Addict"
    },
    {
        "joke": "Why did the computer go to the doctor? Because it had a virus.",
        "author": "Tech Guru"
    }
];

//function to get jokes from the array.
function getJoke() {
    const randomIndex = Math.floor(Math.random() * jokesArray.length);
    const joke = jokesArray[randomIndex];

    document.getElementById('joke-text').innerText = joke.joke;
    document.getElementById('joke-author').innerText = joke.author;
}