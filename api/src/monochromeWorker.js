const gm = require('gm');
const { workerData, parentPort } = require('worker_threads');

gm(workerData.source).monochrome().write(workerData.destination, (error) => {
    if (error === true)
        throw error;

    parentPort.postMessage({ resized: true });
});