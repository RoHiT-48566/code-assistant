const path = require("path");

// ✅ Load .env from the project root
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// console.log(
//   "Loaded GOOGLE_API_KEY:",
//   process.env.GOOGLE_GEMINI_KEY ? "✅ Present" : "❌ Missing"
// );

const app = require("../backend/src/app");

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
