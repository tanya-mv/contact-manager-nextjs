"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";

const API_URL = "http://localhost:3001";

export async function loginAction(formData: FormData) {
    try {
        const email = formData.get("email");
        const password = formData.get("password");

        console.log("EMAIL:", email);
        console.log("PASSWORD:", password);

        const response = await axios.get(
            `${API_URL}/users?email=${email}&password=${password}`
        );

        const user: UserType = response.data[0];

        if (!user) throw new Error("Invalid Credentials");


    } catch (error) {
        console.error("LOGIN ERROR:", error);
        throw error;
    }
}

redirect("/contact");

export async function logout() {
    redirect("/login");
}