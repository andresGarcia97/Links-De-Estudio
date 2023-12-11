import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const scroll$ = fromEvent(document, 'scroll');

const calcularPorcentaje = (event: any) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;
  return scrollTop / (scrollHeight - clientHeight) * 100;
};

const porcentaje = scroll$.pipe(
  map(event => calcularPorcentaje(event))
);

const colorSelectiveYellow = '#FFBA08';
const colorNavyBlue = '#1976d2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  
  buttonChangueMode = false;
  
  // https://usefulangle.com/post/243/change-browser-address-bar-theme-color-with-html-meta-tag
  constructor(private meta: Meta) {}
  
  ngOnInit(): void {
    const now = new Date();
    if(now.getHours() >= 19 || now.getHours() <= 5) {
      this.changueMode();
      return;
    }
    this.setColorAdressBar();
  }

  porciento: any = porcentaje.subscribe((valor) => {
    this.porciento = valor;
  });

  domain = "https://contenidoderepaso.web.app/";
  shareLinkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${this.domain}`;
  shareTwitter = `https://twitter.com/intent/tweet?text=Una gran fuente de repaso para Programadores&url=${this.domain}`;
  shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.domain}`;

  public changueMode(): void {
    this.buttonChangueMode = !this.buttonChangueMode;
    const body = document.body;
    body.classList.toggle('oscuro');
    this.updateColorAdressBar();
  }

  public setColorAdressBar(): void {
    const setColorAddressBar = this.buttonChangueMode ? colorNavyBlue : colorSelectiveYellow;
    this.meta.addTag({ name: 'theme-color', content: setColorAddressBar });
  }

  public updateColorAdressBar(): void {
    const updateColorAddressBar = this.buttonChangueMode ? colorNavyBlue : colorSelectiveYellow;
    this.meta.updateTag({ name: 'theme-color', content: updateColorAddressBar });
  }

}
