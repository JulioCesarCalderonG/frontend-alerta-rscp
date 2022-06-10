// Generated by https://quicktype.io

export interface ResultLogin {
    ok:    boolean;
    user:  User;
    token: string;
}

export interface User {
    id:        number;
    name:      string;
    lastname:  string;
    alias:     string;
    password:  string;
    active:    number;
    createdAt: string;
    updatedAt: string;
    rolId:     number;
}
