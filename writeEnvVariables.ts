// https://pazel.dev/how-to-keep-your-secrets-from-your-source-code-in-an-angular-project
(() => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.ts';
  // Load node modules
  require('dotenv').config({
    path: './.env',
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
    PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY: '${process.env['PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY']}',
    PUBLIC_TYPESENSE_HOST: '${process.env['PUBLIC_TYPESENSE_HOST']}',
    PUBLIC_TYPESENSE_PORT: '${process.env['PUBLIC_TYPESENSE_PORT']}',
    PUBLIC_TYPESENSE_PROTOCOL: '${process.env['PUBLIC_TYPESENSE_PROTOCOL']}'
  };
  `;
  console.log(
    'The file `environment.ts` will be written with the following content: \n'
  );
  writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      );
    }
  });
})();
