# (Pulsar Portrait Logo)

## Built with

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Javascript](https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=javascript)
![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge)
![Sass Badge](https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=for-the-badge)
![node](https://img.shields.io/badge/nodejs-forestgreen?style=for-the-badge&logo=nodedotjs&logoColor=black)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Apache Pulsar Badge](https://img.shields.io/badge/Apache%20Pulsar-188FFF?logo=apachepulsar&logoColor=fff&style=for-the-badge)

## Pulsar Portrait

Description

## Getting Started

### Option 1 - Include in the services dictionary of your compose.yml file

If your network is not pulsar, change it in the networks section.

```yml
prometheus:
  image: pulsarportrait/prometheus:latest
  container_name: prometheus
  networks:
    - pulsar
  ports:
    - '9090:9090'

pulsarportrait:
  image: pulsarportrait/webapp:latest
  container_name: pulsarportrait
  networks:
    - pulsar
  ports:
    - '3333:3333'

grafana:
  image: pulsarportrait/grafana:latest
  container_name: grafana
  networks:
    - pulsar
  ports:
    - '2222:3000'
  depends_on:
    - prometheus
```

### Option 2 - Fork this repo

- Fork this repo
- Start your Pulsar culster
- In this repo,

## How to Contribute

## Authors

- Grant Thomas [GitHub](https://github.com/GrantCT) | [LinkedIn](https://www.linkedin.com/in/grantcthomas/)
- Cyrux Lam [GitHub](https://github.com/cyduckk) | [LinkedIn](https://www.linkedin.com/in/cyrux-lam/)

- Jordan Zolman [Github](https://github.com/PrincePuggo) | [LinkedIn](https://www.linkedin.com/in/jordanzolman)