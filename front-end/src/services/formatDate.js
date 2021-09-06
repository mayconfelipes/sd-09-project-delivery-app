export default function formatDate(date) {
  const lengthDate = 10;
  const correctDate = date.slice(0, lengthDate);
  const response = correctDate.split('-').reverse().join('/'); // Lógica baseada no site: https://zerobugs.com.br/ver-post/javascript-converter-data-em-formato-padrao-americano-para-brasileiro/
  return response;
}
