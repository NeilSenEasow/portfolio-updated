// import { useState, useRef, useEffect } from 'react';
// import { Send, Bot, User, X, MessageCircle, RefreshCcw } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Message, BotResponse } from './types';

// const BOT_RESPONSES: Record<string, BotResponse> = {
//   'hi': {
//     response: "Hello! I'm Neil's portfolio assistant. How can I help you today?",
//     suggestions: ['Tell me about Neil', 'Show his skills', 'How to contact him?']
//   },
//   'about': {
//     response: "Neil is a passionate and versatile full-stack developer with a strong foundation in JavaScript, Node.js, and React. He is committed to writing clean, maintainable, and well-documented code. He is also eager to contribute to the development of scalable, AI-driven applications and collaborate with global teams on cutting-edge projects.",
//     suggestions: ['What are his skills?', 'Show me his projects', 'What is his experience?']
//   },
//   'skills': {
//     response: "Here are some of Neil's technical skills:\n\n• **Languages**: JavaScript, Python, Java, C, SQL, TypeScript\n• **Frontend**: React.js, Next.js, Tailwind CSS, Bootstrap, HTML5, CSS3\n• **Backend**: Node.js, Express.js, Flask, MERN Stack, PHP\n• **Databases**: MongoDB, MySQL, PostgreSQL, SQL\n• **AI/ML**: PyTorch, LangChain, RAG, Convolutional Neural Networks (CNN), Object Detection, Computer Vision\n• **DevOps & Tools**: Git, GitHub, GitLab, Docker, Jira, VS Code, Jupyter Notebook, API",
//     suggestions: ['Show me his projects', 'What is his experience?', 'Contact information']
//   },
//   'projects': {
//     response: "Neil has worked on several notable projects:\n\n1. **AI Career Guider**: A scalable, full-stack AI platform using a clean architecture with React.js and a Flask backend. It features an AI-driven LangChain with RAG pipeline to provide personalized and accurate career recommendations.\n2. **Playboxstore**: A full-stack e-commerce platform built with the MERN stack. He designed a scalable admin dashboard for inventory management and optimized RESTful APIs.\n3. **Mushroom Disease Classification**: A Convolutional Neural Network (CNN) in PyTorch to classify mushroom diseases, achieving a test accuracy of 89.3%. He also created a Flask web application for the user interface.\n4. **Open Courses**: An online course platform where he led the frontend development using React.js and Tailwind CSS.",
//     suggestions: ['Tell me about the Mushroom project', 'What is his experience?', 'How to contact him?']
//   },
//   'experience': {
//     response: "Here's a summary of Neil's professional experience:\n\n• **Webmaster at IEEE SB AJCE** (Jan. 2024-Present): Maintained and updated the official student branch website and implemented SEO best practices, which led to a 20% increase in organic traffic.\n• **Design Intern at IEEE Kerala Section** (Mar. 2024-Present): Created and contributed to design materials for state-level IEEE events.\n• **Frontend Developer Intern at OpenCourses Startup** (Jun. 2023-Aug. 2023): Designed and developed the frontend of a student courses platform using React.js and Tailwind CSS.",
//     suggestions: ['His education?', 'Show me his projects', 'Contact information']
//   },
//   'contact': {
//     response: "You can reach Neil through these channels:\n\n• **Email**: neilseneasow@gmail.com\n• **LinkedIn**: linkedin.com/in/neilseneasow\n• **GitHub**: github.com/neilseneasow\n• **Phone**: +91 8891064395",
//     suggestions: ['Tell me about Neil', 'Show his skills', 'Show me his projects']
//   },
//   'education': {
//     response: "Neil is pursuing a B.Tech in Computer Science and Engineering from Amal Jyothi College of Engineering with an expected graduation in 2026. He completed his CBSE Class XII from Marian Senior Secondary School in 2022 and CBSE Class X from Indian Central School in 2020.",
//     suggestions: ['His experience?', 'Show me his skills', 'How to contact him?']
//   },
//   'leadership': {
//     response: "Neil has held several leadership roles:\n\n• **Webmaster** at IEEE Student Branch AJCE (2024-Present): Maintained and enhanced the student branch website.\n• **Technical Coordinator** at Amal Jyothi College of Engineering (2023-2024): Coordinated multiple hackathons and coding competitions. He also acted as an IEEE Xtreme Campus Ambassador.\n• **Event Coordinator** for EVenture 2.0 (2024): Oversaw event planning and execution.",
//     suggestions: ['What is his experience?', 'Show me his skills', 'Contact information']
//   },
//   'default': {
//     response: "I'm not sure I understand. Could you rephrase that? Here are some things I can help with:",
//     suggestions: ['Tell me about Neil', 'Show his skills', 'Show me his projects', 'What is his experience?', 'How to contact him?']
//   }
// };

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: 1,
//       text: "Hi there! I'm Neil's portfolio assistant. How can I help you today?",
//       sender: 'bot',
//       timestamp: new Date()
//     }
//   ]);
  
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const getBotResponse = (userInput: string): BotResponse => {
//     const lowerInput = userInput.toLowerCase();
    
//     if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
//       return BOT_RESPONSES['hi'];
//     } else if (lowerInput.includes('about') || lowerInput.includes('who are you') || lowerInput.includes('who is neil')) {
//       return BOT_RESPONSES['about'];
//     } else if (lowerInput.includes('skill') || lowerInput.includes('what can you do') || lowerInput.includes('what are his skills')) {
//       return BOT_RESPONSES['skills'];
//     } else if (lowerInput.includes('project') || lowerInput.includes('work') || lowerInput.includes('projects')) {
//       return BOT_RESPONSES['projects'];
//     } else if (lowerInput.includes('experience') || lowerInput.includes('job') || lowerInput.includes('work')) {
//       return BOT_RESPONSES['experience'];
//     } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach')) {
//       return BOT_RESPONSES['contact'];
//     } else if (lowerInput.includes('education') || lowerInput.includes('school') || lowerInput.includes('college') || lowerInput.includes('degree')) {
//       return BOT_RESPONSES['education'];
//     } else if (lowerInput.includes('leadership') || lowerInput.includes('roles') || lowerInput.includes('leader')) {
//       return BOT_RESPONSES['leadership'];
//     } else {
//       return BOT_RESPONSES['default'];
//     }
//   };

//   const handleSendMessage = (e: React.FormEvent) => {
//     e.preventDefault();
//     const messageText = inputValue.trim();
//     if (!messageText) return;

//     const userMessage: Message = {
//       id: messages.length + 1,
//       text: messageText,
//       sender: 'user',
//       timestamp: new Date()
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInputValue('');

//     setTimeout(() => {
//       const { response, suggestions } = getBotResponse(messageText);
//       const botMessage: Message = {
//         id: messages.length + 2,
//         text: response,
//         sender: 'bot',
//         timestamp: new Date()
//       };
      
//       setMessages(prev => [...prev, botMessage]);
//     }, 800);
//   };

//   const handleSuggestionClick = (suggestion: string) => {
//     setInputValue(suggestion);
//     const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
//     setTimeout(() => {
//       handleSendMessage(fakeEvent);
//     }, 0);
//   };

//   const handleRestart = () => {
//     setMessages([
//       {
//         id: 1,
//         text: "Hi there! I'm Neil's portfolio assistant. How can I help you today?",
//         sender: 'bot',
//         timestamp: new Date()
//       }
//     ]);
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const formatMessage = (text: string) => {
//     return text.split('\n').map((line, i) => (
//       <span key={i}>
//         {line}
//         <br />
//       </span>
//     ));
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <AnimatePresence>
//         {isOpen ? (
//           <motion.div 
//             initial={{ opacity: 0, y: 20, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.9 }}
//             className="w-80 md:w-[450px] h-[450px] bg-background rounded-2xl shadow-xl flex flex-col border border-border overflow-hidden"
//           >
//             {/* Header */}
//             <div className="bg-primary/10 p-4 flex justify-between items-center border-b border-border">
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
//                   <Bot className="w-4 h-4 text-primary" />
//                 </div>
//                 <h3 className="font-medium">Portfolio Assistant</h3>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button 
//                   onClick={handleRestart}
//                   className="p-1 rounded-full hover:bg-muted transition-colors"
//                   aria-label="Restart chat"
//                 >
//                   <RefreshCcw className="w-4 h-4" />
//                 </button>
//                 <button 
//                   onClick={() => setIsOpen(false)}
//                   className="p-1 rounded-full hover:bg-muted transition-colors"
//                   aria-label="Close chat"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-4">
//               {messages.map((message) => (
//                 <motion.div
//                   key={message.id}
//                   initial={{ opacity: 0, x: message.sender === 'user' ? 20 : -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div 
//                     className={`max-w-[80%] p-3 rounded-2xl ${
//                       message.sender === 'user' 
//                         ? 'bg-primary text-primary-foreground rounded-br-none' 
//                         : 'bg-muted/50 rounded-bl-none'
//                     }`}
//                   >
//                     <div className="whitespace-pre-line">{formatMessage(message.text)}</div>
//                   </div>
//                 </motion.div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Suggestions */}
//             {messages.length > 0 && messages[messages.length - 1].sender === 'bot' && (
//               <div className="px-4 pb-2 flex flex-wrap gap-2">
//                 {getBotResponse(messages[messages.length - 1].text).suggestions?.slice(0, 3).map((suggestion, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleSuggestionClick(suggestion)}
//                     className="text-xs px-3 py-1 bg-muted hover:bg-muted/80 rounded-full transition-colors"
//                   >
//                     {suggestion}
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* Input */}
//             <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={inputValue}
//                   onChange={(e) => setInputValue(e.target.value)}
//                   placeholder="Type a message..."
//                   className="w-full pl-4 pr-10 py-2 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
//                 />
//                 <button
//                   type="submit"
//                   className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
//                   aria-label="Send message"
//                 >
//                   <Send className="w-4 h-4" />
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         ) : (
//           <motion.button
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setIsOpen(true)}
//             className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
//             aria-label="Open chat"
//           >
//             <MessageCircle className="w-6 h-6" />
//           </motion.button>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }