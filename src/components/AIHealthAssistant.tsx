import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  AlertTriangle, 
  Heart,
  Activity,
  Phone,
  Stethoscope
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  severity?: 'low' | 'medium' | 'high' | 'emergency';
}

const AIHealthAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm your AI Health Assistant. I can help you with symptom checking, health advice, and determining if you need emergency care. What symptoms are you experiencing today?",
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputMessage('');
  };

  const generateAIResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    
    // Emergency keywords
    if (input.includes('chest pain') || input.includes('heart attack') || input.includes('breathing') || input.includes('unconscious')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: "🚨 This sounds like a medical emergency. Please call 911 immediately or go to the nearest emergency room. Do not delay seeking immediate medical attention.",
        timestamp: new Date(),
        severity: 'emergency'
      };
    }
    
    // Blood-related symptoms
    if (input.includes('bleeding') || input.includes('blood') || input.includes('anemia') || input.includes('fatigue')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: "I notice you're experiencing symptoms that could be related to blood disorders or blood loss. Based on your symptoms, I recommend scheduling a consultation with a doctor. Would you like me to help you book a telehealth appointment?",
        timestamp: new Date(),
        severity: 'medium'
      };
    }
    
    // General symptoms
    if (input.includes('fever') || input.includes('headache') || input.includes('cold')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: "These symptoms suggest a common viral infection. I recommend rest, staying hydrated, and monitoring your temperature. If symptoms worsen or persist for more than 3 days, please consult a healthcare provider.",
        timestamp: new Date(),
        severity: 'low'
      };
    }
    
    // Default response
    return {
      id: Date.now().toString(),
      type: 'ai',
      content: "I understand you're experiencing some health concerns. Can you provide more specific details about your symptoms? For example: when did they start, how severe are they, and are there any accompanying symptoms?",
      timestamp: new Date(),
      severity: 'low'
    };
  };

  const getSeverityColor = (severity?: string) => {
    switch (severity) {
      case 'emergency': return 'bg-emergency text-white';
      case 'high': return 'bg-warning text-white';
      case 'medium': return 'bg-warning-light text-warning';
      case 'low': return 'bg-health-green-light text-health-green';
      default: return 'bg-medical-primary-light text-medical-primary';
    }
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="flex flex-row items-center space-y-0 pb-4">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full gradient-medical flex items-center justify-center">
            <Stethoscope className="h-5 w-5 text-white" />
          </div>
          <div>
            <CardTitle className="text-lg">AI Health Assistant</CardTitle>
            <p className="text-sm text-muted-foreground">Powered by advanced medical AI</p>
          </div>
        </div>
        <div className="ml-auto">
          <Badge className="bg-health-green-light text-health-green">
            <Activity className="h-3 w-3 mr-1" />
            Active
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col space-y-4">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 max-h-96">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' 
                    ? 'bg-medical-primary text-white' 
                    : 'gradient-medical'
                }`}>
                  {message.type === 'user' ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>
                <div className={`rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-medical-primary text-white'
                    : message.severity === 'emergency'
                    ? 'bg-emergency text-white'
                    : 'bg-muted'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  {message.severity && message.severity !== 'low' && (
                    <Badge className={`mt-2 ${getSeverityColor(message.severity)}`}>
                      {message.severity === 'emergency' && <AlertTriangle className="h-3 w-3 mr-1" />}
                      {message.severity.toUpperCase()}
                    </Badge>
                  )}
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setInputMessage("I have a headache and fever")}
          >
            Common Cold Symptoms
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setInputMessage("I'm feeling very tired and weak")}
          >
            Fatigue & Weakness
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-emergency/10 text-emergency border-emergency/20"
            onClick={() => setInputMessage("I have severe chest pain")}
          >
            <AlertTriangle className="h-3 w-3 mr-1" />
            Emergency
          </Button>
        </div>

        {/* Input */}
        <div className="flex space-x-2">
          <input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Describe your symptoms..."
            className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button onClick={handleSendMessage} className="gradient-medical">
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* Emergency Contact */}
        <div className="flex items-center justify-between bg-emergency/10 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-emergency" />
            <span className="text-sm text-emergency font-medium">Emergency: 911</span>
          </div>
          <Button size="sm" className="bg-emergency hover:bg-emergency/90">
            Call Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIHealthAssistant;