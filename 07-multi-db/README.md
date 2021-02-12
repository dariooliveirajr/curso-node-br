docker run `
    --name postgres `
    -e POSTGRES_USER=dariooliveirajr `
    -e POSTGRES_PASSWORD=1234 `
    -e POSTGRES_DB=heroes `
    -p 5432:5432 `
    -d `
    postgres

docker ps
docker exec -it postgres /bin/bash

docker run `
    --name adminer `
    -p 80:80 `
    --link postgres:postgres `
    -d `
    adminer `
    