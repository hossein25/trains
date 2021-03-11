import { SerializedError } from "@reduxjs/toolkit";

export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}


export interface IUserSlice {
    users: IUser[];
    loading: "idle" | "pending" | "";
    error: SerializedError;
}
