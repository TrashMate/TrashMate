$(document).ready(function () {
    // $(".right-profile-div").css("top", $(".navbar").height());
    var a;
    var animateButton = function (e) {
        e.preventDefault;
        //reset animation
        e.target.classList.remove("animate");
        e.target.classList.add("animate");
        setTimeout(function () {
            e.target.classList.remove("animate");
        }, 700);
    };

    var bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener("click", animateButton, false);
    }

    nt = 20;
    ng = 15;
    dps = [
        ["resources/imgs/4.jpeg", "Thithi Mukherjee"],
        ["resources/imgs/5.jpeg", "Navpreet Devpuri"],
        ["resources/imgs/0.jpeg", "Navpreet Devpuri"],
        ["resources/imgs/1.jpeg", "Indrashis Mitra"],
        ["resources/imgs/2.jpeg", "Sulugna Mukherjee"],
        ["resources/imgs/3.jpeg", "Yashi Srivastava"],
    ];
    states = ["Punjab", "UP", "West Bengal"];
    lefthtml = $(".left-post-div")[0].outerHTML;
    leftdiv = $(".left-div")[0];
    righthtml = $(".right-post-div")[0].outerHTML;
    rightdiv = $(".right-div")[0];
    centerhtml = $(".top-post-div")[0].outerHTML;
    centerdiv = $(".center-div")[0];
    div = document.createElement("div");
    for (i = 1; i < 89; ++i) {
        temp = lefthtml.replace(
            "giver1",
            "giver" + Math.floor(Math.random() * ng + 1)
        );
        rtemp = Math.floor(Math.random() * dps.length);
        temp = temp.replace("resources/imgs/0.jpeg", dps[rtemp][0]);
        temp = temp.replace("Navpreet Singh Devpuri", dps[rtemp][1]);
        div = document.createElement("div");
        leftdiv.appendChild(div);
        div.outerHTML = temp;

        temp = righthtml.replace(
            "taker1",
            "taker" + Math.floor(Math.random() * nt + 1)
        );

        rtemp = Math.floor(Math.random() * dps.length);
        temp = temp.replace("resources/imgs/0.jpeg", dps[rtemp][0]);
        temp = temp.replace("Navpreet Singh Devpuri", dps[rtemp][1]);
        temp = temp.replace("Punjab", states[Math.floor(Math.random() * 3)]);
        div = document.createElement("div");
        rightdiv.appendChild(div);
        div.outerHTML = temp;

        templ = ["taker", "giver"];
        temp = centerhtml.replace(
            "taker1",
            templ[Math.floor(Math.random() * 1)] +
                Math.floor(Math.random() * nt + 1)
        );
        rtemp = Math.floor(Math.random() * dps.length);
        temp = temp.replace("resources/imgs/0.jpeg", dps[rtemp][0]);
        temp = temp.replace("Navpreet Singh Devpuri", dps[rtemp][1]);
        temp = temp.replace("Punjab", states[Math.floor(Math.random() * 3)]);
        div = document.createElement("div");
        centerdiv.appendChild(div);

        div.outerHTML = temp;
    }

    // n = 11;
    // righthtml = $(".right-post-div")[0].outerHTML;
    // rightdiv = $(".right-div")[0];
    // div = document.createElement("div");
    // for (i = 1; i < 13; ++i) {
    //     temp = righthtml.replace(
    //         "taker1",
    //         "taker" + Math.floor(Math.random() * n + 1)
    //     );
    //     div = document.createElement("div");
    //     rightdiv.appendChild(div);
    //     div.outerHTML = temp;
    //     ++p;
    //     if (p == 7) {
    //         p = 1;
    //     }
    // }

    // n = 6;
    // p = 1;
    // centerhtml = $(".top-post-div")[0].outerHTML;
    // centerdiv = $(".center-div")[0];
    // div = document.createElement("div");
    // for (i = 1; i < 34; ++i) {
    //     temp = centerhtml.replace("taker1", "taker" + p);
    //     div = document.createElement("div");
    //     centerdiv.appendChild(div);
    //     div.outerHTML = temp;
    //     ++p;
    //     if (p == 7) {
    //         p = 1;
    //     }
    // }

    pxlist = [".left-div", ".center-div"];
    for (i = 0; i < pxlist.length; ++i) {
        $(pxlist[i]).paroller();
    }
    inputstr = '<input type="checkbox" id="checkbox" class="checkbox"  />';
    labelstr = `<label for="checkbox"> <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg" > <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)" > <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2" /> <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5" /> <g id="grp7" opacity="0" transform="translate(7 6)" > <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" /> <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" /> </g> <g id="grp6" opacity="0" transform="translate(0 28)" > <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" /> <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" /> </g> <g id="grp3" opacity="0" transform="translate(52 28)" > <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" /> <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" /> </g> <g id="grp2" opacity="0" transform="translate(44 6)" > <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" /> <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" /> </g> <g id="grp5" opacity="0" transform="translate(14 50)" > <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" /> <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" /> </g> <g id="grp4" opacity="0" transform="translate(35 50)" > <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" /> <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" /> </g> <g id="grp1" opacity="0" transform="translate(24)" > <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" /> <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" /> </g> </g> </svg><span>369</span></label>`;
    postimgs = $(".post-img");
    for (i = 0; i < postimgs.length; ++i) {
        inputelem = document.createElement("input");
        lableelem = document.createElement("label");
        postimgs[i].appendChild(inputelem);
        postimgs[i].appendChild(lableelem);
        inputelem.outerHTML = inputstr.replace(
            'id="checkbox"',
            'id="checkbox' + i + '"'
        );
        lableelem.outerHTML = labelstr.replace(
            'for="checkbox"',
            'for="checkbox' + i + '"'
        );
    }
    postimgs = $(".post-img");
    for (i = 0; i < postimgs.length; ++i) {
        inputelem = postimgs[i].querySelector("input");
        inputelem.addEventListener("change", (event) => {
            if (event.target.checked) {
                event.target.nextSibling.querySelector("span").innerText =
                    "370";
            } else {
                event.target.nextSibling.querySelector("span").innerText =
                    "369";
            }
        });
    }
    dps = ["4.jpeg", "5.jpeg", "0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];
    names = [
        "Thithi Mukherjee",
        "Navpreet Devpuri",
        "Navpreet Devpuri",
        "Indrashis Mitra",
        "Sulugna Mukherjee",
        "Yashi Srivastava",
    ];
    profiles = $(".right-profile, .top-profile, .left-profile");
    for (i = 0; i < profiles.length; ++i) {
        src = profiles[i].firstElementChild.src;
        profiles[i].lastElementChild.href =
            "resources/profiles-demo-pages/" +
            names[dps.indexOf(src.slice(src.lastIndexOf("/") + 1))] +
            ".html";
    }
});
