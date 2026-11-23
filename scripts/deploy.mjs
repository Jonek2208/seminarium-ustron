// Wysyła zbudowaną stronę (dist/) na FTP. Dane logowania są w pliku .env (nie trafia do repo).
import { deploy } from "@samkirkland/ftp-deploy";

process.loadEnvFile(".env");

const { FTP_HOST, FTP_USER, FTP_PASSWORD } = process.env;
if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD) {
  console.error("Brak FTP_HOST, FTP_USER lub FTP_PASSWORD w pliku .env");
  process.exit(1);
}

await deploy({
  server: FTP_HOST,
  username: FTP_USER,
  password: FTP_PASSWORD,
  "local-dir": "./dist/",
  "server-dir": "./",
  "dry-run": process.argv.includes("--dry-run"),
});
