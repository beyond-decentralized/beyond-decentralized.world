function loadPostComponents() {
    loadIntoTag('../components/header.html', 'header');
    loadIntoTag('../components/summary.html', 'summary');
    loadIntoClass('../components/comments.html', 'comments-wrap');
    loadIntoTag('../components/footer.html', 'footer');
}

function loadIntoTag(url, selector) {
    loadContent(url, 'getElementsByTagName', selector);
}

function loadIntoClass(url, selector) {
    loadContent(url, 'getElementsByClassName', selector);
}

function loadContent(url, docMethod, selector) {
    fetch(url)
        .then(response => response.text())
        .then(htmlText => {
            var elementList = document[docMethod](selector)
            if (elementList.length) {
                elementList[0].outerHTML = htmlText;
            }
        });
}

function updateMenu(
    articleId,
    year
) {
    setTimeout(function () {
        setTimeout(function () {
            const articleMenuItem = document.querySelectorAll('[href="../' + year + '/' + articleId + '.html"]')[0];
            articleMenuItem.classList.add('highlighted')
            selectYearOnPage(year)
        }, 250)
    }, 250)
}

loadPostComponents();
