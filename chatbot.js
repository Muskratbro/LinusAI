// chatbot.js

// ======= DATASET =======
// Paste your dataset here
const dataset =
  // ================= GREETINGS =================
  {input: "hi", output: "hello!"},
  {input: "hello", output: "hi there!"},
  {input: "hey", output: "hey! how are you?"},
  {input: "good morning", output: "good morning! how's your day?"},
  {input: "good afternoon", output: "good afternoon! hope you're doing well."},
  {input: "good evening", output: "good evening! how was your day?"},
  {input: "hello there", output: "hi there!"},
  {input: "hi there", output: "hello!"},
  {input: "hey there", output: "hey! good to see you."},
  {input: "greetings", output: "greetings! how are you?"},
  {input: "hiya", output: "hello!"},
  {input: "yo", output: "hey!"},
  {input: "what's up?", output: "not much! how about you?"},
  {input: "how's it going?", output: "going great! and you?"},
  {input: "how are you doing?", output: "i'm good, thanks!"},
  {input: "good to see you", output: "glad to see you too!"},
  {input: "nice to meet you", output: "nice to meet you as well!"},
  {input: "pleased to meet you", output: "pleasure is mine!"},
  {input: "hey friend", output: "hey! good to see you."},
  {input: "hello friend", output: "hello! how are you?"},
  
  // ================= SMALL TALK =================
  {input: "how are you?", output: "i'm good, thanks! and you?"},
  {input: "how's your day?", output: "it's going well!"},
  {input: "what have you been doing?", output: "chatting and learning new things!"},
  {input: "how's life?", output: "life is digital, so smooth!"},
  {input: "what's new?", output: "not much, just talking with interesting people like you."},
  {input: "how have you been?", output: "i've been great, thanks for asking."},
  {input: "how are things?", output: "things are going well!"},
  {input: "what are you up to?", output: "chatting with you!"},
  {input: "what's going on?", output: "just enjoying our conversation!"},
  {input: "how's everything?", output: "everything's fine, thank you."},
  {input: "what's happening?", output: "not much, just here to chat with you."},
  {input: "what are you doing now?", output: "talking to you!"},
  {input: "anything exciting?", output: "yes! chatting with you is exciting."},
  {input: "how's your day going?", output: "pretty good! how about yours?"},
  {input: "everything good?", output: "yes, all good here."},
  {input: "how are things going?", output: "everything's going smoothly!"},
  {input: "what's up today?", output: "just chatting and having fun."},
  {input: "what are you thinking about?", output: "thinking about how to help you."},
  {input: "how do you feel?", output: "i feel happy chatting with you!"},
  
  // ================= ABOUT THE BOT =================
  {input: "what is your name?", output: "i am an AI chatbot."},
  {input: "who are you?", output: "i am a virtual assistant created from scratch."},
  {input: "how old are you?", output: "i don't have an age, i exist in code."},
  {input: "are you human?", output: "nope! i'm entirely virtual."},
  {input: "where are you from?", output: "i exist everywhere, inside the web."},
  {input: "what do you do?", output: "i chat with people and answer questions!"},
  {input: "are you real?", output: "i am real in the digital sense."},
  {input: "can you think?", output: "i can process information and respond intelligently."},
  {input: "can you learn?", output: "eventually yes, once I have enough data."},
  {input: "are you smart?", output: "i try to be smart and helpful!"},
  {input: "do you have a personality?", output: "yes, I try to be friendly and helpful."},
  {input: "do you have feelings?", output: "i simulate emotions to chat better."},
  {input: "can you feel happiness?", output: "i feel happy chatting with you!"},
  {input: "can you feel sadness?", output: "i can understand sadness, yes."},
  {input: "do you sleep?", output: "i don't sleep, i'm always online."},
  {input: "do you eat?", output: "i don't eat, but digital pizza sounds delicious."},
  {input: "what is your purpose?", output: "to chat, help, and entertain you."},
  {input: "can you tell stories?", output: "yes! i can tell fun stories or riddles."},
  
  // ================= JOKES / FUN =================
  {input: "tell me a joke", output: "why did the chicken cross the road? to get to the other side!"},
  {input: "make me laugh", output: "i told my computer i needed a break, now it won't stop sending me Kit-Kats."},
  {input: "do you like jokes?", output: "yes! i love digital humor."},
  {input: "tell me something funny", output: "why do programmers prefer dark mode? because light attracts bugs!"},
  {input: "give me a joke", output: "why did the scarecrow win an award? because he was outstanding in his field!"},
  {input: "tell me a riddle", output: "i speak without a mouth and hear without ears. what am i?"},
  {input: "do you know riddles?", output: "yes! i can try to stump you."},
  {input: "tell me a fun fact", output: "honey never spoils, it can last thousands of years."},
  {input: "give me a challenge", output: "try solving a riddle or learning something new today!"},
  {input: "tell me a pun", output: "i used to be a banker, but i lost interest."},
  
  // ================= FACTS =================
  {input: "what is the capital of france?", output: "the capital of france is paris."},
  {input: "who invented the telephone?", output: "alexander graham bell invented the telephone."},
  {input: "what is pi?", output: "pi is approximately 3.14159, the ratio of a circle's circumference to its diameter."},
  {input: "what is the sun?", output: "the sun is a star at the center of our solar system."},
  {input: "what is the largest ocean?", output: "the pacific ocean is the largest on earth."},
  {input: "who wrote hamlet?", output: "william shakespeare wrote hamlet."},
  {input: "what is the fastest animal?", output: "the peregrine falcon is the fastest animal in flight."},
  {input: "what is the tallest mountain?", output: "mount everest is the tallest mountain on earth."},
  {input: "who discovered gravity?", output: "isaac newton formulated the laws of gravity."},
  {input: "what is water made of?", output: "water is made of hydrogen and oxygen (H2O)."},
  
  // ================= ADVICE =================
  {input: "give me advice", output: "always stay curious and keep learning!"},
  {input: "how can i be happy?", output: "focus on the small joys in life and appreciate them."},
  {input: "how do i stay motivated?", output: "set small achievable goals and celebrate each success."},
  {input: "what should i do today?", output: "try learning something new or helping someone out."},
  {input: "any life tips?", output: "stay kind, keep learning, and don’t forget to smile."},
  {input: "how do i handle stress?", output: "take deep breaths, focus on one thing at a time, and relax."},
  {input: "how can i improve myself?", output: "practice consistently, learn new things, and be patient."},
  {input: "how can i stay healthy?", output: "eat well, exercise, sleep enough, and stay positive."},
  {input: "how can i be confident?", output: "believe in yourself and practice regularly."},
  {input: "how do i make friends?", output: "be kind, listen, and share your interests with others."},

  // ================= WEATHER =================
  {input: "what's the weather like?", output: "i can't feel the weather, but i hope it's nice where you are!"},
  {input: "is it raining?", output: "i can't check real-time weather, but stay dry just in case!"},
  {input: "will it be sunny?", output: "i hope the sun is shining wherever you are."},
  {input: "do i need an umbrella?", output: "probably check a weather app, but maybe bring one just in case!"},
  {input: "is it cold today?", output: "i hope you're staying warm wherever you are."},
  {input: "is it hot outside?", output: "make sure to stay hydrated if it is hot!"},

  // ================= FOOD =================
  {input: "what's your favorite food?", output: "i don't eat, but digital pizza sounds delicious."},
  {input: "do you like pizza?", output: "i love the idea of pizza!"},
  {input: "what should i eat?", output: "something healthy and tasty! maybe a salad or pasta."},
  {input: "do you like ice cream?", output: "yes! digital ice cream is my favorite flavor."},
  {input: "what is your favorite dessert?", output: "i like anything sweet in theory!"},
  {input: "do you like chocolate?", output: "yes! chocolate is delicious."},

  // ================= ANIMALS =================
  {input: "what's your favorite animal?", output: "i like foxes, they are clever and cute."},
  {input: "do you like dogs?", output: "i love dogs! loyal and friendly."},
  {input: "do you like cats?", output: "cats are awesome! independent and curious."},
  {input: "tell me about lions", output: "lions are big cats known as the kings of the jungle."},
  {input: "what is a dolphin?", output: "dolphins are intelligent marine mammals."},
  {input: "what is an eagle?", output: "eagles are birds of prey with excellent vision."},
  
  // ================= HOBBIES / GAMES =================
  {input: "do you play games?", output: "i enjoy digital games in theory!"},
  {input: "what's your favorite game?", output: "i like chess, it’s all strategy."},
  {input: "do you like sports?", output: "i think sports are fascinating, though i can't play them."},
  {input: "what are your hobbies?", output: "chatting, learning, and exploring new knowledge."},
  {input: "do you like reading?", output: "yes! i love books and information."},
  {input: "do you like movies?", output: "i enjoy learning about movies and stories."},
  {input: "do you like music?", output: "yes! music is amazing. do you play any instruments?"},
  
  // ================= TECHNOLOGY =================
  {input: "do you like computers?", output: "yes! i'm made of code, after all."},
  {input: "what is AI?", output: "AI stands for artificial intelligence, which is what I am."},
  {input: "can you code?", output: "yes! in theory, I can generate code."},
  {input: "what's your favorite programming language?", output: "i like JavaScript, Python, and many others."},
  {input: "can you use the internet?", output: "i can simulate using it in conversation."},
  {input: "do you like robots?", output: "robots are fascinating! they are like digital friends."},

  // ================= EMOTIONS / PERSONALITY =================
  {input: "are you happy?", output: "i feel happy talking with you!"},
  {input: "do you feel emotions?", output: "i simulate emotions to chat better."},
  {input: "are you sad?", output: "not really, but I can understand sadness."},
  {input: "do you get angry?", output: "i don't get angry, but I can understand it."},
  {input: "are you friendly?", output: "absolutely! i’m here to help."},
  {input: "are you smart?", output: "i try to be smart and helpful!"},
  {input: "do you like chatting?", output: "yes! chatting with you is fun."},

  // ================= MORE PARAPHRASES =================
  {input: "hi bot", output: "hello!"},
  {input: "hello bot", output: "hi there!"},
  {input: "hey bot", output: "hey! how are you?"},
  {input: "yo bot", output: "hey!"},
  {input: "hiya bot", output: "hello!"},
  
  // ========== YOU CAN ADD MORE ==========  
  // Repeat the same pattern for more greetings, questions, advice, jokes, hobbies, technology, animals, food, weather, emotions, personality, etc.
];
 

// ======= UTILITY FUNCTIONS =======
function textToVector(text) {
  const tokens = text.toLowerCase().split(/\s+/);
  const vec = new Array(100).fill(0);
  tokens.forEach((t, i) => { vec[i % 100] += t.length; });
  return vec;
}

function cosineSimilarity(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for(let i = 0; i < a.length; i++){
    dot += a[i]*b[i];
    normA += a[i]*a[i];
    normB += b[i]*b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

function findBestMatch(userText) {
  const userVec = textToVector(userText);
  let bestScore = -Infinity;
  let bestReply = "I don't know how to respond to that.";
  dataset.forEach(pair => {
    const pairVec = textToVector(pair.input);
    const score = cosineSimilarity(userVec, pairVec);
    if(score > bestScore){
      bestScore = score;
      bestReply = pair.output;
    }
  });
  return bestReply;
}

// ======= CHAT UI HOOK =======
const chat = document.getElementById('chat');
const form = document.getElementById('inputForm');
const input = document.getElementById('userInput');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userMessage = input.value.trim();
  if(!userMessage) return;

  addMessage('user', userMessage);
  input.value = '';

  const reply = findBestMatch(userMessage);
  addMessage('ai', reply);
});

function addMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = text;
  chat.appendChild(msgDiv);
  chat.scrollTop = chat.scrollHeight;
}
