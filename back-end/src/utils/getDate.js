function getFullDate() {
    const data = new Date();
    const day = String(data.getDate()).padStart(2, 0);
    const month = String(data.getMonth() + 1).padStart(2, 0);
    const fullYear = String(data.getFullYear());
    const hour = String(data.getHours()).padStart(2, 0);
    const minute = String(data.getMinutes()).padStart(2, 0);
    const Seconds = String(data.getSeconds()).padStart(2, 0);
    return `${fullYear}-${month}-${day} ${hour}:${minute}:${Seconds}`;
    // codigo baseado no link https://github.dev/tryber/sd-09-project-webchat/pull/47/files
}

module.exports = getFullDate;
