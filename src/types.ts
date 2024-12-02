export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface Video {
  id: string;
  title: string;
  videoUrl: string;
  platform: 'youtube' | 'vimeo' | 'dailymotion' | 'embed';
  videoId: string;
  class: string;
  subject: string;
  userId: string;
  watched?: boolean;
  favorite?: boolean;
  todos: Todo[];
}

export interface Category {
  class: string;
  subjects: string[];
}

export interface User {
  id: string;
  username: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => boolean;
  logout: () => void;
}