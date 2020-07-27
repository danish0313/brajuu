FROM node:alpine

RUN apk add alpine-sdk
RUN apk add bash bash-completion bash-doc
RUN apk add python

RUN mkdir -p /usr/src/app/quiz

# workaround, to handle 'not get uid/gid' on bitbucket pipeline
ENV NPM_CONFIG_UNSAFE_PERM=true

WORKDIR /usr/src/app/quiz

COPY ./app/package*.json ./

RUN npm i -g firebase-tools
RUN npm i
RUN npm audit fix

COPY ./app ./