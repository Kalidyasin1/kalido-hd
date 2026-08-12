export interface User { username: string }
export interface BlogPost { id: string; title: string; excerpt: string; image: string; date: string; tags: string[]; views?: number }
export interface PortfolioItem { id: string; title: string; description: string; tags: string[]; image: string; category: string }
export interface Service { id: string; title: string; priceFrom?: number; description: string }
export interface JobOpportunity { id: string; title: string; incomeRange: string; tags: string[]; description: string; link?: string }
export interface Course { id: string; title: string; level: 'Beginner'|'Intermediate'|'Advanced'; duration: string; lessons: number; image: string }
export interface Comment { id: string; author: string; message: string; date: string }
export interface ChatMessage { id: string; role: 'user'|'bot'; message: string; time: number }
