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

  export interface Url {
    name: string;
    url: string;
  }