export default (root, children) => {
    if(!Array.isArray(children)) children = [children];

    try {
        children.forEach(child => {
            if(child === null) return;

            if(child instanceof Element) root.insertAdjacentElement("beforeend", child);
            else root.textContent = child;
        })
    }catch (e) {
        console.log("Something went wrong:");
        console.log(e);
        root.textContent = "Something went wrong!";
    }
}