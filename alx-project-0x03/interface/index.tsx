import { ReactNode } from 'react';

export interface CardProps {
    title: string;
    content: string;
  }
  export interface PostProps {
    title: string;
    content: string;
    userId: number;
  }
  export interface UserProps {
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
    };
  }
  
  export interface PageRouteProps {
    pageRoute: string;
  }
  export interface ButtonProps {
    action: () => void;
    buttonLabel: string;
    buttonBackgroundColor: string;
  }
  export interface LayoutProps {
    children: ReactNode;
  }