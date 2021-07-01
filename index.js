
/*
const client_id = core.getInput('client_id', {required: true});
const client_secret = core.getInput('client_secret', {required: true});*/
const username = core.getInput('username', {required: false});
/*const password = core.getInput('password', {required: true});
const scope = core.getInput('scope', {required: true}); */

const url = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
var bearer = 'Bearer ' + process.env['ACTIONS_RUNTIME_TOKEN'];

//let data = {'grant_type':"password", 'client_id':client_id, 'username':username, 'password':password, 'scope':scope, 'client_secret':client_secret};
//console.log(data);
const fetch = require("node-fetch");
const core = require('@actions/core');

async function postData(){
    const response = await fetch(url, {
        method: "POST", 
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer
        }
    });
      return response.json();
      
}

postData()
  .then(data => {
    core.setOutput('response_json', data);
  });

//core.setOuput('response_json', username);

