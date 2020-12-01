/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const axios = require("axios");
const COINGECKO = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"

exports.helloWorld = (req, res) => {
  axios.get(COINGECKO).then(response => {
    res.status(200).send(
        JSON.stringify({
          jobRunID: req.body.id,
          data: {result: response.data.ethereum.usd},
          statusCode: 200
        })
      );
  });
};
