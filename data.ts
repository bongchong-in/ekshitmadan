import { Book, Film } from './types';

export const DESK_BOOKS: Book[] = [
  { 
    id: 1, 
    status: "Currently Reading", 
    title: "White Nights", 
    author: "Fyodor Dostoevsky", 
    cover: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/White%20Nights.jpg",
    progress: 15,
    quote: "I am a dreamer. I have so little real life that I look upon such moments as this now, as so rare, that I cannot help repeating these moments in my dreams.",
    goodreadsUrl: "https://www.goodreads.com/book/show/1772910.White_Nights",
    amazonUrl: "https://www.amazon.in/White-Nights-Penguin-Little-Classics/dp/0241252083"
  },
  { 
    id: 2, 
    status: "Just Finished", 
    title: "Norwegian Wood", 
    author: "Haruki Murakami", 
    cover: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Norwegian%20Wood.jpg",
    rating: "★★★★★",
    quote: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
    goodreadsUrl: "https://www.goodreads.com/book/show/11297.Norwegian_Wood",
    amazonUrl: "https://www.amazon.com/Norwegian-Wood-Novel-Haruki-Murakami/dp/0375704027"
  },
  { 
    id: 3, 
    status: "Up Next", 
    title: "Yellowface", 
    author: "R.F. Kuang", 
    cover: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Yellowface.jpg",
    priority: "High",
    quote: "Writing is the closest you can come to magic, isn't it? To creating something out of nothing.",
    goodreadsUrl: "https://www.goodreads.com/book/show/62047984-yellowface",
    amazonUrl: "https://www.amazon.com/Yellowface-R-F-Kuang/dp/0063250835"
  },
];

export const COLLECTION: Book[] = [
  // --- COMFORT COLLECTION ---
  { 
    id: 201, 
    title: "A Man Called Ove", 
    author: "Fredrik Backman", 
    category: "Comfort", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/A%20Man%20Called%20Ove.jpg",
    quote: "People said Ove saw the world in black and white. But she was color. All the color he had.",
    goodreadsUrl: "https://www.goodreads.com/book/show/18774964-a-man-called-ove",
    amazonUrl: "https://www.amazon.com/Man-Called-Ove-Novel/dp/1476738025"
  },
  { 
    id: 202, 
    title: "The Reading List", 
    author: "Sara Nisha Adams", 
    category: "Comfort", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/The%20Reading%20List.jpg",
    quote: "Books can't fix everything, but they can help you feel less alone.",
    goodreadsUrl: "https://www.goodreads.com/book/show/55276648-the-reading-list",
    amazonUrl: "https://www.amazon.com/Reading-List-Novel-Sara-Nisha/dp/0063025289"
  },
  { 
    id: 203, 
    title: "The Satisfaction Café", 
    author: "Kathy Wang", 
    category: "Comfort", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/The%20Satisfaction%20Caf%C3%A9.jpg",
    quote: "Sometimes the most comforting thing is simply a place where no one asks you to be anything other than who you are.",
    goodreadsUrl: "https://www.goodreads.com/search?q=The+Satisfaction+Café+Kathy+Wang",
    amazonUrl: "https://www.amazon.com/s?k=The+Satisfaction+Café+Kathy+Wang"
  },
  { 
    id: 204, 
    title: "Mina's Matchbox", 
    author: "Yoko Ogawa", 
    category: "Comfort", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Mina's%20Matchbox.jpg",
    quote: "The sound of a match being struck is the sound of a small soul waking up.",
    goodreadsUrl: "https://www.goodreads.com/book/show/123287617-mina-s-matchbox",
    amazonUrl: "https://www.amazon.com/Minas-Matchbox-Yoko-Ogawa/dp/0593470634"
  },
  { 
    id: 205, 
    title: "Restaurant of Lost Recipes", 
    author: "Hisashi Kashiwai", 
    category: "Comfort", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Restaurant%20of%20Lost%20Recipes.jpg",
    quote: "There is no seasoning quite as powerful as the memory of a meal shared with someone you loved.",
    goodreadsUrl: "https://www.goodreads.com/book/show/123204481-the-kamogawa-food-detectives",
    amazonUrl: "https://www.amazon.com/Kamogawa-Food-Detectives-Novel/dp/0593541574"
  },

  // --- FEELS LIKE HOME COLLECTION ---
  { 
    id: 301, 
    title: "Kitchen", 
    author: "Banana Yoshimoto", 
    category: "Feels Like Home", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Kitchen.jpg",
    quote: "The place I like best in this world is the kitchen. No matter where it is, no matter what kind, if it's a kitchen, there's no place I would rather be.",
    goodreadsUrl: "https://www.goodreads.com/book/show/528928.Kitchen",
    amazonUrl: "https://www.amazon.com/Kitchen-Banana-Yoshimoto/dp/0802142443"
  },
  { 
    id: 302, 
    title: "Convenience Store Woman", 
    author: "Sayaka Murata", 
    category: "Feels Like Home", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Convenience%20Store%20Woman.jpg",
    quote: "For the first time, I felt I’d become a part of the machine of the world.",
    goodreadsUrl: "https://www.goodreads.com/book/show/38357895-convenience-store-woman",
    amazonUrl: "https://www.amazon.com/Convenience-Store-Woman-Sayaka-Murata/dp/0802129625"
  },
  { 
    id: 303, 
    title: "Early Thirties", 
    author: "Josh Duboff", 
    category: "Feels Like Home", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Early%20Thirties.jpg",
    quote: "It was a time of specific panic, the realization that the dress rehearsal was over and the play had begun.",
    goodreadsUrl: "https://www.goodreads.com/book/show/195428522-early-thirties",
    amazonUrl: "https://www.amazon.com/Early-Thirties-Novel-Josh-Duboff/dp/0593492727"
  },
  { 
    id: 304, 
    title: "The Diary of a Bookseller", 
    author: "Shaun Bythell", 
    category: "Feels Like Home", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/The%20Diary%20of%20a%20Bookseller.jpg",
    quote: "You can't judge a book by its cover, but you can certainly judge a person by their books.",
    goodreadsUrl: "https://www.goodreads.com/book/show/35297594-the-diary-of-a-bookseller",
    amazonUrl: "https://www.amazon.com/Diary-Bookseller-Shaun-Bythell/dp/1612197241"
  },
  { 
    id: 305, 
    title: "The Cat and The City", 
    author: "Nick Bradley", 
    category: "Feels Like Home", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/The%20Cat%20and%20The%20City.jpg",
    quote: "Tokyo is a city of cats. They are everywhere, watching, waiting, stitching the city together.",
    goodreadsUrl: "https://www.goodreads.com/book/show/50742513-the-cat-and-the-city",
    amazonUrl: "https://www.amazon.com/Cat-City-Nick-Bradley/dp/0593086303"
  },

  // --- CHRISTMAS COLLECTION ---
  { 
    id: 401, 
    title: "The Christmas Bookshop", 
    author: "Jenny Colgan", 
    category: "Christmas", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/The%20Christmas%20Bookshop.jpg",
    quote: "There is no better place to be at Christmas than a bookshop, surrounded by stories waiting to be unwrapped.",
    goodreadsUrl: "https://www.goodreads.com/book/show/56922703-the-christmas-bookshop",
    amazonUrl: "https://www.amazon.com/Christmas-Bookshop-Romance-Novel/dp/0063119100"
  },
  { 
    id: 402, 
    title: "Jane Eyre", 
    author: "Charlotte Brontë", 
    category: "Christmas", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Jane%20Eyre.jpg",
    quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
    goodreadsUrl: "https://www.goodreads.com/book/show/10210.Jane_Eyre",
    amazonUrl: "https://www.amazon.com/Jane-Eyre-Charlotte-Bronte/dp/0141441143"
  },
  { 
    id: 403, 
    title: "Homeseeking", 
    author: "Karissa Chen", 
    category: "Christmas", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Homeseeking.jpg",
    quote: "We are all just looking for a place to rest our heads, a place to call our own.",
    goodreadsUrl: "https://www.goodreads.com/search?q=Homeseeking+Karissa+Chen",
    amazonUrl: "https://www.amazon.com/s?k=Homeseeking+Karissa+Chen"
  },
  { 
    id: 404, 
    title: "The Enchanted Tea House", 
    author: "Carter Vane", 
    category: "Christmas", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/The%20Enchanted%20Tea%20House.jpg",
    quote: "There is magic in a cup of tea, if you take the time to taste it.",
    goodreadsUrl: "https://www.goodreads.com/search?q=The+Enchanted+Tea+House+Carter+Vane",
    amazonUrl: "https://www.amazon.com/s?k=The+Enchanted+Tea+House+Carter+Vane"
  },

  // --- EMOTION COLLECTION ---
  { 
    id: 501, 
    title: "Normal People", 
    author: "Sally Rooney", 
    category: "Emotion", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Normal%20People.jpg",
    quote: "It’s not like this with other people, she says. I know, he says.",
    goodreadsUrl: "https://www.goodreads.com/book/show/41057294-normal-people",
    amazonUrl: "https://www.amazon.com/Normal-People-Novel-Sally-Rooney/dp/1984822179"
  },
  { 
    id: 502, 
    title: "Madonna in a Fur Coat", 
    author: "Sabahattin Ali", 
    category: "Emotion", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Madonna%20in%20a%20Fur%20Coat.jpg",
    quote: "It is the quiet ones who have the most to say, if only you listen closely enough.",
    goodreadsUrl: "https://www.goodreads.com/book/show/29633390-madonna-in-a-fur-coat",
    amazonUrl: "https://www.amazon.com/Madonna-Fur-Coat-Sabahattin-Ali/dp/1590518804"
  },
  { 
    id: 503, 
    title: "Jane Eyre", 
    author: "Charlotte Brontë", 
    category: "Emotion", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Jane%20Eyre.jpg",
    quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
    goodreadsUrl: "https://www.goodreads.com/book/show/10210.Jane_Eyre",
    amazonUrl: "https://www.amazon.com/Jane-Eyre-Charlotte-Bronte/dp/0141441143"
  },
  { 
    id: 504, 
    title: "The Cost of Living", 
    author: "Deborah Levy", 
    category: "Emotion", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/The%20Cost%20of%20Living.jpg",
    quote: "We must create a life we can live with, even if it means tearing down the walls we built.",
    goodreadsUrl: "https://www.goodreads.com/book/show/36521572-the-cost-of-living",
    amazonUrl: "https://www.amazon.com/Cost-Living-Working-Autobiography/dp/1635571911"
  },

  // --- MUST READS COLLECTION ---
  { 
    id: 601, 
    title: "The Kite Runner", 
    author: "Khaled Hosseini", 
    category: "Must Reads", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/The%20Kite%20Runner.jpg",
    quote: "For you, a thousand times over.",
    goodreadsUrl: "https://www.goodreads.com/book/show/77203.The_Kite_Runner",
    amazonUrl: "https://www.amazon.com/Kite-Runner-Khaled-Hosseini/dp/159463193X"
  },
  { 
    id: 602, 
    title: "A Man Called Ove", 
    author: "Fredrik Backman", 
    category: "Must Reads", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/A%20Man%20Called%20Ove.jpg",
    quote: "People said Ove saw the world in black and white. But she was color. All the color he had.",
    goodreadsUrl: "https://www.goodreads.com/book/show/18774964-a-man-called-ove",
    amazonUrl: "https://www.amazon.com/Man-Called-Ove-Novel/dp/1476738025"
  },
  { 
    id: 603, 
    title: "The Old Man and the Sea", 
    author: "Ernest Hemingway", 
    category: "Must Reads", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/The%20Old%20Man%20and%20the%20Sea.jpg",
    quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
    goodreadsUrl: "https://www.goodreads.com/book/show/2165.The_Old_Man_and_the_Sea",
    amazonUrl: "https://www.amazon.com/Old-Man-Sea-Ernest-Hemingway/dp/0684801221"
  },
  { 
    id: 604, 
    title: "Kafka on the Shore", 
    author: "Haruki Murakami", 
    category: "Must Reads", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Kafka%20on%20the%20Shore.jpg",
    quote: "And once the storm is over, you won’t remember how you made it through, how you managed to survive.",
    goodreadsUrl: "https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore",
    amazonUrl: "https://www.amazon.com/Kafka-Shore-Haruki-Murakami/dp/1400079276"
  },
  { 
    id: 605, 
    title: "The Great Gatsby", 
    author: "F. Scott Fitzgerald", 
    category: "Must Reads", 
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/The%20Great%20Gatsby.jpg",
    quote: "So we beat on, boats against the current, borne back ceaselessly into the past.",
    goodreadsUrl: "https://www.goodreads.com/book/show/4671.The_Great_Gatsby",
    amazonUrl: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567"
  },
];

export const CINEMA_COLLECTION: Film[] = [
  {
    id: 1,
    title: "Eephus",
    director: "Carson Lund",
    year: "2024",
    quote: "A final inning before the lights go out.",
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Eephus.jpg",
    imdbUrl: "https://www.imdb.com/title/tt27503713/"
  },
  {
    id: 2,
    title: "The Ballad of Wallis Island",
    director: "James Griffiths",
    year: "2024",
    quote: "The sea remembers what we forget.",
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/The%20Ballad%20of%20Wallis%20Island.jpg",
    imdbUrl: "https://www.imdb.com/find/?q=The+Ballad+of+Wallis+Island"
  },
  {
    id: 3,
    title: "Sorry, Baby",
    director: "Eva Victor",
    year: "2024",
    quote: "Modern love is a comedy of errors.",
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Sorry%2C%20Baby.jpg",
    imdbUrl: "https://www.imdb.com/find/?q=Sorry+Baby+Eva+Victor"
  },
  {
    id: 4,
    title: "On Becoming a Guinea Fowl",
    director: "Rungano Nyoni",
    year: "2024",
    quote: "Transforming silence into sound.",
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/On%20Becoming%20a%20Guinea%20Fowl.jpg",
    imdbUrl: "https://www.imdb.com/title/tt27490898/"
  },
  {
    id: 5,
    title: "Dangerous Animals",
    director: "Sean Byrne",
    year: "2024",
    quote: "Nature is not the only thing with teeth.",
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Dangerous%20Animals.jpg",
    imdbUrl: "https://www.imdb.com/find/?q=Dangerous+Animals+Sean+Byrne"
  },
  {
    id: 6,
    title: "Friendship",
    director: "Andrew DeYoung",
    year: "2024",
    quote: "The bonds that tether us.",
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Friendship.jpg",
    imdbUrl: "https://www.imdb.com/title/tt30805629/"
  },
  {
    id: 7,
    title: "Familiar Touch",
    director: "Sarah Friedland",
    year: "2024",
    quote: "Memory is a texture.",
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Familiar%20Touch.jpg",
    imdbUrl: "https://www.imdb.com/title/tt21803360/"
  },
  {
    id: 8,
    title: "Bring Her Back",
    director: "Danny and Michael Philippou",
    year: "2024",
    quote: "Some doors should stay closed.",
    image: "https://images.unsplash.com/photo-1542204165-65926c4cc8e8?auto=format&fit=crop&q=80&w=600",
    imdbUrl: "https://www.imdb.com/find/?q=Bring+Her+Back+Danny+Michael+Philippou"
  },
  {
    id: 9,
    title: "If I Had Legs I'd Kick You",
    director: "Mary Bronstein",
    year: "2024",
    quote: "Anger is an energy.",
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/If%20I%20Had%20Legs%20I'd%20Kick%20You.jpg",
    imdbUrl: "https://www.imdb.com/title/tt29606037/"
  },
  {
    id: 10,
    title: "Black Bag",
    director: "Steven Soderbergh",
    year: "2025",
    quote: "Secrets carry their own weight.",
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Black%20Bag.jpg",
    imdbUrl: "https://www.imdb.com/title/tt30962383/"
  },
  {
    id: 11,
    title: "The Chronology of Water",
    director: "Kristen Stewart",
    year: "2024",
    quote: "Fluidity in memory and form.",
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/The%20Chronology%20of%20Water.jpg",
    imdbUrl: "https://www.imdb.com/title/tt8069670/"
  },
  {
    id: 12,
    title: "Urchin",
    director: "Harris Dickinson",
    year: "2024",
    quote: "Life on the edges.",
    image: "https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/Urchin.jpg",
    imdbUrl: "https://www.imdb.com/find/?q=Urchin+Harris+Dickinson"
  }
];