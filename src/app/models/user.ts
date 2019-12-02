export interface User {
    id: number;
    username: string;  
    email: string;
    token?: Token;
    type:string;
  }
  
  export interface Token {
    refreshToken: string;
    token: string;
    type: string;
  }