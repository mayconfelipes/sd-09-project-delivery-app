#!/bin/bash
read -p "nome da branch? " branchName
read -p "Alteração back ou front? " bOrF
read -p "Qual é o fluxo? (customer order, admin, seller products...)? " flux
read -p "Qual mensagem do commit? " msg

upperBorF=${bOrF^^}
upperTheMsg=${msg^^}
upperFlux=${flux^^}
git add .
theMsg="[MAIN-GROUP-6][${upperBorF}][${upperFlux}][${upperTheMsg}]"

git commit -m "$theMsg"

read -p "Foi commitado: > $theMsg <. Enviar ao gitHub? " yOrN

if [[ $yOrN == "y" ]]; then
  git push -u origin branchName
  echo "Não esqueça de abrir a PR, direcionar à main-group-6 e marcar no trello"
  else
  echo "Não enviado ao gitHub"
fi
