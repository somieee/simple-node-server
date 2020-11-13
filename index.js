// * Node.js event에 따른 callback함수를 잘 짜주면 됨

const http = require('http'); // ES5
//import http from 'http'; // ES6

//server instance 생성
const server = http.createServer(
    //무슨 일 있으면 이 함수를 수행하라: callback 함수
    // req(uest) 에 따라 res(ponse) 를 정해주는 거임.
    (req, res) => {
        res.statusCode = 200;
        // 헤더: http meta data들고있음
        // 보내는 데이터 타입을 텍스트/플레인이라고 설정해줌.
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n', 'utf-8'); // http 응답 종료 함수
    }
);

server.listen(8000);
