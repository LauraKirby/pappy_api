/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globalSetup: "<rootDir>/src/tests/global_setup.ts",
  setupFilesAfterEnv: ["<rootDir>/src/tests/db_env.ts"]
}
