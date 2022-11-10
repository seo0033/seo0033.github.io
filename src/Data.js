const profile =
{
    name: "장서영(Jang seoyoung)",
    email: "tkrhk9511@gmail.com",
    tel: "010.2981.3734",
    university: "동서대학교 전자공학과 졸업 (2014.03 - 2019.02)",
    academy: "부산 그린컴퓨터아카데미 리액트 활용 프론트엔드 개발자 양성과정 수료 (2022.05 - 2022.11)",
    skill: ["HTML5", "CSS", "JQUERY", "JAVASCRIPT", "REACT"]

}

const portfolio = [
    {
        id: 1, title: "PROJECT01", span: "OCI", brand: "오씨아이", type: "React Web (Main/Subpage)", font: ["Pretendard-Regular"]
        , color: ["#e41d30", "#394d60", "#ffffff"], skill: "React, Scss", src: process.env.PUBLIC_URL + "/img/screenshot_01.png", link: "https://seo0033.github.io/react_oci"
    },
    {
        id: 2, title: "PROJECT02", span: "DOOSI", brand: "두시", type: "React Web(Main/Subpage)", font: ["'Hahmlet',serif"]
        , color: ["#f9f5ea", "#7d9d91", "#004433", "#00140f"], skill: "React, Scss", src: process.env.PUBLIC_URL + "/img/screenshot_02.png", link: "https://seo0033.github.io/react_doosi/"
    },
    {
        id: 3, title: "PROJECT03", span: "ASEOP", brand: "이솝", type: "Responsive Web", font: ["'Hahmlet', serif"]
        , color: ["#fefef2", "#77744f", " #f1f1f1", "#333333"], skill: "HTML, CSS, jQuery", src: process.env.PUBLIC_URL + "/img/screenshot_03.png", link: "https://seo0033.github.io/pf_project/01_aseop/"
    },
    {
        id: 4, title: "PROJECT04", span: "louispoulsen", brand: "루이스폴센", type: "Responsive Web", font: ["Pretendard-Regular", "SBAggroB"]
        , color: ["#ffffff", "#999999", "#222222"], skill: "HTML, CSS, jQuery", src: process.env.PUBLIC_URL + "/img/screenshot_04.png", link: "https://seo0033.github.io/pf_project/02_louispoulsen/"
    },
    {
        id: 5, title: "PROJECT05", span: "Asan Medical Center", brand: "서울아산병원", type: "Responsive Web", font: ["Noto Sans KR"]
        , color: ["#00696d", "#f29819", "#333333", "#f9f9f9"], skill: "HTML, CSS, jQuery", src: process.env.PUBLIC_URL + "/img/screenshot_05.png", link: "https://seo0033.github.io/pf_project/03_AMC/"
    },
    {
        id: 6, title: "PROJECT06", span: "COOKIT", brand: "쿡킷", type: "Responsive Web", font: ["Noto Sans KR"]
        , color: ["#ffffff", "#dddddd", "#ff8601", "#532900"], skill: "HTML, CSS, JavaScript", src: process.env.PUBLIC_URL + "/img/screenshot_06.png", link: "https://seo0033.github.io/pf_project/04_cookit/"
    },

]


export { profile, portfolio }