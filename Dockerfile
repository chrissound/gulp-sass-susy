FROM       node:0.12.2-slim
MAINTAINER Charlie Revett <charlierevett@gmail.com>

COPY . /app
WORKDIR /app

RUN npm install

ENTRYPOINT ["/app/node_modules/.bin/gulp"]

CMD ["sass"]
