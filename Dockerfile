FROM node:18

RUN apt-get update && \ 
    apt-get install -y python3 watchman git curl && \
    npm install -g expo-cli 

WORKDIR /app

COPY . .

RUN yarn install 

EXPOSE 19000

CMD ["npx", "expo", "start", "--tunnel"]