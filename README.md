Yarn Monorepo

  This is a Yarn monorepo starter template for creating multi-package projects. It's designed to help you manage multiple packages with a single repository and to make it easy to share code between packages and apps.

  Getting Started

    1. Clone the repository `git clone https://github.com.abirahmed56/yarn-monorepo.git`
    2. Install Yarn if you don't have it already: `npm install -g yarn`
    3. Install dependencies: `yarn install`


Project Structure


   monorepo/
     apps/
       app1/
       app2/
       ...
     packages/
       package1/
       package2/
       ...


Creating a New Package

  To create a new package in the monorepo:

  1. Create a new directory for the package under `packages/`
  2. Initialize a new package.json file in the directory: `yarn init`
  3. Add any necessary dependencies to the package: `yarn workspace <package-name> add <dependency>`
  4. Add any necessary scripts to the `package.json` file.


Running the App

  To run specific app:

  1. Navigate to the apps directory: `cd apps`
  2. Navigate to the app: `cd app_name`
  3. Start the development server: `yarn dev`
  4. Open your web browser and go to `http://localhost:3000`

  To run all apps:

  In the root folder run the command to start all development server

      yarn dev

  then open your browser and go to `http://localhost:3000`, `http://localhost:3000`, ...
    (where all the project are running.. )

Running Scripts

  You can run scripts in individual packages using the yarn workspace command. For example, to run the build script in the package-a package:

    yarn workspace package-a run build

  You can also run scripts across all packages in the monorepo using the `--parallel` flag. For example, to run the test script in all packages:

    yarn workspaces run test --parallel


Contributing

  Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


License

  This project is licensed under the MIT License.