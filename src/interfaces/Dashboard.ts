export interface Agent {
    id: string
    name: string
    type: string
    voice: string
    phone: string
    editedBy: string
    editedAt: string
}

export interface User {
    name: string;
    email: string;
    password: string
}

export interface AuthContextType {
    user: User | null;
    login: (User: User) => void;
    logout: () => void;
}