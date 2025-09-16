 (function() {
     const wrapper = document.getElementById('myDropdown');
     if (!wrapper) return;
     const btn = wrapper.querySelector('.dropdown-button');
     const menu = wrapper.querySelector('.dropdown-content');

     // Toggle on click (useful for touch devices)
     btn.addEventListener('click', (e) => {
         e.stopPropagation();
         const open = wrapper.classList.toggle('open');
         btn.setAttribute('aria-expanded', open ? "true" : "false");
     });



     // Keyboard: Enter/Space opens; Esc closes; Arrow keys optional
     btn.addEventListener('keydown', (e) => {
         if (e.key === 'Escape') {
             wrapper.classList.remove('open');
             btn.setAttribute('aria-expanded', "false");
             btn.focus();
         } else if (e.key === 'Enter' || e.key === ' ') {
             e.preventDefault();
             const open = wrapper.classList.toggle('open');
             btn.setAttribute('aria-expanded', open ? "true" : "false");
             if (open) {
                 // focus first item
                 const first = menu.querySelector('[role="menuitem"]');
                 if (first) first.focus();
             }
         }
     });

     // Make menu items focusable by keyboard
     menu.querySelectorAll('[role="menuitem"]').forEach(a => {
         a.setAttribute('tabindex', '-1');
     });
 })();
 //scrolling buttons

 const track = document.getElementById("buttonTrack");
 const leftBtn = document.getElementById("leftBtn");
 const rightBtn = document.getElementById("rightBtn");

 // Scroll step size (based on container width)
 const scrollStep = () => track.clientWidth * 0.6;

 leftBtn.addEventListener("click", () => {
     track.scrollBy({ left: -scrollStep(), behavior: "smooth" });
 });

 rightBtn.addEventListener("click", () => {
     track.scrollBy({ left: scrollStep(), behavior: "smooth" });
 });

 // Mouse wheel horizontal scrolling
 track.addEventListener("wheel", (e) => {
     if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { // only vertical wheel
         e.preventDefault();
         track.scrollBy({ left: e.deltaY, behavior: "smooth" });
     }
 }, { passive: false });

 //scroll button

 function openbutton(evt, btnname) {
     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
     document.getElementById(btnname).style.display = "block";
     evt.currentTarget.className += " active";
 }

 // ✅ Open first tab automatically on page load
 document.addEventListener("DOMContentLoaded", () => {
     document.querySelector(".tablinks").click();
 });

 // Mobile Navigation Functionality
 (function() {
     const hamburgerToggle = document.getElementById("hamburgerToggle");
     const mobileNavOverlay = document.getElementById("mobileNavOverlay");
     const closeMobileNav = document.getElementById("closeMobileNav");

     if (!hamburgerToggle || !mobileNavOverlay) return;

     function openMobileNav() {
         hamburgerToggle.classList.add("active");
         mobileNavOverlay.classList.add("active");
         document.body.style.overflow = "hidden";
     }

     function closeMobileNavigation() {
         hamburgerToggle.classList.remove("active");
         mobileNavOverlay.classList.remove("active");
         document.body.style.overflow = "";
     }

     hamburgerToggle.addEventListener("click", openMobileNav);
     closeMobileNav.addEventListener("click", closeMobileNavigation);

     // Close on overlay click
     mobileNavOverlay.addEventListener("click", function(e) {
         if (e.target === mobileNavOverlay) {
             closeMobileNavigation();
         }
     });

     // Close on escape key
     document.addEventListener("keydown", function(e) {
         if (e.key === "Escape" && mobileNavOverlay.classList.contains("active")) {
             closeMobileNavigation();
         }
     });
 })();


 (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
     [5696], {
         79916: function(e, r, t) {
             "use strict";
             var i = t(85893),
                 n = t(25675),
                 a = t.n(n),
                 s = t(26751),
                 o = t.n(s),
                 c = t(89175),
                 l = t(4633),
                 d = t(39496),
                 p = t(51985);
             r.Z = function() {
                 return (0, i.jsx)("section", {
                     className: "section bgGray",
                     children: (0, i.jsxs)("div", {
                         className: "container",
                         children: [(0, i.jsx)("h2", {
                             className: "heading font26 text222 f500 fontSM20 mb46",
                             children: " Media Coverage"
                         }), (0, i.jsxs)("div", {
                             className: "posR",
                             children: [(0, i.jsx)("div", {
                                 className: o().mediaCoverage,
                                 id: "mediaCoverage",
                                 children: d && d.map((e, r) => (0, i.jsxs)("div", {
                                     className: "".concat(o().tile, " bgWhite"),
                                     children: [(0, i.jsx)("figure", {
                                         className: o().tileFig,
                                         children: (0, i.jsx)(a(), {
                                             src: "/assets/images/".concat(e.image, ".png"),
                                             alt: "media logo",
                                             width: 180,
                                             height: 30,
                                             loader: p.ZX,
                                             className: "imgFluid"
                                         })
                                     }), (0, i.jsx)("span", {
                                         className: "".concat(o().desc, " f600 text222 mb16"),
                                         children: e.subTxt
                                     }), (0, i.jsxs)(l.OL, {
                                         className: o().viewFullArticle,
                                         href: "".concat(e.link),
                                         target: "_blank",
                                         rel: "nofollow",
                                         children: [(0, i.jsx)("span", {
                                             children: "view full article"
                                         }), (0, i.jsx)("em", {
                                             children: (0, i.jsx)("svg", {
                                                 width: "12",
                                                 height: "12",
                                                 viewBox: "0 0 12 12",
                                                 fill: "none",
                                                 xmlns: "http://www.w3.org/2000/svg",
                                                 children: (0, i.jsx)("path", {
                                                     d: "m6 1 5 5-5 5M1 6h9.286H1z",
                                                     stroke: "#EB5976",
                                                     strokeLinecap: "round",
                                                     strokeLinejoin: "round"
                                                 })
                                             })
                                         })]
                                     })]
                                 }, r))
                             }), d && d.length > 3 && (0, i.jsx)(c.Z, {
                                 slideId: "mediaCoverage",
                                 slideTileWebWidth: 290,
                                 slideTileMobWidth: 290
                             })]
                         })]
                     })
                 })
             }
         },
         2121: function(e, r, t) {
             "use strict";
             t.r(r), t.d(r, {
                 OurBrandPartners: function() {
                     return p
                 }
             });
             var i = t(85893),
                 n = t(25675),
                 a = t.n(n),
                 s = t(88764),
                 o = t.n(s),
                 c = JSON.parse('[{"countryCode":"in","name":"Anchor","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Anchor.png","relativePath":"/interior/static/brandpartners/Anchor.png","service":"Interior & Construction"},{"countryCode":"in","name":"Asian Paints","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Asian-Paints.png","relativePath":"/interior/static/brandpartners/Asian-Paints.png","service":"Interior & Construction"},{"countryCode":"in","name":"Berger Paint","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Berger-Paint.png","relativePath":"/interior/static/brandpartners/Berger-Paint.png","service":"Interior & Construction"},{"countryCode":"in","name":"Ebco","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Ebco.png","relativePath":"/interior/static/brandpartners/Ebco.png","service":"Interior"},{"countryCode":"in","name":"Elica","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Elica.png","relativePath":"/interior/static/brandpartners/Elica.png","service":"Interior"},{"countryCode":"in","name":"Hettich","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Hettich.png","relativePath":"/interior/static/brandpartners/Hettich.png","service":"Interior & Construction"},{"countryCode":"in","name":"eGlu","logo":"https://img.interiorcompany.com/interior/static/brandpartners/eGlu.png","relativePath":"/interior/static/brandpartners/eGlu.png","service":"Interior"},{"countryCode":"in","name":"Excel","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Excel.png","relativePath":"/interior/static/brandpartners/Excel.png","service":"Interior"},{"countryCode":"in","name":"Faber","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Faber.png","relativePath":"/interior/static/brandpartners/Faber.png","service":"Interior & Construction"},{"countryCode":"in","name":"Finolex","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Finolex.png","relativePath":"/interior/static/brandpartners/Finolex.png","service":"Interior & Construction"},{"countryCode":"in","name":"Hindware","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Hindware.png","relativePath":"/interior/static/brandpartners/Hindware.png","service":"Interior"},{"countryCode":"in","name":"Kaff","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Kaff.png","relativePath":"/interior/static/brandpartners/Kaff.png","service":"Interior"},{"countryCode":"in","name":"Legrand","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Legrand.png","relativePath":"/interior/static/brandpartners/Legrand.png","service":"Construction"},{"countryCode":"in","name":"Marshalls","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Marshalls.png","relativePath":"/interior/static/brandpartners/Marshalls.png","service":"Interior"},{"countryCode":"in","name":"Roca","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Roca.png","relativePath":"/interior/static/brandpartners/Roca.png","service":"Interior & Construction"},{"countryCode":"in","name":"Spacewood","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Spacewood.png","relativePath":"/interior/static/brandpartners/Spacewood.png","service":"Interior"},{"countryCode":"in","name":"TOTO","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Toto.png","relativePath":"/interior/static/brandpartners/Toto.png","service":"Construction"},{"countryCode":"in","name":"Welspun","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Welspun.png","relativePath":"/interior/static/brandpartners/Welspun.png","service":"Interior & Construction"},{"countryCode":"in","name":"Kohler","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Kohler.png","relativePath":"/interior/static/brandpartners/Kohler.png","service":"Interior & Construction"},{"countryCode":"ae","name":"Danube","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Danube.png","relativePath":"/interior/static/brandpartners/Danube.png","service":"Interior"},{"countryCode":"ae","name":"Home Box","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Home-Box.png","relativePath":"/interior/static/brandpartners/Home-Box.png","service":"Interior"},{"countryCode":"ae","name":"Home Center","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Home-Center.png","relativePath":"/interior/static/brandpartners/Home-Center.png","service":"Interior"},{"countryCode":"ae","name":"Homes rus","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Homes-r-us.png","relativePath":"/interior/static/brandpartners/Homes-r-us.png","service":"Interior"},{"countryCode":"ae","name":"Pan","logo":"https://img.interiorcompany.com/interior/static/brandpartners/Pan.png","relativePath":"/interior/static/brandpartners/Pan.png","service":"Interior"},{"countryCode":"ae","name":"Blooming Dales","logo":"https://img.interiorcompany.com/interior/static/brandpartners/bloomingdales.webp","relativePath":"/interior/static/brandpartners/bloomingdales.webp","service":"Interior"},{"countryCode":"ae","name":"Gautier","logo":"https://img.interiorcompany.com/interior/static/brandpartners/gautier.webp","relativePath":"/interior/static/brandpartners/gautier.webp","service":"Interior"},{"countryCode":"ae","name":"Home Soul","logo":"https://img.interiorcompany.com/interior/static/brandpartners/home-soul.webp","relativePath":"/interior/static/brandpartners/home-soul.webp","service":"Interior"},{"countryCode":"ae","name":"Indigo Living","logo":"https://img.interiorcompany.com/interior/static/brandpartners/indigo-living.webp","relativePath":"/interior/static/brandpartners/indigo-living.webp","service":"Interior"},{"countryCode":"ae","name":"Modomoro","logo":"https://img.interiorcompany.com/interior/static/brandpartners/modomoro.webp","relativePath":"/interior/static/brandpartners/modomoro.webp","service":"Interior"},{"countryCode":"ae","name":"OC Homes","logo":"https://img.interiorcompany.com/interior/static/brandpartners/oc-homes.webp","relativePath":"/interior/static/brandpartners/oc-homes.webp","service":"Interior"},{"countryCode":"ae","name":"Royal Furniture","logo":"https://img.interiorcompany.com/interior/static/brandpartners/royal-furniture.webp","relativePath":"/interior/static/brandpartners/royal-furniture.webp","service":"Interior"},{"countryCode":"ae","name":"A to Z Furniture","logo":"https://img.interiorcompany.com/interior/static/brandpartners/a-to-z-furniture.png","relativePath":"/interior/static/brandpartners/a-to-z-furniture.png","service":"Interior"},{"countryCode":"ae","name":"Al Huzaifa Furniture","logo":"https://img.interiorcompany.com/interior/static/brandpartners/al-huzaifa-furniture.png","relativePath":"/interior/static/brandpartners/al-huzaifa-furniture.png","service":"Interior"}]'),
                 l = t(51985),
                 d = t(70832);

             function p(e) {
                 var r, t;
                 let {
                     props: {
                         isDubaiPage: n,
                         pageURL: s
                     }
                 } = (0, d.bN)(), p = (null == c ? void 0 : c.filter(r => r.countryCode == e.countryCode)) || [], h = [...p, ...p];
                 return (0, i.jsx)("section", {
                     className: "section ourBrand",
                     children: (0, i.jsxs)("div", {
                         className: "".concat(s.includes("/lp/") ? "container1350" : n ? "containerFull" : "container"),
                         children: [(0, i.jsx)("h2", {
                             className: "heading textCenter font26 text222 f500 mb12 fontSM20",
                             children: (null == e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : r.headingText) || "Our Brand Partners"
                         }), (0, i.jsx)("p", {
                             className: "subHeading textCenter mb46 font16 fontSM14",
                             children: (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.subHeadingText) || "An elite list of partners who strengthen our brand promise"
                         }), (0, i.jsx)("div", {
                             className: o().brandList,
                             children: (0, i.jsx)("div", {
                                 className: o().marqueeWrapper,
                                 children: (0, i.jsx)("div", {
                                     className: o().marqueeGroup,
                                     children: h.map((e, r) => (0, i.jsx)("div", {
                                         className: o().sliderImage,
                                         children: (0, i.jsx)(a(), {
                                             src: e.relativePath,
                                             width: 130,
                                             height: 40,
                                             loader: l.ZP,
                                             alt: e.name + " - Interior Company Partner",
                                             title: e.name,
                                             className: "imgFluid"
                                         })
                                     }, r))
                                 })
                             })
                         })]
                     })
                 })
             }
         },
         15696: function(e, r, t) {
             "use strict";
             t.d(r, {
                 n7: function() {
                     return p
                 },
                 eO: function() {
                     return f.OurBrandPartners
                 },
                 By: function() {
                     return u
                 },
                 qB: function() {
                     return y
                 }
             }), t(29340);
             var i = t(85893),
                 n = t(67294),
                 a = t(25675),
                 s = t.n(a),
                 o = t(86542),
                 c = t.n(o),
                 l = t(70832);
             let d = [1, 2, 3, 4, 5];

             function p() {
                 let {
                     props: {
                         isMobileView: e
                     }
                 } = (0, l.bN)(), [r, t] = (0, n.useState)(0);
                 return n.useEffect(() => {
                     setTimeout(() => t(e => e === d.length - 1 ? 0 : e + 1), 2500)
                 }, [r]), (0, i.jsx)("section", {
                     className: "".concat(c().howItWorkMain, " section bgGray"),
                     children: (0, i.jsx)("div", {
                         className: "container",
                         children: (0, i.jsxs)("div", {
                             className: c().workBx,
                             children: [(0, i.jsx)("div", {
                                 className: c().workImg,
                                 children: e ? (0, i.jsx)("figure", {
                                     className: c().stepImg,
                                     children: (0, i.jsx)(s(), {
                                         src: "/assets/images/we-work-mob.webp",
                                         height: 218,
                                         width: 328,
                                         alt: "meet us",
                                         className: "imgFluid"
                                     })
                                 }) : (0, i.jsx)("figure", {
                                     className: c().stepImg,
                                     children: (0, i.jsx)(s(), {
                                         src: "/assets/images/we-work-web.webp",
                                         height: 316,
                                         width: 474,
                                         alt: "meet us",
                                         className: "imgFluid"
                                     })
                                 })
                             }), (0, i.jsxs)("div", {
                                 className: c().workDetails,
                                 children: [(0, i.jsx)("h2", {
                                     className: "heading textCenter font26 text222 f500 mb12 fontSM20",
                                     children: "The Way We Work"
                                 }), (0, i.jsx)("p", {
                                     className: "subHeading textCenter mb24 font16 fontSM14",
                                     children: "Five steps is all it takes to elevate your style of living."
                                 }), (0, i.jsx)("div", {
                                     className: "mb46",
                                     children: (0, i.jsxs)("ul", {
                                         className: c().stepsBx,
                                         children: [(0, i.jsxs)("li", {
                                             className: 0 === r ? c().active : "",
                                             children: [(0, i.jsx)("span", {
                                                 children: "1"
                                             }), (0, i.jsx)("label", {
                                                 children: "Meet Us"
                                             })]
                                         }), (0, i.jsxs)("li", {
                                             className: 1 === r ? c().active : "",
                                             children: [(0, i.jsx)("span", {
                                                 children: "2"
                                             }), (0, i.jsx)("label", {
                                                 children: "Scope of Work"
                                             })]
                                         }), (0, i.jsxs)("li", {
                                             className: 2 === r ? c().active : "",
                                             children: [(0, i.jsx)("span", {
                                                 children: "3"
                                             }), (0, i.jsx)("label", {
                                                 children: "Seal the Deal"
                                             })]
                                         }), (0, i.jsxs)("li", {
                                             className: 3 === r ? c().active : "",
                                             children: [(0, i.jsx)("span", {
                                                 children: "4"
                                             }), (0, i.jsx)("label", {
                                                 children: "Execution"
                                             })]
                                         }), (0, i.jsxs)("li", {
                                             className: 4 === r ? c().active : "",
                                             children: [(0, i.jsx)("span", {
                                                 children: "5"
                                             }), (0, i.jsx)("label", {
                                                 children: "Stamp of Approval"
                                             })]
                                         })]
                                     })
                                 }), (0, i.jsxs)("ul", {
                                     className: c().context,
                                     children: [(0, i.jsxs)("li", {
                                         className: 0 === r ? c().active : "",
                                         children: [(0, i.jsx)("label", {
                                             children: "Meet Us"
                                         }), (0, i.jsx)("span", {
                                             children: "Let us know more about each other. We can meet over a cup of coffee or even online too. We'd like to know what you're looking for"
                                         })]
                                     }), (0, i.jsxs)("li", {
                                         className: 1 === r ? c().active : "",
                                         children: [(0, i.jsx)("label", {
                                             children: "Scope of Work"
                                         }), (0, i.jsx)("span", {
                                             children: "Now when you have made up your mind, it is the time to finalise the scope of work and talk about the essentials – materials and finishes, etc."
                                         })]
                                     }), (0, i.jsxs)("li", {
                                         className: 2 === r ? c().active : "",
                                         children: [(0, i.jsx)("label", {
                                             children: "Seal The Deal"
                                         }), (0, i.jsx)("span", {
                                             children: "Once finalised, you can seal the deal by paying a signing amount of 10%. Pay 50% of the order value to kickstart the process and the balance before handover."
                                         })]
                                     }), (0, i.jsxs)("li", {
                                         className: 3 === r ? c().active : "",
                                         children: [(0, i.jsx)("label", {
                                             children: "Execution"
                                         }), (0, i.jsx)("span", {
                                             children: "While we immediately begin work on your different orders, our quality control team keeps a strict check. We also keep you updated about the execution process."
                                         })]
                                     }), (0, i.jsxs)("li", {
                                         className: 4 === r ? c().active : "",
                                         children: [(0, i.jsx)("label", {
                                             children: "Stamp of Approval"
                                         }), (0, i.jsx)("span", {
                                             children: "Congratulations! We are done. You can now move into your dream home."
                                         })]
                                     })]
                                 })]
                             })]
                         })
                     })
                 })
             }
             var h = t(42611),
                 m = t.n(h);

             function u() {
                 return (0, i.jsx)("section", {
                     className: "section bgGray whatSets",
                     children: (0, i.jsxs)("div", {
                         className: "container",
                         children: [(0, i.jsx)("h2", {
                             className: "heading textCenter font26 text222 f500 mb12 fontSM20",
                             children: "What Sets Us Apart?"
                         }), (0, i.jsx)("p", {
                             className: "subHeading textCenter mb46 font16 fontSM14",
                             children: "Sublime Designs. Prompt Services. Best Results"
                         }), (0, i.jsxs)("div", {
                             className: m().setsPartList,
                             children: [(0, i.jsxs)("ul", {
                                 className: m().whatSetsList,
                                 children: [(0, i.jsx)("li", {
                                     children: "Solutions"
                                 }), (0, i.jsx)("li", {
                                     children: "Dedicated Team"
                                 }), (0, i.jsx)("li", {
                                     children: "Vr Experience"
                                 }), (0, i.jsx)("li", {
                                     children: "Quality Assurance"
                                 }), (0, i.jsx)("li", {
                                     children: "Price"
                                 }), (0, i.jsx)("li", {
                                     children: "Hidden Charges"
                                 }), (0, i.jsx)("li", {
                                     children: "Support"
                                 })]
                             }), (0, i.jsxs)("div", {
                                 className: m().experinceList,
                                 children: [(0, i.jsx)("h3", {
                                     className: "font20 textpink fbold mb16 fontSM12 textSMcenter",
                                     children: "Interior Company Experience"
                                 }), (0, i.jsxs)("ul", {
                                     className: m().setsList,
                                     children: [(0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "All Under One Roof"
                                         }), (0, i.jsx)("p", {
                                             className: "textSMcenter",
                                             children: "A one-stop destination to resolve all your queries"
                                         })]
                                     }), (0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "Dedicated Team of Designers"
                                         }), " ", (0, i.jsx)("p", {
                                             className: "textSMcenter",
                                             children: "Experts who chalk out innovative solutions"
                                         })]
                                     }), (0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "3D Visual Walkthroughs"
                                         }), (0, i.jsx)("p", {
                                             className: "textSMcenter",
                                             children: "Home Interior Designs in tandem with interactive 3D Visual Walkthroughs"
                                         }), " "]
                                     }), (0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "Periodic Inspections"
                                         }), (0, i.jsx)("p", {
                                             className: "textSMcenter",
                                             children: "Well-timed quality reviews at various stages of the project"
                                         }), " "]
                                     }), (0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "No False Claims"
                                         }), (0, i.jsx)("p", {
                                             className: "textSMcenter",
                                             children: "Lowest price guaranteed!"
                                         })]
                                     }), (0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "You Get What You See"
                                         }), (0, i.jsx)("p", {
                                             className: "textSMcenter",
                                             children: "No Hidden Charges"
                                         })]
                                     }), (0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "We’re Right by Your Side"
                                         }), (0, i.jsx)("p", {
                                             className: "textSMcenter",
                                             children: "Dedicated After Sales Support"
                                         })]
                                     })]
                                 })]
                             }), (0, i.jsxs)("div", {
                                 className: m().typicalExperience,
                                 children: [(0, i.jsx)("h3", {
                                     className: "fbold font20 mb16 fontSM12 textSMcenter ".concat(m().subHeading),
                                     children: "Typical Experience"
                                 }), (0, i.jsxs)("ul", {
                                     className: m().setsList,
                                     children: [(0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "Multiple Contractors & Market Trips"
                                         }), (0, i.jsx)("p", {
                                             children: "Coordination with several intermediaries"
                                         })]
                                     }), (0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "In-eﬃcient Support"
                                         }), " ", (0, i.jsx)("p", {
                                             children: "No team to provide feasible results"
                                         })]
                                     }), (0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "No VR Walkthroughs"
                                         }), (0, i.jsx)("p", {
                                             children: "Absence of Advanced Technology support"
                                         }), " "]
                                     }), (0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "No Periodic Quality Checks"
                                         }), (0, i.jsx)("p", {
                                             children: "Usage of low-grade material to save cost"
                                         }), " "]
                                     }), (0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "Over promising & Under Delivery"
                                         }), (0, i.jsx)("p", {
                                             children: "No price match guarantee"
                                         })]
                                     }), (0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "Overhead Charges"
                                         }), (0, i.jsx)("p", {
                                             children: "Unidentified costs lead to higher prices"
                                         })]
                                     }), (0, i.jsxs)("li", {
                                         children: [(0, i.jsx)("span", {
                                             children: "No After-Sales Support"
                                         }), (0, i.jsx)("p", {
                                             children: "Customer service ends after the completion of the project"
                                         })]
                                     })]
                                 })]
                             })]
                         })]
                     })
                 })
             }
             var g = t(4633),
                 x = t(17347),
                 v = t.n(x),
                 b = t(89175),
                 j = t(51985);

             function y(e) {
                 let {
                     testimoninals: r
                 } = e;
                 return r && 0 != r.length ? (0, i.jsx)(i.Fragment, {
                     children: (0, i.jsx)("section", {
                         className: "section whyUs bgGray",
                         children: (0, i.jsxs)("div", {
                             className: "container",
                             children: [(0, i.jsx)("h2", {
                                 className: "heading textCenter font26 text222 f500 mb12 fontSM20",
                                 children: " Real Stories, Bona Fide Impact"
                             }), (0, i.jsx)("p", {
                                 className: "subHeading textCenter mb46 font16 fontSM14",
                                 children: "We deliver what we promise. Here’s what our clients have to say…"
                             }), (0, i.jsxs)("div", {
                                 className: v().clientVideo,
                                 children: [(0, i.jsx)("div", {
                                     id: "realStories",
                                     className: v().realStories,
                                     children: r && r.filter(e => "" != e.video_url).map((e, r) => (0, i.jsx)("div", {
                                         className: "".concat(v().VideoBox, " bgWhite"),
                                         children: (0, i.jsxs)(g.OL, {
                                             href: e.video_url,
                                             target: "_blank",
                                             rel: "noreferrer",
                                             children: [(0, i.jsxs)("figure", {
                                                 children: [(0, i.jsx)(s(), {
                                                     width: 374,
                                                     height: 200,
                                                     src: e.post_relative,
                                                     alt: e.clinet_name,
                                                     loader: j.kH
                                                 }), (0, i.jsx)("em", {
                                                     className: v().youtubelogo,
                                                     children: (0, i.jsx)(s(), {
                                                         alt: "".concat(e.clinet_name, " - Client Feedback on Interior Company"),
                                                         src: "/assets/images/youTube.svg",
                                                         loader: j.ZX,
                                                         height: 40,
                                                         width: 57
                                                     })
                                                 })]
                                             }), (0, i.jsx)("p", {
                                                 className: v().videoText,
                                                 children: e.post_content
                                             }), (0, i.jsxs)("p", {
                                                 className: "".concat(v().videoName, " text000"),
                                                 children: [e.clinet_name, (0, i.jsx)("span", {
                                                     children: e.inco_city || " "
                                                 })]
                                             })]
                                         }, r)
                                     }, "div_" + r))
                                 }), r.length > 3 && (0, i.jsx)(b.Z, {
                                     slideId: "realStories",
                                     slideTileWebWidth: 385,
                                     slideTileMobWidth: 345
                                 })]
                             })]
                         })
                     })
                 }) : null
             }
             var f = t(2121);
             t(79916)
         },
         86542: function(e) {
             e.exports = {
                 howItWorkMain: "HowItWorks_howItWorkMain__O6UJ5",
                 workBx: "HowItWorks_workBx___6HvV",
                 workImg: "HowItWorks_workImg__fGxlp",
                 workDetails: "HowItWorks_workDetails__pKwRC",
                 stepsBx: "HowItWorks_stepsBx__HY4oU",
                 active: "HowItWorks_active__4JMUw",
                 context: "HowItWorks_context__T0cn9"
             }
         },
         26751: function(e) {
             e.exports = {
                 mediaCoverage: "MediaCoverage_mediaCoverage__gy_1_",
                 tile: "MediaCoverage_tile__zQ_Of",
                 tileFig: "MediaCoverage_tileFig__vX8sI",
                 desc: "MediaCoverage_desc__aCS_v",
                 viewFullArticle: "MediaCoverage_viewFullArticle__sGu4g"
             }
         },
         88764: function(e) {
             e.exports = {
                 brandList: "OurBrandPartners_brandList__xKZlN",
                 sliderImage: "OurBrandPartners_sliderImage__ZPMC1",
                 marqueeWrapper: "OurBrandPartners_marqueeWrapper__hXonl",
                 marqueeGroup: "OurBrandPartners_marqueeGroup__qv2Ly",
                 scroll: "OurBrandPartners_scroll__e5ftN"
             }
         },
         42611: function(e) {
             e.exports = {
                 setsPartList: "WhatSetsUsApart_setsPartList__nPqCq",
                 experinceList: "WhatSetsUsApart_experinceList__ZNqta",
                 setsList: "WhatSetsUsApart_setsList__Xt5h5",
                 typicalExperience: "WhatSetsUsApart_typicalExperience__6467B",
                 whatSetsList: "WhatSetsUsApart_whatSetsList__3JQ2A",
                 subHeading: "WhatSetsUsApart_subHeading__k79Z_"
             }
         },
         17347: function(e) {
             e.exports = {
                 clientVideo: "WhyClientsChooseUS_clientVideo__qMrA2",
                 VideoBox: "WhyClientsChooseUS_VideoBox__XicZE",
                 youtubelogo: "WhyClientsChooseUS_youtubelogo__sOOLT",
                 videoText: "WhyClientsChooseUS_videoText__2JHxl",
                 videoName: "WhyClientsChooseUS_videoName__ga_U1",
                 realStories: "WhyClientsChooseUS_realStories__2T68H"
             }
         }
     }
 ]);


 // design ideas

 document.addEventListener("DOMContentLoaded", function() {
     const scrollContainer = document.getElementById("DesignCategoryType");
     const leftArrow = document.querySelector(".customSlideArrow_leftCustomSlide__zvOI2");
     const rightArrow = document.querySelector(".customSlideArrow_rightCustomSlide__OVwSn");

     const scrollAmount = 300; // Adjust scroll pixels per click

     rightArrow.addEventListener("click", () => {
         scrollContainer.scrollBy({
             left: scrollAmount,
             behavior: "smooth"
         });
     });

     leftArrow.addEventListener("click", () => {
         scrollContainer.scrollBy({
             left: -scrollAmount,
             behavior: "smooth"
         });
     });
 });


 //design read more file

 document.addEventListener("DOMContentLoaded", function() {
     document.querySelectorAll(".DesignCategory_readMoreHeading__g1Mmg").forEach(function(container) {
         const btn = container.querySelector("span");

         btn.addEventListener("click", function() {
             container.classList.toggle("DesignCategory_active__TbFE_");

             if (container.classList.contains("DesignCategory_active__TbFE_")) {
                 btn.textContent = "read less";
             } else {
                 btn.textContent = "read more";
             }
         });
     });
 });