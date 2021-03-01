exports.handler = async function(event, context) {
  let d20Roll = Math.floor(Math.random() * 20 + 1); 
  return {
      statusCode: 200,
      body: JSON.stringify({roll: d20Roll})
  };
}