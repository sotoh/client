export interface User {
    id: number;
    username: string;  
    email: string;
    type:string;
    token?: Token;
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

  export interface Auditor {
    id: number;
    name:string;
    lastname:string;
    user_id: number;
    gender: string;
    isExternal: boolean;
    external: External;
  }

  export interface External {
    id: number;
    company:string;
    memberdate:Date;
    auditor_id: number;
  }