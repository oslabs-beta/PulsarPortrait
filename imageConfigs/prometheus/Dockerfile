FROM prom/prometheus

COPY config/prometheus.yml /etc/prometheus/prometheus.yml

ENV PULSAR_BROKER_PORT=8080

CMD [ "--config.file=/etc/prometheus/prometheus.yml" ]

# docker build -t pulsarproto .