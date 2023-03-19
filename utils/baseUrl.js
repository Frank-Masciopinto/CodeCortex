const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://codecortex.eu"
    : "http://localhost:3000";

export default baseUrl;