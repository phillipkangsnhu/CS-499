const request = require('request');
const apiOptions = {
  server: 'http://appapi:3000'
}

const renderTravelList = (req, res, responseBody) => {
  let message = null;
  let pageTitle = process.env.npm_package_description + ' - Travel';
  if (!(responseBody instanceof Array)) { 
    message  = 'API lookup error';
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = 'No trips exist in our database!';
    }
  }
  res.render('travel',
    {
      title: pageTitle,
      trips: responseBody,
      message
    })
}

const travelList = (req,res) => {
  const path = 'api/trips';
  const requestOptions = {
    url: `${apiOptions.server}/${path}`,
    method: 'GET',
    json: {},
  };
  console.info('>> travelController.travelList calling ' + requestOptions.url)
  request(
    requestOptions,
    (err, {statusCode}, body) => {
      if (err) {
        console.error(err)
      }
      renderTravelList(req,res,body)
    }
  )
}

module.exports = {
  travelList
}