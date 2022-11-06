export class NavBar {
    private navElement = document.querySelector('ul')!;
    private navListItemsElements = this.navElement.querySelectorAll('li')!;
    constructor() {
        this.setMouseOverEvent();
        this.setMouseOutEvent();
    }

    setMouseOverEvent() {
        this.navElement.addEventListener('mouseover', e => {
            const validTargetElement = (e.target as Element).closest('li');
            if (!validTargetElement) return;
            this.navListItemsElements.forEach((listItem: Element) =>
                listItem.classList.add('opacity-40')
            );
            validTargetElement.classList.remove('opacity-40');
        });
    }

    setMouseOutEvent() {
        this.navElement.addEventListener('mouseout', () =>
            this.navListItemsElements.forEach((listItem: Element) =>
                listItem.classList.remove('opacity-40')
            )
        );
    }
}