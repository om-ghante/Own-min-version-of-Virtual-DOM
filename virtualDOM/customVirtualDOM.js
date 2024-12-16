function CustomVirtualDOM(rootElement, newHtml, oldHtml) {
    if (!oldHtml) {
        rootElement.innerHTML = newHtml;
    } else if (!newHtml && oldHtml) {
        rootElement.innerHTML = '';
    } else if (newHtml !== oldHtml) {
        rootElement.innerHTML = newHtml;
    }
}

export { CustomVirtualDOM };
