# ManageTeam Express Swagger

Complete express middleware for ManageTeam JavaScript services. Features:

+ Swagger UI middleware
+ Swagger validation middleware
+ Swagger file assembly

Installation
------------

Create `.npmrc` file near the `package.json` file with `registry="https://nexus.infra.mt.internal/repository/dt-npm-group/"` content. Then install with:

```bash
  npm install --save vklymniuk-express-swagger
```

Usage
-----

```javascript
  import express from "express";
  import enableSwagger from "vklymniuk-express-swagger";

  const app = express();

  await enableSwagger(app, { // Second parameter (options) is optional, defaults are listed below
      route: "/swagger",
      yamlPath: "src/swagger",
      enableUi: true
  });
```

Directory structure under `yamlPath` directory:

```yaml
  - definitions
    - order.yaml
    - response.yaml
  - paths
    - index.yaml
    - order.yaml
  template.yaml
```

Missing `template.yaml` file will be replaced with default template:

```yaml
  swagger: "2.0"
  info:
    description: ""
    version: "1.0"
    title: ManageTeam Token Provider Payment Service
  consumes:
    - application/json
  produces:
    - application/json
  definitions:
    {DEFINITION_FILE_NAME}:
      ...
  paths:
    {CONTENTS_OF_FILES_IN_PATHS_DIRECTORY}
```

License
-------

[MIT](LICENSE) (c) [Volodymyr Klymniuk](Volodymyr.Klymniuk@gmail.com)