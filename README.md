[![Brajuu](doc/brajuu-mood.png)](https://brajuu.com/)

# BOOBTECH - THE QUIZ

**Perfectly fitting bras for everyone from everywhere. Because we're convinced that #alltitsaregoodtits.**

## Technology

* TODO

## Prerequisites

### Local development

* [Docker desktop](https://www.docker.com/products/docker-desktop) >= 2.1.0.5

#### Recommended IDE (optional)

 * [VS Code](https://code.visualstudio.com/) >= 1.41.1
 * [VS Code - Docker extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) >= 0.9.0

*We do not require an instance of a specific IDE for developers. However, we recommend that less technically skilled project participants install the recommended IDE and IDE extensions. For this environment, we will provide [special guides](/doc/README.md) that cover even trivial changes to the source code, deployment or testing of the application in a local context.*

## Development

TODO 

### Build the docker image and run the service

Enter into your terminal:

```sh
$ docker-compose up -d --build
```

## Deployment

The deployment is just easy it can be. Trigger the build and deployment via bitbucket pipelines with an new prefixed *release-** tag. Further information can be found in the [detailed documentation](doc/README.md).

```sh
$ git tag -a release-X.X.XX -m 'added feature xyz'
```

and push it to the origin:

```sh
$ git push origin --tags
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