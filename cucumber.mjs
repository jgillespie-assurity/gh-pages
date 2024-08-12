const config = {
    paths: ["tests/features/*.feature"],
    require: ["tests/steps/*.ts", "tests/steps/support/hooks.ts"],
    requireModule: ["ts-node/register"],
    format: [
      "summary",
      "progress-bar",
      "json:cucumber-report/cucumber-report.json",
    ],
    formatOptions: { snippetInterface: "async-await" },
  };
  
  export default config;