# Traditional values organizaion main website

This is a VueJS 3.x boilerplate for a donation website. It is set up to be automatically deployed to GitHub Pages using GitHub Actions.

## Project setup

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/my-vue-app.git
```

Navigate into the project directory:

```bash
cd my-vue-app
```

Install the necessary dependencies:

```bash
npm install
```

## Running the application

To run the application in development mode, use the following command:

```bash
npm run serve
```

This will start a local development server. You can view the application by opening `http://localhost:8080` in your browser.

## Building the application

To build the application for production, use the following command:

```bash
npm run build
```

This will create a `dist` directory with the compiled assets.

## Deploying the application

The application is set up to be automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. This is done using a GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

If you want to manually deploy the application, you can use the following command:

```bash
npm run deploy
```

This will build the application and push the `dist` directory to the `gh-pages` branch.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
