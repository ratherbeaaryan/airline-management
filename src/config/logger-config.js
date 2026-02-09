const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customformat = printf(({ level, label, message, timestamp }) => {
    return `${timestamp} [${label}] ${level} : ${message}`;
});

const logger = createLogger({
    level: 'info',
    format: combine(
        label({ label: 'server' }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        customformat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log' })
    ]
});

module.exports = logger;
