FROM node:22-alpine

COPY . /app

WORKDIR /app

EXPOSE 3000

ARG ENVIRONMENT=production

RUN rm -rf node_modules
RUN npm cache clean --force
RUN npm install
RUN if [ "$ENVIRONMENT" = "production" ] then npm run build; fi

CMD ["sh", "-c", "if [ \"$ENVIRONMENT\" = \"production\" ]; then npm run start; else npm run dev; fi"]