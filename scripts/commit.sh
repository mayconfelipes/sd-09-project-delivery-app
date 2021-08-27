#!/bin/bash
read -p "Qual mensagem do commit? " msg
read -p "Alteração back ou front?" bOrF

theMsg="Update: $bOrF $msg"
git add .
git commit -m "$theMsg"

read -p "Foi commitado: > $theMsg <. Enviar ao gitHub? " yOrN

if [[ $yOrN == "y" ]]; then
  git push
  echo "Não esqueça de abrir a PR e marcar no trello"
  else
  echo "Não enviado ao gitHub"
fi
