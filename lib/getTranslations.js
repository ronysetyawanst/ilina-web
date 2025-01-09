import fs from "fs";
import path from "path";

export async function getTranslations(locale) {
  const filePath = path.join(process.cwd(), "locales", `${locale}.json`);

  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading translation file for locale "${locale}":`, error);
    return {}; // Return an empty object if the file cannot be loaded
  }
}