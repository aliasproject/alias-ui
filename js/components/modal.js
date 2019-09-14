const VERSION = '1.0.0';

class Modal {
  constructor(selector) {
    this.selector = document.querySelector(selector);
    this.backdrop = document.querySelector('.modal-backdrop');

    if (!this.backdrop) {
      this.backdrop = document.createElement('div');
      this.backdrop.classList.add('modal-backdrop');
      document.body.appendChild(this.backdrop);
    }

    this.events();
  }

  static get VERSION() {
    return VERSION;
  }

  events() {
    var instance = this;

    if (!this.backdrop.dataset.listener) {
      instance.backdrop.dataset.listener = true;

      this.backdrop.addEventListener('click', function(event) {
        if (!event.target.classList.contains('modal-backdrop')) return;
        instance.close();
      });
    }
  }

  open() {
    if (this.selector.classList.contains('open')) {
      this.close();
    } else {
      this.selector.classList.add('open');
      this.backdrop.classList.add('open');
    }
  }

  close() {
    console.log('close');
    if (this.selector) {
      this.selector.classList.remove('open');
    }

    if (this.backdrop) {
      this.backdrop.classList.remove('open');
    }
  }
}

export default Modal;
