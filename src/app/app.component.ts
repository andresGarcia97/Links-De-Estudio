import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  constructor(private meta: Meta, private router: Router) {}
  
  ngOnInit(): void {
    this.setModeConfig();
    this.setColorAdressBar();
    this.saveStateChangeMode();
  }

  porciento: any = porcentaje.subscribe((valor) => {
    this.porciento = valor;
  });

  domain = "https://contenidoderepaso.web.app/";
  shareLinkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${this.domain}`;
  shareTwitter = `https://twitter.com/intent/tweet?text=Una gran fuente de repaso para Programadores&url=${this.domain}`;
  shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.domain}`;

  public setModeConfig(): void {

    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      this.buttonChangueMode = savedMode === 'true';
      if (this.buttonChangueMode) {
        this.changueMode(false);
      }
    }
    else {
      const now = new Date();
      if (now.getHours() >= 19 || now.getHours() <= 5) {
        this.changueMode(false);
      }
    }

    this.saveStateChangeMode();
  }

  public saveStateChangeMode(): void {
    localStorage.setItem('darkMode', this.buttonChangueMode.toString());
  }

  public changueMode(setModeManual: boolean): void {

    if(setModeManual){
      this.buttonChangueMode = !this.buttonChangueMode;
    }

    const body = document.body;
    body.classList.toggle('oscuro');
    this.updateColorAdressBar();
    this.saveStateChangeMode();
  }

  public setColorAdressBar(): void {
    const colorAddressBar = this.buttonChangueMode ? colorNavyBlue : colorSelectiveYellow;
    this.meta.addTag({ name: 'theme-color', content: colorAddressBar });
  }

  public updateColorAdressBar(): void {
    const colorAddressBar = this.buttonChangueMode ? colorNavyBlue : colorSelectiveYellow;
    this.meta.updateTag({ name: 'theme-color', content: colorAddressBar });
  }

  public routeTo(component: string): void {
    this.router.navigateByUrl(`/${component}`);
  }

}
