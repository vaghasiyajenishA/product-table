import { delay, LS, TOKEN_PREFIX } from "../utiles";

export const authService = {
  async login({ username, password }) {
    try {
      await delay(1000);

      const users = LS.get("users", []);
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (!user) {
        return { success: false, error: "Invalid username or password" };
      }

      const userData = {
        id: user.id,
        username: user.username,
        email: user.email,
      };

      LS.set("currentUser", userData);
      LS.set("authToken", `${TOKEN_PREFIX}${user.id}`);

      return { data: userData, success: true };
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, error: error.message };
    }
  },

  async register({ username, email, password }) {
    try {
      await delay(1000);

      const users = LS.get("users", []);
      const userExists = users.some(
        (u) => u.email === email || u.username === username
      );

      if (userExists) {
        return {
          success: false,
          error: "User with this email or username already exists",
        };
      }

      const newUser = {
        id: Date.now().toString(),
        username,
        email,
        password,
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      LS.set("users", users);

      const responseUser = {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      };

      LS.set("currentUser", responseUser);
      LS.set("authToken", `${TOKEN_PREFIX}${newUser.id}`);

      return { data: responseUser, success: true };
    } catch (error) {
      console.error("Registration failed:", error);
      return { success: false, error: error.message };
    }
  },

  async logout() {
    try {
      LS.remove("currentUser");
      LS.remove("authToken");
      return { success: true };
    } catch (error) {
      console.error("Logout failed:", error);
      return { success: false, error: error.message };
    }
  },

  getCurrentUser() {
    return LS.get("currentUser", null);
  },

  isAuthenticated() {
    return !!localStorage.getItem("authToken");
  },
};