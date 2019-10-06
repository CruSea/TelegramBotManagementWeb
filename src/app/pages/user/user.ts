export interface User {
    id: number;
    fullName: string;
    email?: string;
    phoneNumber: string;
    password?: string;
    status?: boolean;
}

export interface UserList {
    usersList?: Array<User>;
}
