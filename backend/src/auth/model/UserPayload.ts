export interface UserPayload {
    sub: number;
    email: string;
    name: string;
    company: boolean;
    iat?: number;
    exp?: number;
}