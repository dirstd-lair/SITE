const userbalans = document.getElementsByClassName("balanse-container")[0].textContent;
var value = parseFloat(userbalans.replace(",", "."));

function onclickbalans() {
    value += 0.01;
    elementUpdate(".balanse-container", value.toFixed(2)); //  Округляем  до  двух  знаков  после  запятой
  
    
    async function elementUpdate(selector, newContent) {
            var html = await (await fetch(location.href)).text();
            var newdoc = new DOMParser().parseFromString(html, 'text/html');
            
            //  Обновляем  содержимое  элемента  в  новом  документе
            newdoc.querySelector(selector).textContent = newContent;
    
            //  Обновляем  элемент  на  странице
            document.querySelector(selector).outerHTML = newdoc.querySelector(selector).outerHTML;
            console.log('Элемент ' + selector + ' был успешно обновлен');
    }  
}

