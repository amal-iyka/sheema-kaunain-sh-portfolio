import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Sheema's AI assistant. I can help you learn more about her background, projects, and skills. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn about Sheema Kaunain. You can ask me about her projects, skills, experience, or education. What interests you most?";
    }
    
    // About/Background
    if (message.includes('about') || message.includes('background') || message.includes('who is')) {
      return "Sheema Kaunain is a results-oriented Computer Science Engineer with a strong background in Python, Java, and MySQL. She has an impressive CGPA of 8.95 and specializes in responsive web development and machine learning. She's passionate about building innovative solutions and driving technical excellence.";
    }
    
    // Projects
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return "Sheema has worked on several impressive projects:\n\n🎬 **Movie Recommendation System** - A Python-based app using cosine similarity with Streamlit UI\n\n📉 **Customer Churn Prediction** - ML pipeline using Logistic Regression and Decision Trees\n\n✈️ **Airline Management System** - Java-based console app with file handling\n\nWould you like to know more details about any specific project?";
    }
    
    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return "Sheema's technical skills include:\n\n**Frontend:** HTML, CSS, JavaScript, TypeScript, React.js\n**Backend:** Python, Java, MySQL\n**Data Science:** Pandas, Scikit-learn, Machine Learning\n**Tools:** Git, GitHub, Streamlit, Jupyter Notebook\n**Soft Skills:** Quick learner, problem-solving, team collaboration\n\nShe's particularly strong in Python (95% proficiency) and algorithm design!";
    }
    
    // Experience
    if (message.includes('experience') || message.includes('internship') || message.includes('work')) {
      return "Sheema has gained valuable experience through multiple internships:\n\n**VaultOfCodes** (Aug-Sep 2025) - Web Development\n**ShadowFox Inc.** (Jan-Feb 2025) - Web Development\n**Tata Cyber Security** (March 2025) - Cybersecurity Virtual Internship\n\nShe focused on code optimization, debugging, and performance enhancement across these roles.";
    }
    
    // Education
    if (message.includes('education') || message.includes('college') || message.includes('degree')) {
      return "Sheema is pursuing her Bachelor of Engineering in Computer Science from Priyadarshini Engineering College with an excellent CGPA of 8.95 (Nov 2023 - July 2025). She also completed her Higher Secondary Education with 80% from Al-Ameen Matric.Hr.Sec.School.";
    }
    
    // Contact
    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return "You can reach Sheema through:\n📧 **Email:** sheemakaunainsh@gmail.com\n📱 **Phone:** +91 9342731307\n📍 **Location:** Tirupattur, Tamil Nadu, India\n💼 **LinkedIn:** linkedin.com/in/sheema-kaunain/\n💻 **GitHub:** github.com/amal-iyka\n\nFeel free to use the contact form on this website too!";
    }
    
    // Machine Learning specific
    if (message.includes('machine learning') || message.includes('ml') || message.includes('ai')) {
      return "Sheema has hands-on experience with Machine Learning! She built a Customer Churn Prediction system using Logistic Regression and Decision Trees, and a Movie Recommendation System using cosine similarity. She's proficient with Pandas, Scikit-learn, and data visualization with Matplotlib and Seaborn.";
    }
    
    // Location
    if (message.includes('location') || message.includes('where')) {
      return "Sheema is based in Tirupattur, Tamil Nadu, India. She's open to both local and remote opportunities!";
    }
    
    // Resume
    if (message.includes('resume') || message.includes('cv') || message.includes('download')) {
      return "You can download Sheema's complete resume from the contact section of this website, or directly from this Google Drive link: https://drive.google.com/file/d/1Yj0LIUEDZj7AWCw_utTxiJxPfaFXtyt6/view?usp=drive_link";
    }
    
    // Default response
    return "That's a great question! I can help you learn about Sheema's projects, skills, experience, education, or how to contact her. You can also ask about specific technologies she works with or her background in machine learning and web development. What would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(input.trim());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg glow z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      <Card className="glass border-primary/50 shadow-2xl h-full flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Sheema's AI Assistant</h3>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="flex-1 p-0 overflow-hidden">
              <ScrollArea className="h-full px-4">
                <div className="space-y-4 pb-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2 ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.sender === 'bot' && (
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="h-3 w-3 text-primary" />
                        </div>
                      )}
                      <div
                        className={`max-w-[70%] rounded-lg px-3 py-2 text-sm ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{message.content}</div>
                        <div className={`text-xs mt-1 opacity-70 ${
                          message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                      {message.sender === 'user' && (
                        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                          <User className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex gap-2 justify-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="h-3 w-3 text-primary" />
                      </div>
                      <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
            </CardContent>

            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Sheema..."
                  className="flex-1 bg-background/50"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isTyping}
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;