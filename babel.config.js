module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env", // Укажите, что переменные будут импортироваться из модуля @env
        path: ".env", // Укажите путь к вашему .env файлу
      },
    ],
  ],
};
