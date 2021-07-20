import express from "express";

const PORT = 4000;

const app = express();

const cLog = (page) => {
    console.log(`누군가 ${page}에 접속을 시도합니다.`);
}

const URL = (page) => {
    return `http://localhost:${PORT}${page}`
}

const getHome = (req, res) => {
    cLog("홈");
    return res.send(`<a href="${URL("")}"><h1>홈</h1></a><a href="${URL("/about")}">정보</a></br><a href="${URL("/contact")}">연락처</a></br><a href="${URL("/login")}">로그인</a>`);
};
const getAbout = (req, res) => {
    cLog("정보 탭");
    return res.send(`<a href="${URL("")}"><h1>홈</h1></a><span>노마드 유튜브 클론 챌린지 과제입니다.</span>`);
};
const getContact = (req, res) => {
    cLog("연락처 탭");
    return res.send(`<a href="${URL("")}"><h1>홈</h1></a><span>연락처가 없습니다.</span>`);
};
const getLogin = (req, res) => {
    cLog("로그인 탭");
    return res.send(`<a href="${URL("")}"><h1>홈</h1></a><form><div><label for="id"><strong>아이디*</strong></label><input id="id" required placeholder="아이디" type="text"/></div><div><label for="pw"><strong>비밀번호*</strong></label><input id="pw" required placeholder="비밀번호" minlength="10" type="password"/></div><div><input type="submit" value="완료"/></div></form>`);
};

app.get("/", getHome);
app.get("/about", getAbout);
app.get("/contact", getContact);
app.get("/login", getLogin);

const listening = () =>
    console.log(`포트 ${URL("")}에서 서버 수신 중...`);

app.listen(PORT, listening);