FROM node:18.17.1

COPY . /

RUN apt update && npm i

CMD ["npm", "run", "server"]

# Command zum builden: docker build -t traffic-light:backend .

# Command zum richtig runnen: docker run --name traffic-light-api -p 3000:3000 traffic-light:backend 