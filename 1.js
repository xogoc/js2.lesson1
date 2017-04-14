function Menu(items) {
    this.render = function() {
        var div = document.createElement('div');
        if (this.containerId) div.id = this.containerId;
        if (this.containerClass) div.className = this.containerClass;
        var ul = document.createElement('ul');
        var li, a;
        for(var i = 0; i < items.length; i++) {
            li = document.createElement('li');
            a = document.createElement('a');
            a.href = items[i].href;
            a.innerText = items[i].title;
            li.appendChild(a);
            ul.appendChild(li);
        }
        div.appendChild(ul);
        return(div);
    }
}
