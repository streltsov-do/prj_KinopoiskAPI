import * as dotenv from "dotenv";

dotenv.config();

export const getConfig = () => ({
    X_API_KEY: process.env.REACT_APP_X_API_KEY,
});

export const X_API_KEY = process.env.REACT_APP_X_API_KEY;