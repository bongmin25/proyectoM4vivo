export interface AuthPrividerProps {
  children: React.ReactNode;
}

export interface User {
  id?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  role?: any;
  orders?: any;
}

export interface Order {
  id: number;
  status: string;
  date: string;
}
export interface UserSession {
  login: boolean;
  user: User;
  token: string;
  orders?: Order[];
}
export interface IAuthContext {
  user: UserSession | null;
  setUser: (user: UserSession) => void;
  logout: () => void;
}
