import { ajax } from 'rxjs/ajax';
import {clickAndPrint} from '../../utils/events'

clickAndPrint('#btn1', '#demo1', print => {

    const githubUsers = `http://localhost:8090`;
    const users = ajax(githubUsers);
    const subscribe = users.subscribe(
        res => print(res),
        err => print(err)
    );

    /* output
    {
      "originalEvent":{
        "isTrusted":true
      },
      "xhr":{

      },
      "request":{
        "async":true,
        "crossDomain":true,
        "withCredentials":false,
        "headers":{

        },
        "method":"GET",
        "responseType":"json",
        "timeout":0,
        "url":"https://api.github.com/users?per_page=2"
      },
      "status":200,
      "responseType":"json",
      "response":[
        {
          "login":"mojombo",
          "id":1,
          "node_id":"MDQ6VXNlcjE=",
          "avatar_url":"https://avatars0.githubusercontent.com/u/1?v=4",
          "gravatar_id":"",
          ...
        },
        {
          "login":"defunkt",
          "id":2,
          "node_id":"MDQ6VXNlcjI=",
          "avatar_url":"https://avatars0.githubusercontent.com/u/2?v=4",
          "gravatar_id":"",
          "...
        }
      ]
    }
    */
});

clickAndPrint('#btn2', '#demo2', print => {
    const githubUsers = `http://localhost:8090`;
    const users = ajax.getJSON(githubUsers);
    const subscribe = users.subscribe(
        res => print(res),
        err => print(err)
    );

    /* output
    [
      {
        "login":"mojombo",
        "id":1,
        "node_id":"MDQ6VXNlcjE=",
        "avatar_url":"https://avatars0.githubusercontent.com/u/1?v=4",
        "gravatar_id":"",
        "...
      },
      {
        "login":"defunkt",
        "id":2,
        "node_id":"MDQ6VXNlcjI=",
        "avatar_url":"https://avatars0.githubusercontent.com/u/2?v=4",
        "gravatar_id":"",
        ...
      }
    ]
    */
});

clickAndPrint('#btn3', '#demo3', print => {
    const githubUsers = `https://api.github.com/error`;
    const users = ajax.getJSON(githubUsers);
    const subscribe = users.subscribe(
        res => print(res),
        err => print(err)
    );
    /* output
    Error: ajax error 404
    */
});

clickAndPrint('#btn4', '#demo4', print => {
    const githubUsers = `http://localhost:8090`;
    const users = ajax({
        url: githubUsers,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'custom-header': 'custom-header-value'
        },
        body: {
            param1: 1,
            param2: 2,
        }
    });
    const subscribe = users.subscribe(
        res => print(res),
        err => print(err)
    );
});
