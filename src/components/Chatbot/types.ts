export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface BotResponse {
  response: string;
  suggestions?: string[];
}
