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
    pivot?: Pivot;
  }

  export interface Pivot {
    assign: string;
    status:string;
    enterprise_id?: number;
    audit_id?:number;
  }

  
  export interface EnterpriseAuditIndex {
    total: string;
    perPage: number;
    page: number;
    lastPage: number;
    data: EnterpriseAudit[]
  }

  export interface EnterpriseAudit {
    id:number;
    name: string;
    enterprise: string;
    status:string;
    assign: string;
    enterpriseId:number;
  }

  export interface Question {
    id:number;
   // audit_id: number;
    question:string;
    type: string;
    //options:Option[];
    options:string;
  }

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
    pivot: Pivot;
    questions?: Question[]
  }
  
  export interface External {
    id: number;
    company:string;
    memberdate:Date;
    auditor_id: number;
  }

  export interface Answer {
  question:number;
  option:number
  value:number;
  ofi?:string;
  observations?:string;
  }

  export interface Result {

  }