#!/bin/bash
echo "Antes de usar, faça o git push -u origin <nome da branch>"
read -p "Alteração back ou front? " bOrF
read -p "Qual é o fluxo? (customer order, admin, seller products...)? " flux
read -p "Qual mensagem do commit? " msg

upperBorF=${bOrF^^}
upperTheMsg=${msg^^}
upperFlux=${flux^^}
git add .
theMsg="[MAIN-GROUP-6][${upperBorF}][${upperFlux}][${upperTheMsg}]"

git commit -m "$theMsg"

read -p "Foi commitado: > $theMsg <. Enviar ao gitHub? (y/n) " yOrN

if [[ $yOrN == "y" ]]; then
  git push
  echo "-------------------------------------------------------------------------------------------"
  echo "Não esqueça de abrir a PR, verificar se está direcionado à main-group-6 e marcar no trello"
  echo "-------------------------------------------------------------------------------------------"
  else
  echo "Não enviado ao gitHub"
fi
