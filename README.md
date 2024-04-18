para crear un ambiente node utilizando docker para tu desarrollo ejecuta:

    docker run --rm -it --name node-docker -v $PWD:/home/app -w /home/app -p 8080:3000  -u node node:latest /bin/bash

Para hacer build de tu proyecto y crear la carpeta dist/

    npm run build

Para ejecutar tus test

    npm run test

para ejecutar tus test y generar la cobertura

    npm run test:coverage

