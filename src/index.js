
import app from "./app.js";
import { env } from "./config/envConfig.js";
import pool from "./config/dbConfig.js";

const PORT = env.PORT;
const startServer = async () => {
    try {
        // Test database connection
        await pool.query("SELECT 1");
        console.log("PostgreSQL connected successfully!");

        // Start Express server
        app.listen(PORT, () => {
            console.log(`Twitter server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};

startServer();
