import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";
import { IUser, IUserSlice } from "./users-types";

class UserService {
    static async getUsers() {
        const url = 'https://reqres.in/api/a/s';
        try {
            const res = await fetch(url);
            if (!res.ok) {
                return { code: res.status, message: res.statusText }
            }

            return (await res.json()).data as IUser[]
        } catch (error) {
            console.log({ error });

            return error
        }
    };
};

export const fetchUsers = createAsyncThunk("users/fetch", async (_, { getState }) => {
    return await UserService.getUsers();
})

const initialState: IUserSlice = {
    users: [],
    loading: "",
    error: {}
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            // if (state.loading === 'idle') {
            state.loading = 'pending'
            // }
        }).addCase(fetchUsers.fulfilled, (state, action) => {
            console.log({ action, state: state.loading });
            // if (state.loading === 'pending') {
            if (action.payload.code) {
                state.users = [];
                state.error = action.payload
            } else {
                state.users = action.payload ?? [];
            }
            state.loading = 'idle';
            // }
        }).addCase(fetchUsers.rejected, (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = action.error
            }
        })
    }
})

export default usersSlice.reducer;

export const useUsersState = () => useAppSelector((state) => state.users);