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

  export interface AuditorIndex {
    total: string;
    perPage: number;
    page: number;
    lastPage: number;
    data: Auditor[];
  }

  export interface Auditor {
    id: number;
    name:string;
    lastname:string;
    user_id: number;
    gender: string;
    isExternal: boolean;
    external: External;
    user: User;
  }

  export interface EnterpriseIndex {
    total: string;
    perPage: number;
    page: number;
    lastPage: number;
    data: Enterprise[];
  }

  export interface Enterprise {
    id:number;
    address: string;
    rfc: string;
    name: string;
    industry: string;
    user: User;
  }

  export interface Question {
    id:number;
   // audit_id: number;
    question:string;
    type: string;
    //options:Option[];
    options:string;
  }
/*
  export interface Option {
    option:string;
    value:number;
  }*/
  export interface AuditIndex {
    total: string;
    perPage: number;
    page: number;
    lastPage: number;
    data: Audit[];
  }



  export interface QuestionIndex {
    total: string;
    perPage: number;
    page: number;
    lastPage: number;
    data: Question[];
  }

  export interface Audit {
    id:number;
    isCustom: boolean;
    name:string;
    questions: Question[]
  }

  export interface External {
    id: number;
    company:string;
    memberdate:Date;
    auditor_id: number;
  }