// start with an array, but just as a false start
let gamesArray = ["url", "maker", "title", "url", "maker", "title", "url", "maker", "title"];

// key value pairs
// alphabetical order
// both games will be displayed at once

const gameData = [
    {
        gameUrl1: "https://pglenn1.github.io/charlie-project-alex/",
        gameUrl2: "https://pglenn1.github.io/delta-project-alex/",
        gameName1: "charlie-project-alex",
        gameName2: "delta-project-alex",
        gameAuthor: "Alex Glenn"
    },
    {
        gameUrl1: "https://akashdeepsingh0047.github.io/Chrlie-lab-By-Akashdeep/",
        gameUrl2: "https://akashdeepsingh0047.github.io/psychic-delta/",
        gameName1: "Chrlie-lab-By-Akashdeep ",
        gameName2: "Psychic-Delta",
        gameAuthor: "AkashdeepSingh0047 "
    },
    {
        gameUrl1: "https://aalluhaybi1.github.io/CHARLIE_LAB/",
        gameUrl2: "https://aalluhaybi1.github.io/DELTA-LAB/",
        gameName1: "CHARLIE",
        gameName2: "delta",
        gameAuthor: "Ayman Alluhaybi"
    },
    {
        gameUrl1: "https://cbuf0rd.github.io/glowing-giggle-echo-lab/",
        gameUrl2: "https://cbuf0rd.github.io/glowing-meme-foxtrot/",
        gameName1: "Glowing Giggle Echo Lab",
        gameName2: "Glowing Meme Foxtrot",
        gameAuthor: "Candice Buford"
    },
    {
        gameUrl1: "https://cm1803.github.io/charlie/",
        gameUrl2: "https://cm1803.github.io/delta/",
        gameName1: "Charlie",
        gameName2: "Delta",
        gameAuthor: "Claire Mitchell"
    },
    {
        gameUrl1: "https://devan4264.github.io/improved-octo-chainsaw-charlie/",
        gameUrl2: "https://devan4264.github.io/verbose-guacamole-delta/",
        gameName1: "improved-octo-chainsaw-charlie",
        gameName2: "verbose-guacamole-delta",
        gameAuthor: "devan4264"
    },
    {
        gameUrl1: "https://hrantgartley.github.io/improved-train-charlie/",
        gameUrl2: "https://hrantgartley.github.io/didactic-waffle-delta/",
        gameName1: "charlie",
        gameName2: "delta",
        gameAuthor: "Grant Hartley"
    },
    {
        gameUrl1: "https://jacob-vance.github.io/turbo-pancake-charlie/ ",
        gameUrl2: "https://jacob-vance.github.io/fluffy-pancake-delta/ ",
        gameName1: "turbo-pancake-charlie",
        gameName2: "fluffy-pancake-delta",        
        gameAuthor: "Jacob-Vance"
    },
    {
        gameUrl1: "https://jaydengreen23.github.io/fictional-broccoli-charlie/",
        gameUrl2: "https://jaydengreen23.github.io/delta-jubilant-octo-winner/",
        gameName1: "fictional-broccoli-charlie",
        gameName2: "delta-jubilant-octo-winner",   
        gameAuthor: "Jayden Green"
    },
    {
        gameUrl1: "https://johnallenb.github.io/crispy-charlie-lab03-blaxton/",
        gameUrl2: "https://johnallenb.github.io/decatur-delta-lab04-blaxton/",
        gameName1: "crispy-charlie",
        gameName2: "decatur-delta",   
        gameAuthor: "JohnAllenB"
    },
    {
        gameUrl1: "https://babayaga1013.github.io/charlie-lab-cis376/",
        gameUrl2: "https://babayaga1013.github.io/reimagined-couscous--delta/",
        gameName1: "charlie-lab-cis376",
        gameName2: "reimagined-couscous-delta",   
        gameAuthor: "Kalani Sorensen"
    },
    {
        gameUrl1: "https://hkevin555.github.io/lab-charlie/",
        gameUrl2: "https://hkevin555.github.io/DeltaLab/",
        gameName1: "Charlie-BravoSoMuchWow",
        gameName2: "Spirit Animal Name Game",   
        gameAuthor: "Kevin Hernandez"
    },
    {
        gameUrl1: "https://mackenzie24t.github.io/legendary-goggles-charlie/",
        gameUrl2: "https://mackenzie24t.github.io/delta-jubilant-doodle/",
        gameName1: "legendary-goggles-charlie",
        gameName2: "delta-jubilant-doodle",   
        gameAuthor: "Mackenzie Thompson"
    },
    {
        gameUrl1: "https://mmandelyn.github.io/silver-seal-charlie/",
        gameUrl2: "https://mmandelyn.github.io/pink-panda-delta/",
        gameName1: "Hopping Zone Charlie",
        gameName2: "Spirit Animal Delta",   
        gameAuthor: "Mandy McGinnis"
    },
    {
        gameUrl1: "https://marvin-2056.github.io/Delta-CIS-367/",
        gameUrl2: "",
        gameName1: "Delta Lab Spirit animal ",
        gameName2: "N/A",   
        gameAuthor: "Marvin De La Cruz"
    },
    {
        gameUrl1: "https://michaelhaydenduran.github.io/silly-dino-charlie/",
        gameUrl2: "https://michaelhaydenduran.github.io/chica-bonita-delta/",
        gameName1: "Charlie Lab Doge Game",
        gameName2: "The Mystical Lucky Eccentric Silly Llama Game!",   
        gameAuthor: "Michael Hayden Duran"
    },
    {
        gameUrl1: "https://mohammedalrasheidi.github.io/Charlie/",
        gameUrl2: "https://mohammedalrasheidi.github.io/Delta-lab/",
        gameName1: "Charlie",
        gameName2: "Delta",   
        gameAuthor: "Mohammed Alrasheidi"
    },
    {
        gameUrl1: "https://quantumcoder-242.github.io/probable-charlie/",
        gameUrl2: "https://quantumcoder-242.github.io/turbo-delta/",
        gameName1: "probable-charlie",
        gameName2: "turbo-delta",   
        gameAuthor: "Navraj_Singh"
    },
    {
        gameUrl1: "https://nrobinson4.github.io/bug-free-potato-charlie/ ",
        gameUrl2: "https://nrobinson4.github.io/cool-animal-delta/",
        gameName1: "Charlie Meme",
        gameName2: "Delta Names",   
        gameAuthor: "Nolen Robinson"
    },
    {
        gameUrl1: "https://nesiagoodloe.github.io/nesia-charlie-lab/",
        gameUrl2: "https://nesiagoodloe.github.io/currentDeltaLab/",
        gameName1: "nesia-charlie-lab",
        gameName2: "currentDeltaLab",   
        gameAuthor: "Rodnesia Goodloe"
    },
    {
        gameUrl1: "https://salehmb89.github.io/waffle-charlie/",
        gameUrl2: "https://salehmb89.github.io/delta-lab/",
        gameName1: "Charlie-lab",
        gameName2: "Delta-lab",   
        gameAuthor: "Saleh Basalim"
    },
    {
        gameUrl1: "https://smaldonado1326.github.io/cuddly-invention--charlie/ ",
        gameUrl2: "https://smaldonado1326.github.io/glowing-adventure-delta/ ",
        gameName1: "Hot or Cold",
        gameName2: "Name Game ",   
        gameAuthor: "Sam Maldonado"
    },
    {
        gameUrl1: "https://skysaunders.github.io/super-adventure-charlie/",
        gameUrl2: "https://skysaunders.github.io/animated-sniffle-foxtrot/",
        gameName1: "super-adventure-charlie",
        gameName2: "animated-sniffle-foxtrot",   
        gameAuthor: "Skyler Saunders"
    }
];
