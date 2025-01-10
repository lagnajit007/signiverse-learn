export interface Message {
  id: number;
  sender: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  timestamp: string;
  isOwn?: boolean;
}

export const getOrSetApiKey = () => {
  const storedKey = localStorage.getItem('GEMINI_API_KEY');
  if (!storedKey) {
    localStorage.setItem('GEMINI_API_KEY', 'AIzaSyDmMfckuj5NNPBjJoOZMaJNE3804I6uzds');
  }
  return storedKey || 'AIzaSyDmMfckuj5NNPBjJoOZMaJNE3804I6uzds';
};