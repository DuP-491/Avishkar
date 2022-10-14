import { hashSync, genSaltSync } from "bcrypt";
import { randomBytes } from "crypto";
import { readFileSync } from "fs";
import { join } from "path";
import { sign } from "jsonwebtoken";

const privateKEY = readFileSync(join(__dirname, "../private.key"), "utf-8");
const signOptions = {
    issuer: "Avishkar 2k22",
    expiresIn: "24h",
    algorithm: "RS256",
};

export function generateUsername(email: string): string {
    let username = email.substring(0, email.indexOf("@"));
    const randomNumber = Math.floor(Math.random() * 900 + 100);
    username = username + randomNumber.toString();
    return username;
}

export function generateVerifyToken(length: number) {
    return randomBytes(length).toString("hex");
}

export function generateSalt(iterations: number) {
    return genSaltSync(iterations);
}

export function generateHash(salt, password) {
    const hashPassword = hashSync(password, salt);
    return hashPassword;
}

export function generateSignedPayload(details) {
    const { id, name, email, createdAt } = details;
    return sign({ id, name, email, createdAt }, privateKEY, signOptions);
}
