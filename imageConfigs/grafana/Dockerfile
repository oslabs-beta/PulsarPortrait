FROM grafana/grafana

COPY ./provisioning/dashboards /etc/grafana/provisioning/dashboards
COPY ./provisioning/datasources /etc/grafana/provisioning/datasources
COPY ./grafana.ini /etc/grafana/grafana.ini

ENV GF_PATHS_CONFIG='/etc/grafana/grafana.ini'
ENV GF_AUTH_ANONYMOUS_ENABLED='true'
