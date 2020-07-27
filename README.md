[![Brajuu](doc/brajuu-mood.png)](https://brajuu.com/)

# BOOBTECH - THE QUIZ

**Perfectly fitting bras for everyone from everywhere. Because we're convinced that #alltitsaregoodtits.**

## Technology

This project based on the [npm](https://www.npm.org/) build with [React](https://reactjs.org/) and uses JavaScript as programming language. The final web application is hosted on [firebase](https://console.firebase.google.com/project/boobtech-29d0/).

## Prerequisites

### Local development

- [Docker desktop](https://www.docker.com/products/docker-desktop) >= 2.3.0.3

#### Recommended IDE (optional)

- [VS Code](https://code.visualstudio.com/) >= 1.47.2s
- [VS Code - Docker extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) >= 1.4.1

_We do not require an instance of a specific IDE for developers. However, we recommend that less technically skilled project participants install the recommended IDE and IDE extensions. For this environment, we will provide [special guides](/doc/README.md) that cover even trivial changes to the source code, deployment or testing of the application in a local context._

## Development

For local development you simply start a docker instance. The source code below `/app` is mounted as volume into the docker container. All changes can be made in the local environment without need to recreate a docker build or restart the application.

### Setup of the local development environment

In order to emulate the google firebase functions locally, we need to provide a `docker-compose.env` file with expected environment variables inside. This file mainly contains a `token` which authenticate against the google firebase services.

You can find further information in the firebase [CLI documentation - login:ci](https://firebase.google.com/docs/cli)

```
$ echo "FIREBASE_TOKEN={MY_PERSONAL_TOKEN}" > docker-compose.env
```

### Build the docker image and run the service

Enter into your terminal:

```sh
$ docker-compose -f "docker-compose.yml" up -d --build
```

Open your browser and navigate to http://localhost:4200/ to view the website.

### Interactive usage of the running docker container

Enter into your terminal:

```sh
$ docker run --rm -it boobtech-quiz_frontend:latest /bin/sh
```

This provides a simple bash session, with all the options a shell offers.

## Deployment in production environment

### Deploy an release candidate

The deployment is just easy it can be. Trigger the build and deployment via bitbucket pipelines with an new prefixed \*release-\*\* tag. Further information can be found in the [detailed documentation](doc/README.md).

```sh
$ git tag -a release-X.X.XX -m 'added feature xyz'
```

and push it to the origin:

```sh
$ git push origin --tags
```

### Deploy an hotfix from local environment

Sometimes, and in exceptional cases, it may be necessary to deploy from an existing branch without a existing release candidate. You can do this as bellow:

```sh
$ docker-compose run frontend bash -c "npm run build && firebase deploy --token {YOUR_TOKEN} --project boobtech-29d0b --non-interactive --only hosting"
```

## NOTES

- Initial B2B project with kleine-koerbchen.de
- Functional Question/Quiz mockups:
  - [brajuu](https://docs.google.com/forms/d/1iwOQK8jUfU6Pgj_laulgAewvZ6VSXrWYQkOFRP4k2IM/edit)
  - [kleine-körbchen.de / customer](https://docs.google.com/forms/d/140CbMZ7fZ_gTcdon1e38PDS9ubO-Lwtq094TTdjLvcU/edit)

---

communication channles

slack

> brajuutech.slack.com

email

> hello@brajuu.com
