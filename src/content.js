// ============================================================
// CONTENT FILE — Edit this file to replace all site text.
// Every string on the site comes from here. No hunting through
// component files. Just edit the values below and save.
// ============================================================

const content = {
  hero: {
    kicker: "FILE · 001 · ORAL HISTORY",
    title: "The End of the Cold War",
    subtitle: "A conversation with my mom about growing up in Ohio at the end of the Cold War",
    byline: "Asher Pearlstein · 2026",
  },

  timeline: [
    { year: 1972, label: "Born in Findlay, Ohio", type: "personal", anchor: "storyteller" },
    { year: 1979, label: "Family moves to Westerville", type: "personal", anchor: "storyteller" },
    { year: 1982, label: "Honda plant opens in Marysville", type: "world", anchor: "storyteller" },
    { year: 1983, label: "The Day After airs", type: "world", anchor: "historical-context" },
    { year: 1986, label: "Chernobyl disaster", type: "world", anchor: "historical-context" },
    { year: 1987, label: "Family moves to Marysville", type: "personal", anchor: "storyteller" },
    { year: 1989, label: "Berlin Wall falls", type: "world", anchor: "historical-context" },
    { year: 1989, label: "Senior year of high school", type: "personal", anchor: "interview" },
    { year: 1990, label: "Iraq invades Kuwait", type: "world", anchor: "interview" },
    { year: 1990, label: "Starts at Ohio University", type: "personal", anchor: "interview" },
    { year: 1991, label: "Gulf War / USSR dissolves", type: "world", anchor: "interview" },
    { year: 1994, label: "Graduates from Ohio University", type: "personal", anchor: "reflection" },
  ],

  historicalContext: {
    sectionNumber: "I",
    sectionTitle: "Historical Context",
    paragraphs: [
      "The Cold War was a standoff between the United States and the Soviet Union that started shortly after World War II ended where tensions were always high between them. The two sides never actually fought each other directly. Instead they competed everywhere else, through wars in Korea, Vietnam, and Afghanistan, through an arms race that built up thousands of nuclear weapons to destroy the world, and through a constant ideological fight between American style democracy and Soviet communism, both of which were gaining traction in different areas around the world. The most visible symbol of the whole thing was the Berlin Wall, which was built in 1961 to stop East Germans from escaping communist East Germany into democratic West Berlin. The Berlin Wall stood for 28 years.",
      "By the time my mom was a kid in the early 1980s, the Cold War had heated back up after a brief period of calm. Ronald Reagan was president, and he called the Soviet Union an \"evil empire\" in 1983 and started a massive military buildup. Nuclear anxiety was everywhere in pop culture. The movie The Day After (1983) showed a nuclear strike on Kansas which invoked panic into the millions of Americans that watched it. Movies like Red Dawn and WarGames put Soviet invasion and accidental nuclear war into the minds of millions of Americans too. In 1986 the Chernobyl reactor exploded in the Soviet Union and sent a toxic cloud of radioactive dust and debris over Europe, which made the nuclear fears in pop culture feel a lot more real.",
      "Things started changing fast in the late 80s. The new Soviet leader, Mikhail Gorbachev, made some changes that loosened the Soviet grip on Eastern Europe. In 1989, one by one, communist governments started falling in Poland, Hungary, Czechoslovakia, and East Germany. On the night of November 9, 1989, the Berlin Wall came down. My mom was a senior in high school. Less than two years later, in August 1990, Iraq invaded Kuwait, and the U.S. led a group of countries into the Gulf War. CNN broadcast it live, which had never been done before. Then in December 1991, the Soviet Union officially ended. The country we had been terrified of and at war with for almost 50 years was gone.",
      "All of this happened in the span of about three years, from my mom's senior year of high school to her sophomore year of college. The world she once knew and grew up in was gone.",
    ],
  },

  storyteller: {
    sectionNumber: "II",
    sectionTitle: "The Storyteller",
    paragraphs: [
      "For this project I interviewed my mom, Robin. She was born in 1972 in Findlay, Ohio. Her family moved around a lot when she was young. They lived in Chicago for a few years while her dad worked at Motorola, then came back to Ohio so they could be near Columbus. They settled in a suburb called Westerville. She likes to tell me Westerville was a weird place. Companies used it as a \"test market,\" so her town got MTV before basically anyone else in the country, and her elementary school started at 9:25 in the morning as some experiment about school start times.",
      "When she was a sophomore in high school, her family moved again, this time to Marysville. It's a more rural town about 45 minutes from Columbus, mostly known for the Honda plant that opened there in 1982. She remembers it being a huge topic in town. The population was growing fast, and there were Japanese executives living in her neighborhood and Japanese kids at her school, which was unusual for that part of Ohio.",
      "I picked her for this project because she was paying attention back then. Most of her friends weren't into current events but she was. As a senior in high school she read the front page of the Wall Street Journal in the library every morning, plus the New York Times and the Columbus Dispatch. She loved her AP history teacher and talked about world events with her dad. She won a state scholarship competition in 1990 and went to nationals in Alabama. The next year she started college at Ohio University for journalism.",
      "My mom was a regular teenager who happened to be the right age to watch the Cold War end. She was a senior in high school when the Berlin Wall came down, and she was a college freshman when the Gulf War started. The Soviet Union dissolved during her sophomore year of college which is what makes her persepctive so interesting. Her perspective is what it was like for an ordinary American to live through one of the most rapid shifts of geopolitical tensions in modern history.",
    ],
    photoCaption: "Ohio, circa 1988",
  },

  interview: {
    sectionNumber: "III",
    sectionTitle: "The Interview",
    intro: "The following audio clips are excerpted from a recorded interview with my mom, Robin Miller, in May 2026. Each clip is accompanied by a selected pull-quote and description.",
    clips: [
      {
        id: "clip1",
        title: "THE ENEMY",
        audioFile: "/audio/clip1.mp3",
        pullQuote: "Well, they were the enemy, Asher. They were evil. Every spy had to be Russian in every movie.",
        transcript: "This clip shows my mom growing up with the Soviet Union as the villain of her childhood. She describes how the Russians were pinned as the \"bad guys\" everywhere. She saw this not just in the news, but in black-and-white movie reruns, in Rocky IV, in Red Dawn. She talks about how scary Red Dawn was to her in seventh grade, and how she \"got into the fantasy of the end of the world.\"",
      },
      {
        id: "clip2",
        title: "HER SISTER IN EAST GERMANY",
        audioFile: "/audio/clip2.mp3",
        pullQuote: "Even though the wall had come down, the progress was very, very slow. They certainly weren't going to change the society so quickly.",
        transcript: "After the Berlin Wall fell, my mom's sister Monica went to study in Wittenberg, in former East Germany. My mom's sister Monica saw for herself how a host family where the father, a mechanic, was actually better off than people with desk jobs because he could barter his skills for eggs and tools. Even years after the Wall came down, the East German economy was still slow to change.",
      },
      {
        id: "clip3",
        title: "THE NIGHT THE WAR STARTED",
        audioFile: "/audio/clip3.mp3",
        pullQuote: "I remember feeling kind of afraid, thinking, wow, could this turn into a riot?",
        transcript: "The night the Gulf War began in January 1991, my mom was a freshman at Ohio University. She didn't own a TV. There was no internet. She describes looking out her dorm window and seeing students marching through the streets with torches protesting the war. She remembers fighting with people in the TV lounge to change the channel from David Letterman to the news and not being able to find out what was actually happening until the next day.",
      },
      {
        id: "clip4",
        title: "WHAT STAYED WITH HER",
        audioFile: "/audio/clip4.mp3",
        pullQuote: "No matter how bad things are, you can spend quality time with your family and friends and still feel some security and happiness.",
        transcript: "At the end of our interview, I asked my mom what stuck with her most from those years. Her answer wasn't about any of the historical events. It was about her family. She talks about how you can't control what your government does, but you can control how you spend time with the people you love.",
      },
    ],
  },

  reflection: {
    sectionNumber: "IV",
    sectionTitle: "Reflection",
    paragraphs: [
      "Going into this project I figured my mom's interview would mostly be about big historical events. The Berlin Wall coming down, the Gulf War on TV, the Soviet Union ending. And she did talk about all of that. But the stuff that actually stuck with me was different from what I expected.",
      "The first thing that surprised me was how slow the world actually changed even after big events. After the Berlin Wall came down, my mom's sister Monica went to study in East Germany. She lived with a host family where the dad was a mechanic. The mechanic was actually better off than people with desk jobs because he could trade his work for eggs and tools. Years after the wall came down, the East German economy was still bartering. I think when you read about history in a textbook, big events feel like they instantly change everything in a society. But that's just not the case in the real world. The Berlin Wall fell in one night, but the lives of the people behind it took a really long time to change.",
      "The other thing that stuck with me was how isolated my mom was the night the Gulf War started. She was a freshman at Ohio University with no TV in her dorm and no internet to use to browse news articles. She looked out her window and there were students marching through the street protesting the war she still hadn't even found out about yet. To find out what was happening she had to go fight with classmates in the TV lounge to change the channel. This made me think about how different our world today is, and in a way how much more seperated and connected we are at the same time. Today, we wouldn't have had to have any social interaction or discussion about a war happening if we wanted to know about it because all we would have had to do would be to open our phones and look at our preffered news or social media platform. In a way we are less conncted with each other because of the decrease in social interaction, but we are also more connected to the world around us because of the endless stores of information we have access to through our phones and the internet. ",
      "The thing I keep thinking about most though is her answer at the end. I asked her what stuck with her most from those years. I expected her to say something about the Wall or the Soviet Union or the Gulf War, but instead she talked about the importance of friends and family. She said you can't really control what your government does or what is going on in the world around you, but you can control how you spend time with the people you love. After everything she lived through, the answer wasn't about politics or big historical events at all. It was about the people around her, suggesting that establishing meaningful human connection in our lives is of the utmost importance.",
      "I think that's what this project showed me about the Cold War era in general. Big historical events happen to regular people who might not even realise they are in an important era of history in the moment becasue they are mostly just trying to live their normal lives. My mom was applying to colleges when the Berlin Wall came down, and she was a college freshman during the Gulf War. These events were major and important, yet these events didn't dictate the way she lived her life. That's probably what history feels like for everyone who isn't a soldier on the front lines or a politician leading a nation. You live through it without really knowing you are living through it. The part that ends up mattering isn't the history itself at all. It's the people you lived through it with and the memories you built with them along the way.",
    ],
  },

  sources: [
    { title: "The Berlin Wall Falls and USSR Dissolves", url: "https://history.state.gov/departmenthistory/short-history/berlinwall", publisher: "U.S. Department of State, Office of the Historian" },
    { title: "Berlin Wall", url: "https://www.history.com/articles/berlin-wall", publisher: "HISTORY.com" },
    { title: "What Was The Berlin Wall And How Did It Fall?", url: "https://www.iwm.org.uk/history/cold-war/germany/berlin-wall", publisher: "Imperial War Museums" },
    { title: "Fall of the Berlin Wall", url: "https://en.wikipedia.org/wiki/Fall_of_the_Berlin_Wall", publisher: "Wikipedia" },
    { title: "Gulf War Fast Facts", url: "https://www.cnn.com/world/middleeast/gulf-war-fast-facts", publisher: "CNN" },
    { title: "Operation Desert Storm: 25 years on", url: "https://www.cnn.com/2016/01/19/middleeast/operation-desert-storm-25-years-later", publisher: "CNN" },
    { title: "Media coverage of the Gulf War", url: "https://en.wikipedia.org/wiki/Media_coverage_of_the_Gulf_War", publisher: "Wikipedia" },
    { title: "Marysville Auto Plant", url: "https://en.wikipedia.org/wiki/Marysville_Auto_Plant", publisher: "Wikipedia" },
  ],

  footer: {
    attribution: "Memories of the Modern World · Modern World · 2026",
  },
};

export default content;
