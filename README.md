# Metric Tiles

Link: [Netlify Live](https://metric-tiles-nn.netlify.app/)

### Folders Description

- **public/**: Contains static assets like images, fonts, and the HTML file.

  - **assets/**: All static assets including images and fonts.
  - **favicon.ico**: The favicon for the website.
  - **index.html**: The main HTML file.

- **src/**: Contains the source code of the application.

  - **features/**: Organized by feature, each containing related components, hooks, services, and types.

    - **insight/**: Insight feature.
      - **components/**: Components specific to the Insight feature.
      - **hooks/**: Custom hooks related to Insight.
      - **util/**: Util files related to Insight.
      - **api/**: Apis for Insight.
      - **Insight.tsx**: Entry point for the Insight feature.
    - **...**: Additional features follow the same structure.

  - **layout/**: Layout components like header, footer, etc.
  - **assets/**: Styling files, global styles.
  - **themes/**: App themes.
  - **components/**: Shared components accross the app.
  - **hooks/**: Shared hooks accross the app.
  - **store/**: App store.
  - **App.tsx**: The root component.
  - **main.tsx**: The entry point of the application.

- **.gitignore**: Specifies files and directories that should be ignored by Git.
- **vite.config.ts**: Vite config file.
- **package.json**: Contains project metadata and dependencies.
- **tsconfig.app.json**: TypeScript configuration file.
- **README.md**: The project documentation.

This structure is flexible and can be adjusted to meet the specific needs of your project.
