class Card extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({ mode: "open" });

    this.divTitle = document.createElement("div");
    this.divDesc = document.createElement("div");

    shadow.appendChild(this.divTitle);
    shadow.appendChild(this.divDesc);
  }

  connectedCallback() {
    this.divTitle.innerHTML = `<strong>
          ${this.getAttribute("title")}
      </strong>`;
    this.divDesc.innerHTML = `¨
        ${this.getAttribute("description")}
    `;
  }
}

customElements.define("app-card", Card);
