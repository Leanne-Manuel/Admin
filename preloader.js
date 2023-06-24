//para mostrar a versao do app no meomento q roda

window.addEventListener("DOMContentLoaded",
()=>{
const replaceText = (selector, text) => {
const element = document.getElementById(selector);
console.log(element);
if (element) element.innerText = text;
};
for (const dependency of ["chrome","node","electron"]) {
replaceText (`${dependency}-version`, process.versions[dependency]);
}
})