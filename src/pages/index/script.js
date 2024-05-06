// class ProductTeamList {
//     constructor() {
//         this.initListOptions();
//     }
//
//     initListOptions() {
//         //$.get( "/teams/api/?action=getTeamSquadById&id=<?=$arResult["TEAM"]["ID"]?>", (res) => {
//         //    if (JSON.parse(res).success) {
//        //         this.drawList(JSON.parse(res).squad);
//        //     }
//        // });
//     }
//
//     drawList(res) {
//         function templateList(data) {
//             const container = document.createElement("div");
//
//             $.each(data, function(index, item){
//                 const achievements = document.createElement("div");
//                 achievements.classList.add("team__achievements", "row");
//
//                 if (item.achievements.length) {
//                     item.achievements.forEach((achieve) => {
//                         const currentAchieve = document.createElement("a");
//                         currentAchieve.dataset.tooltip =`${achieve.tooltip}`;
//                         currentAchieve.href = '#';
//                         currentAchieve.classList.add("team__icon", "tooltip", "icon", `icon_${achieve.image}`);
//                         achievements.appendChild(currentAchieve);
//                     });
//                 }
//
//                 const row = document.createElement("div");
//                 row.classList.add("team__item", "row");
//
//                 row.innerHTML = `
//                     <a href=${item.url} class="team__block row">
//                         <div class="team__wrapper hexagonal hexagonal_dark">
//                             <div class="team__img-wrapper">
//                                 <img class="team__img" src=${item.avatar}>
//                             </div>
//                         </div>
//                         <div class="team__info">
//                             <div class="team__grade">
//                                 ${item.position}
//                             </div>
//                             <h3 class="team__name">
//                                 ${item.fname} ${item.lname}
//                             </h3>
//                         </div>
//                     </a>
//                 `;
//
//                 row.appendChild(achievements);
//                 container.appendChild(row);
//             });
//
//             return container;
//         }
//
//         $('#team-pagination').pagination({
//             dataSource: res,
//             pageSize: 5,
//             showPrevious: false,
//             showNext: false,
//             showNavigator: true,
//             hideOnlyOnePage: true,
//             formatNavigator: `<span class="number"> <%= rangeStart %>-<%= rangeEnd %> </span> <span class="slash text_dark"> / </span> <span class="number text_dark"> <%= totalNumber %> </span>`,
//             position: 'left',
//             callback: function(data, pagination) {
//                 const html = templateList(data);
//                 $('#team-inner').html(html);
//             }
//         });
//     }
// }
//
// function bindListeners() {
//     const billingReadMoreBtn = document.querySelector('#billing-more');
//     billingReadMoreBtn.addEventListener('click', () => {
//         document.querySelector('.billing__text-inner').classList.add('show');
//     });
//
//     const newsShowAllBtn = document.querySelector('#news-all');
//     newsShowAllBtn.addEventListener('click', () => {
//         document.querySelector('.news__inner').classList.add('show');
//     });
//
//     const productTeamList = new ProductTeamList;
// }
//
// document.addEventListener('DOMContentLoaded', bindListeners);
