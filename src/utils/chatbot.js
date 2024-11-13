const responses = {
  greeting: [
    "Hello! How can I help you today?",
    "Hi there! What can I do for you?",
    "Welcome! How may I assist you?"
  ],
  farewell: [
    "Goodbye! Have a great day!",
    "See you later! Take care!",
    "Bye! Feel free to come back if you need help!"
  ],
  unknown: [
    "I'm not sure I understand. Could you rephrase that?",
    "I'm still learning. Could you try asking differently?",
    "I don't have information about that yet."
  ],
  help: [
    "I can help you with:\n1. Product information\n2. Business hours\n3. Contact information",
    "Need help? I can assist with basic inquiries about our services!",
    "I'm here to help! Ask me about our products or services."
  ]
};

const knowledgeBase = {
  product: "We offer various software solutions including web development and AI services.",
  hours: "Our business hours are Monday-Friday, 9 AM - 5 PM EST.",
  contact: "You can reach us at support@example.com or call 1-800-123-4567."
};

export function chatbotRespond(userInput) {
  const input = userInput.toLowerCase();
  
  if (input.match(/hello|hi|hey/)) {
    return randomChoice(responses.greeting);
  }
  
  if (input.match(/bye|goodbye|exit/)) {
    return randomChoice(responses.farewell);
  }
  
  if (input.includes('help')) {
    return randomChoice(responses.help);
  }
  
  if (input.includes('product')) {
    return knowledgeBase.product;
  }
  
  if (input.includes('hours')) {
    return knowledgeBase.hours;
  }
  
  if (input.includes('contact')) {
    return knowledgeBase.contact;
  }
  
  return randomChoice(responses.unknown);
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}