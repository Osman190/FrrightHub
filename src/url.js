let server = process.env.REACT_APP_SERVER;
let port = process.env.REACT_APP_PORT ? `:${process.env.REACT_APP_PORT}` : ``;
let endPoint = process.env.REACT_APP_ENDPOINT;
module.exports.url = `http://${server}${port}/${endPoint}`;
