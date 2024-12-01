FROM postgres:16.3-alpine
RUN apk update && apk add bash netcat-openbsd
COPY initDB.sql /docker-entrypoint-initdb.d/
