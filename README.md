# Project Trybers and Dragons
# Contexto
No projeto de backend da Trybe, Trybers and Dragons, criamos um jogo de RPG em TypeScript colocando em prática os conceitos de Programação Orientada a Objeto e SOLID. O "jogo" conta com diversas classes de players além de monstros e possui modo PVP e PVE. Os commits estão no padrão convencional.

## Tecnologias usadas
Back-end:
> Desenvolvido usando: NodeJS e Typescript.
## Instalando Dependências
> Backend
```bash
cd Project-Trybers-and-Dragons
npm install
``` 
## Executando aplicação em docker
* Para rodar o back-end:
  ```
  docker-compose up -d
  ```
  * Para rodar os comandos dentro do container do docker:
    ```
    Abra um terminal e rode: docker exec -it trybers_and_dragons bash
    Instale as dependências dentro do docker: npm install
    ```
