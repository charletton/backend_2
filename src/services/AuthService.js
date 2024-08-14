import bcrypt from "bcrypt";

export default class AuthService {
    async hashPassword(password) {
        const salts = await bcrypt.genSalt();
        return bcrypt.hash(password, salts);
    };

    async validatePassword(password, userPassword) {
        return bcrypt.compare(password, userPassword);
    };
}