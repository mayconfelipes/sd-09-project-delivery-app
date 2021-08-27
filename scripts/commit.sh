#!/bin/bash
read -p "Alteração back ou front? " bOrF
read -p "Qual é o fluxo? (customer order, admin, seller products...)? " flux
read -p "Qual mensagem do commit? " msg

upperBorF=${bOrF^^}
upperTheMsg=${msg^^}
upperFlux=${flux^^}
git add .
git commit -m "$theMsg"
theMsg="[MAIN-GROUP-6][${upperBorF}][${upperFlux}][${upperTheMsg}]"

read -p "Foi commitado: > $theMsg <. Enviar ao gitHub? " yOrN

if [[ $yOrN == "y" ]]; then
  git push
  echo "Não esqueça de abrir a PR e marcar no trello"
  else
  echo "Não enviado ao gitHub"
fi
