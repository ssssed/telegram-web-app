import{j as s,u as i,h as d}from"./index-884ea96e.js";import{u as m,a as o}from"./useReduxToolkit-ea2224a1.js";const h=({avatar:e,name:a,text:c,counter:t})=>s.jsxs("div",{className:"message",children:[s.jsxs("div",{className:"message__head",children:[s.jsx("img",{className:"message__img",src:e,alt:a}),s.jsx("p",{className:"message__name",children:a})]}),s.jsxs("div",{className:"message__content",children:[s.jsx("p",{className:"message__text",children:c}),s.jsx("div",{className:"message__counter",children:t})]})]}),x=({id:e,title:a,user_name:c,user_avatar:t,message:n,message_count:r,onClick:l})=>s.jsxs("div",{className:"card",children:[s.jsx("p",{className:"card__status",children:"Есть непрочитанные сообщения"}),s.jsxs("ul",{className:"card__info",children:[s.jsxs("li",{className:"card__category",children:["Вакансия: ",a]}),s.jsxs("li",{className:"card__category",children:["# ",e]})]}),s.jsx(h,{name:c,avatar:t,text:n,counter:r}),s.jsx("button",{className:"card__button",onClick:l,children:"Открыть диалог"})]}),_=e=>{const a=i(),c=m(),t=()=>{c(d(e)),a(`/chat/${e.id}`)};return s.jsx(x,{...e,onClick:t})},N=()=>{const{cards:e}=o(a=>a.main);return s.jsx("div",{className:"cards",children:e.map(a=>s.jsx(_,{...a},a.id))})};export{N as default};
