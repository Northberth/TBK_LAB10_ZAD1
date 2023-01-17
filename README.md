dla windowsa:
```
docker swarm init

docker image rm lab10z1
docker image build -t lab10z1 .

docker service create --detach --replicas 1 lab10z1

@echo off
:loop
    timeout /t 5
    docker ps -a
goto loop
```
