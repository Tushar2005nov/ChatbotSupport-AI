import json
import random
from datetime import datetime

class Chatbot:
    def __init__(self):
        self.memory = []
        self.responses = {
            "greeting": [
                "Hello! How can I help you today?",
                "Hi there! What can I do for you?",
                "Welcome! How may I assist you?"
            ],
            "farewell": [
                "Goodbye! Have a great day!",
                "See you later! Take care!",
                "Bye! Feel free to come back if you need help!"
            ],
            "unknown": [
                "I'm not sure I understand. Could you rephrase that?",
                "I'm still learning. Could you try asking differently?",
                "I don't have information about that yet."
            ],
            "help": [
                "I can help you with:\n1. Product information\n2. Business hours\n3. Contact information",
                "Need help? I can assist with basic inquiries about our services!",
                "I'm here to help! Ask me about our products or services."
            ]
        }
        
        self.knowledge_base = {
            "product": "We offer various software solutions including web development and AI services.",
            "hours": "Our business hours are Monday-Friday, 9 AM - 5 PM EST.",
            "contact": "You can reach us at support@example.com or call 1-800-123-4567."
        }
        
    def save_conversation(self, user_input, bot_response):
        self.memory.append({
            "timestamp": str(datetime.now()),
            "user_input": user_input,
            "bot_response": bot_response
        })
        
        # Save to JSON file
        with open("chat_history.json", "w") as f:
            json.dump(self.memory, f, indent=2)
            
    def get_response(self, user_input):
        user_input = user_input.lower()
        
        # Check for greetings
        if any(word in user_input for word in ["hello", "hi", "hey"]):
            response = random.choice(self.responses["greeting"])
        
        # Check for farewells
        elif any(word in user_input for word in ["bye", "goodbye", "exit"]):
            response = random.choice(self.responses["farewell"])
        
        # Check for help
        elif "help" in user_input:
            response = random.choice(self.responses["help"])
        
        # Check knowledge base
        elif "product" in user_input:
            response = self.knowledge_base["product"]
        elif "hours" in user_input:
            response = self.knowledge_base["hours"]
        elif "contact" in user_input:
            response = self.knowledge_base["contact"]
        
        # Default response
        else:
            response = random.choice(self.responses["unknown"])
            
        self.save_conversation(user_input, response)
        return response

def main():
    print("Chatbot: Welcome! Type 'exit' to end the conversation.")
    chatbot = Chatbot()
    
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["exit", "bye", "goodbye"]:
            print("Chatbot:", chatbot.get_response(user_input))
            break
            
        response = chatbot.get_response(user_input)
        print("Chatbot:", response)

if __name__ == "__main__":
    main()