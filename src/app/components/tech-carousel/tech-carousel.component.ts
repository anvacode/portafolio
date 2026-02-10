import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tech-carousel-container">
      <div class="carousel-track">
        <!-- PHP -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #777BB4">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M64 33.74c-25.76 0-46.63 8.65-46.63 19.33 0 10.68 20.87 19.33 46.63 19.33 25.76 0 46.63-8.65 46.63-19.33 0-10.68-20.87-19.33-46.63-19.33zm0 34.66c-26.11 0-47.3-8.77-47.3-19.59s21.19-19.59 47.3-19.59 47.3 8.77 47.3 19.59-21.19 19.59-47.3 19.59z"/>
            </svg>
          </div>
          <span class="tech-name">PHP</span>
        </div>
        <!-- Laravel -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #FF2D20">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M64.002 2.575c-33.82 0-61.268 27.453-61.268 61.31 0 33.857 27.448 61.31 61.268 61.31s61.268-27.453 61.268-61.31c0-33.857-27.449-61.31-61.268-61.31zM32.768 74.16l16.032-38.4 16.032 38.4H32.768zm48.064 0H64.8l16.032-38.4 16.032 38.4z"/>
            </svg>
          </div>
          <span class="tech-name">Laravel</span>
        </div>
        <!-- Vue.js -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #4FC08D">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M9.8 19.5h23.4l32.8 56.5 32.8-56.5h23.4L65.9 102 9.8 19.5zM65.9 39.8L55.2 21.2h21.5L65.9 39.8z"/>
            </svg>
          </div>
          <span class="tech-name">Vue.js</span>
        </div>
        <!-- Angular -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #DD0031">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M64 15.36L16.8 35.7l7.2 60.7L64 117.12l40-20.72 7.2-60.7L64 15.36zm0 21.8l23.8 52.7H81.4l-6.1-15H52.7l-6.1 15H40.2L64 37.16z"/>
            </svg>
          </div>
          <span class="tech-name">Angular</span>
        </div>
        <!-- TypeScript -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #3178C6">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M2 64V2h124v124H2V64zm100.3 40.1v-7.6H87v-6.7h6.7V66.4H87V59h21.7v7.6h-11v13.7h11v7.6h-11v16.3h15.6v7.6h-11.3zM58.4 104.1V59h7.6v16.5h15V59h7.6v45.1H81v-20h-15v20h-7.6z"/>
            </svg>
          </div>
          <span class="tech-name">TypeScript</span>
        </div>
        <!-- Python -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #3776AB">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M63.9 15.5c-27.6 0-25.8 12-25.8 12v12h26.4v4H26.4s-17.7 2-17.7 25.5 16.6 25.5 16.6 25.5h10v-12s-.6-15.6 15.6-15.6h26.4s15.1.2 15.1-14.6V30.1s2.3-14.6-27.9-14.6zM52.3 23.6c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z"/>
            </svg>
          </div>
          <span class="tech-name">Python</span>
        </div>
        <!-- Linux -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #FCC624">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M64 4C31.76 4 6 29.76 6 62s25.76 58 58 58 58-25.76 58-58S96.24 4 64 4zm0 104c-25.4 0-46-20.6-46-46S38.6 16 64 16s46 20.6 46 46-20.6 46-46 46z"/>
            </svg>
          </div>
          <span class="tech-name">Linux</span>
        </div>
        <!-- AWS -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #FF9900">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M38.4 59.6c0 3.4 1.2 6.2 3.3 8.2 2.2 2 5.2 3 9.1 3 1.6 0 3.2-.2 4.9-.6v-6.6c-1.3.3-2.5.5-3.7.5-2 0-3.1-.8-3.1-2.5V48h7v-7h-7v-10l-7.5 1.5v8.5h-4.7v7h4.7v11.1zM66.2 70.8c2.9 0 5.3-.5 7.3-1.4v-6.6c-1.7.7-3.5 1.1-5.4 1.1-2.1 0-3.2-.9-3.2-2.6V48h8.6v-7h-8.6v-10l-7.5 1.5v8.5h-4.7v7h4.7v14.4c0 2.6.9 4.6 2.7 6 1.8 1.4 4.2 2.1 7.1 2.1z"/>
            </svg>
          </div>
          <span class="tech-name">AWS</span>
        </div>
        <!-- MySQL -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #4479A1">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M116.9 96.3c-1.5-.2-2.6.1-3.6.6-.2.1-.4.2-.6.2-.3 0-.6-.1-.6-.5 0-.4.2-.7.4-1 .6-.8 1.6-1.2 2.7-1.3 1.1-.1 2.2.2 3.1.8.5.3.9.8 1.2 1.3.4.6.6 1.3.7 2 .1.8 0 1.6-.3 2.3-.4.9-1 1.6-1.8 2.2-.9.6-2 1-3.1 1.1-1.2.1-2.3-.1-3.3-.7-1-.6-1.7-1.5-2.1-2.5-.4-1.1-.5-2.3-.3-3.4.3-1.5 1-2.9 2.1-3.9 1.1-1 2.6-1.5 4.1-1.4 1.2.1 2.3.5 3.2 1.2.7.6 1.2 1.3 1.5 2.1.2.6.3 1.2.2 1.8-.1.7-.4 1.3-.8 1.8-.5.6-1.2 1-2 1.2-.9.2-1.8.1-2.6-.3-.7-.3-1.2-.9-1.5-1.6-.2-.5-.3-1.1-.2-1.6.1-.6.4-1.1.8-1.5.5-.5 1.1-.7 1.8-.8.6-.1 1.2 0 1.7.3.4.2.7.6.9 1 .2.5.2 1 0 1.5-.1.4-.4.7-.8.9-.4.2-.8.2-1.2.1-.3-.1-.6-.3-.7-.6-.1-.2-.1-.5 0-.7.1-.2.3-.4.5-.5z"/>
            </svg>
          </div>
          <span class="tech-name">MySQL</span>
        </div>
        <!-- PostgreSQL -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #336791">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M93.6 70.9c-5.8-1.5-10.6-1.6-13.6-.3-1.8.7-3.1 2-3.8 3.8-.7 1.8-.6 4 .3 6.6.8 2.4 2 4.6 3.6 6.5 1.8 2.2 3.9 4 6.2 5.3 2.6 1.5 5.5 2.3 8.4 2.3 3.2 0 6.2-.9 8.9-2.7 2.5-1.7 4.4-4.1 5.5-7 1-2.6 1.1-5.5.3-8.2-.9-3.1-2.8-5.8-5.3-7.6-2.8-2.1-6.3-2.8-10.5-2.7z"/>
            </svg>
          </div>
          <span class="tech-name">PostgreSQL</span>
        </div>
        <!-- MongoDB -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #47A248">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M64 4c-4 16-6 32-6 48s2 32 6 48c4-16 6-32 6-48s-2-32-6-48z"/>
            </svg>
          </div>
          <span class="tech-name">MongoDB</span>
        </div>
        <!-- Git -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #F05032">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M124.7 58.4L69.6 3.3c-3.2-3.2-8.3-3.2-11.5 0L46.1 15.3l14.5 14.5c3.4-1.1 7.3-.4 10 2.3 2.7 2.7 3.4 6.6 2.3 10l14 14c3.4-1.1 7.3-.4 10 2.3 3.8 3.8 3.8 9.9 0 13.7-3.8 3.8-9.9 3.8-13.7 0-2.8-2.8-3.5-7-2.1-10.4l-13.1-13.1v34.4c.9.5 1.8 1.1 2.5 1.9 3.8 3.8 3.8 9.9 0 13.7-3.8 3.8-9.9 3.8-13.7 0-3.8-3.8-3.8-9.9 0-13.7.7-.7 1.5-1.3 2.4-1.7V44.5c-.9-.5-1.7-1.1-2.4-1.9-2.9-2.9-3.6-7.1-2.1-10.6L41 18.7 3.3 56.4c-3.2 3.2-3.2 8.3 0 11.5l55.1 55.1c3.2 3.2 8.3 3.2 11.5 0l54.8-54.8c3.2-3.2 3.2-8.3 0-11.5z"/>
            </svg>
          </div>
          <span class="tech-name">Git</span>
        </div>
        <!-- Bash -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #4EAA25">
            <svg viewBox="0 0 128 128">
              <rect x="10" y="20" width="108" height="88" rx="8" fill="none" stroke="currentColor" stroke-width="6"/>
              <line x1="30" y1="45" x2="70" y2="45" stroke="currentColor" stroke-width="5"/>
              <line x1="30" y1="64" x2="98" y2="64" stroke="currentColor" stroke-width="5"/>
              <line x1="30" y1="83" x2="80" y2="83" stroke="currentColor" stroke-width="5"/>
            </svg>
          </div>
          <span class="tech-name">Bash</span>
        </div>
        <!-- CCNA -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #1BA0D7">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M64 4L4 34v60l60 30 60-30V34L64 4zm0 20l40 20-40 20-40-20 40-20zM14 46l46 23v46l-46-23V46zm100 0v46l-46 23V69l46-23z"/>
            </svg>
          </div>
          <span class="tech-name">CCNA</span>
        </div>
        <!-- Scrum -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #6DB33F">
            <svg viewBox="0 0 128 128">
              <circle cx="64" cy="64" r="56" fill="none" stroke="currentColor" stroke-width="8"/>
              <path fill="currentColor" d="M92 44L56 80 36 60l-8 8 28 28 44-44z"/>
            </svg>
          </div>
          <span class="tech-name">Scrum</span>
        </div>

        <!-- Duplicados para efecto infinito -->
        <!-- PHP -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #777BB4">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M64 33.74c-25.76 0-46.63 8.65-46.63 19.33 0 10.68 20.87 19.33 46.63 19.33 25.76 0 46.63-8.65 46.63-19.33 0-10.68-20.87-19.33-46.63-19.33zm0 34.66c-26.11 0-47.3-8.77-47.3-19.59s21.19-19.59 47.3-19.59 47.3 8.77 47.3 19.59-21.19 19.59-47.3 19.59z"/>
            </svg>
          </div>
          <span class="tech-name">PHP</span>
        </div>
        <!-- Laravel -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #FF2D20">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M64.002 2.575c-33.82 0-61.268 27.453-61.268 61.31 0 33.857 27.448 61.31 61.268 61.31s61.268-27.453 61.268-61.31c0-33.857-27.449-61.31-61.268-61.31zM32.768 74.16l16.032-38.4 16.032 38.4H32.768zm48.064 0H64.8l16.032-38.4 16.032 38.4z"/>
            </svg>
          </div>
          <span class="tech-name">Laravel</span>
        </div>
        <!-- Vue.js -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #4FC08D">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M9.8 19.5h23.4l32.8 56.5 32.8-56.5h23.4L65.9 102 9.8 19.5zM65.9 39.8L55.2 21.2h21.5L65.9 39.8z"/>
            </svg>
          </div>
          <span class="tech-name">Vue.js</span>
        </div>
        <!-- Angular -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #DD0031">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M64 15.36L16.8 35.7l7.2 60.7L64 117.12l40-20.72 7.2-60.7L64 15.36zm0 21.8l23.8 52.7H81.4l-6.1-15H52.7l-6.1 15H40.2L64 37.16z"/>
            </svg>
          </div>
          <span class="tech-name">Angular</span>
        </div>
        <!-- TypeScript -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #3178C6">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M2 64V2h124v124H2V64zm100.3 40.1v-7.6H87v-6.7h6.7V66.4H87V59h21.7v7.6h-11v13.7h11v7.6h-11v16.3h15.6v7.6h-11.3zM58.4 104.1V59h7.6v16.5h15V59h7.6v45.1H81v-20h-15v20h-7.6z"/>
            </svg>
          </div>
          <span class="tech-name">TypeScript</span>
        </div>
        <!-- Python -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #3776AB">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M63.9 15.5c-27.6 0-25.8 12-25.8 12v12h26.4v4H26.4s-17.7 2-17.7 25.5 16.6 25.5 16.6 25.5h10v-12s-.6-15.6 15.6-15.6h26.4s15.1.2 15.1-14.6V30.1s2.3-14.6-27.9-14.6zM52.3 23.6c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z"/>
            </svg>
          </div>
          <span class="tech-name">Python</span>
        </div>
        <!-- Linux -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #FCC624">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M64 4C31.76 4 6 29.76 6 62s25.76 58 58 58 58-25.76 58-58S96.24 4 64 4zm0 104c-25.4 0-46-20.6-46-46S38.6 16 64 16s46 20.6 46 46-20.6 46-46 46z"/>
            </svg>
          </div>
          <span class="tech-name">Linux</span>
        </div>
        <!-- AWS -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #FF9900">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M38.4 59.6c0 3.4 1.2 6.2 3.3 8.2 2.2 2 5.2 3 9.1 3 1.6 0 3.2-.2 4.9-.6v-6.6c-1.3.3-2.5.5-3.7.5-2 0-3.1-.8-3.1-2.5V48h7v-7h-7v-10l-7.5 1.5v8.5h-4.7v7h4.7v11.1zM66.2 70.8c2.9 0 5.3-.5 7.3-1.4v-6.6c-1.7.7-3.5 1.1-5.4 1.1-2.1 0-3.2-.9-3.2-2.6V48h8.6v-7h-8.6v-10l-7.5 1.5v8.5h-4.7v7h4.7v14.4c0 2.6.9 4.6 2.7 6 1.8 1.4 4.2 2.1 7.1 2.1z"/>
            </svg>
          </div>
          <span class="tech-name">AWS</span>
        </div>
        <!-- MySQL -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #4479A1">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M116.9 96.3c-1.5-.2-2.6.1-3.6.6-.2.1-.4.2-.6.2-.3 0-.6-.1-.6-.5 0-.4.2-.7.4-1 .6-.8 1.6-1.2 2.7-1.3 1.1-.1 2.2.2 3.1.8.5.3.9.8 1.2 1.3.4.6.6 1.3.7 2 .1.8 0 1.6-.3 2.3-.4.9-1 1.6-1.8 2.2-.9.6-2 1-3.1 1.1-1.2.1-2.3-.1-3.3-.7-1-.6-1.7-1.5-2.1-2.5-.4-1.1-.5-2.3-.3-3.4.3-1.5 1-2.9 2.1-3.9 1.1-1 2.6-1.5 4.1-1.4 1.2.1 2.3.5 3.2 1.2.7.6 1.2 1.3 1.5 2.1.2.6.3 1.2.2 1.8-.1.7-.4 1.3-.8 1.8-.5.6-1.2 1-2 1.2-.9.2-1.8.1-2.6-.3-.7-.3-1.2-.9-1.5-1.6-.2-.5-.3-1.1-.2-1.6.1-.6.4-1.1.8-1.5.5-.5 1.1-.7 1.8-.8.6-.1 1.2 0 1.7.3.4.2.7.6.9 1 .2.5.2 1 0 1.5-.1.4-.4.7-.8.9-.4.2-.8.2-1.2.1-.3-.1-.6-.3-.7-.6-.1-.2-.1-.5 0-.7.1-.2.3-.4.5-.5z"/>
            </svg>
          </div>
          <span class="tech-name">MySQL</span>
        </div>
        <!-- PostgreSQL -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #336791">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M93.6 70.9c-5.8-1.5-10.6-1.6-13.6-.3-1.8.7-3.1 2-3.8 3.8-.7 1.8-.6 4 .3 6.6.8 2.4 2 4.6 3.6 6.5 1.8 2.2 3.9 4 6.2 5.3 2.6 1.5 5.5 2.3 8.4 2.3 3.2 0 6.2-.9 8.9-2.7 2.5-1.7 4.4-4.1 5.5-7 1-2.6 1.1-5.5.3-8.2-.9-3.1-2.8-5.8-5.3-7.6-2.8-2.1-6.3-2.8-10.5-2.7z"/>
            </svg>
          </div>
          <span class="tech-name">PostgreSQL</span>
        </div>
        <!-- MongoDB -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #47A248">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M64 4c-4 16-6 32-6 48s2 32 6 48c4-16 6-32 6-48s-2-32-6-48z"/>
            </svg>
          </div>
          <span class="tech-name">MongoDB</span>
        </div>
        <!-- Git -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #F05032">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M124.7 58.4L69.6 3.3c-3.2-3.2-8.3-3.2-11.5 0L46.1 15.3l14.5 14.5c3.4-1.1 7.3-.4 10 2.3 2.7 2.7 3.4 6.6 2.3 10l14 14c3.4-1.1 7.3-.4 10 2.3 3.8 3.8 3.8 9.9 0 13.7-3.8 3.8-9.9 3.8-13.7 0-2.8-2.8-3.5-7-2.1-10.4l-13.1-13.1v34.4c.9.5 1.8 1.1 2.5 1.9 3.8 3.8 3.8 9.9 0 13.7-3.8 3.8-9.9 3.8-13.7 0-3.8-3.8-3.8-9.9 0-13.7.7-.7 1.5-1.3 2.4-1.7V44.5c-.9-.5-1.7-1.1-2.4-1.9-2.9-2.9-3.6-7.1-2.1-10.6L41 18.7 3.3 56.4c-3.2 3.2-3.2 8.3 0 11.5l55.1 55.1c3.2 3.2 8.3 3.2 11.5 0l54.8-54.8c3.2-3.2 3.2-8.3 0-11.5z"/>
            </svg>
          </div>
          <span class="tech-name">Git</span>
        </div>
        <!-- Bash -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #4EAA25">
            <svg viewBox="0 0 128 128">
              <rect x="10" y="20" width="108" height="88" rx="8" fill="none" stroke="currentColor" stroke-width="6"/>
              <line x1="30" y1="45" x2="70" y2="45" stroke="currentColor" stroke-width="5"/>
              <line x1="30" y1="64" x2="98" y2="64" stroke="currentColor" stroke-width="5"/>
              <line x1="30" y1="83" x2="80" y2="83" stroke="currentColor" stroke-width="5"/>
            </svg>
          </div>
          <span class="tech-name">Bash</span>
        </div>
        <!-- CCNA -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #1BA0D7">
            <svg viewBox="0 0 128 128">
              <path fill="currentColor" d="M64 4L4 34v60l60 30 60-30V34L64 4zm0 20l40 20-40 20-40-20 40-20zM14 46l46 23v46l-46-23V46zm100 0v46l-46 23V69l46-23z"/>
            </svg>
          </div>
          <span class="tech-name">CCNA</span>
        </div>
        <!-- Scrum -->
        <div class="tech-item">
          <div class="tech-icon" style="--tech-color: #6DB33F">
            <svg viewBox="0 0 128 128">
              <circle cx="64" cy="64" r="56" fill="none" stroke="currentColor" stroke-width="8"/>
              <path fill="currentColor" d="M92 44L56 80 36 60l-8 8 28 28 44-44z"/>
            </svg>
          </div>
          <span class="tech-name">Scrum</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tech-carousel-container {
      overflow: hidden;
      padding: 2rem 0;
      mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }

    .carousel-track {
      display: flex;
      gap: 2rem;
      animation: scroll 30s linear infinite;
      width: max-content;
    }

    .carousel-track:hover {
      animation-play-state: paused;
    }

    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .tech-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      padding: 1.5rem 2rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      transition: all 0.3s ease;
      min-width: 120px;
    }

    .tech-item:hover {
      transform: translateY(-5px);
      background: rgba(255, 107, 107, 0.05);
      border-color: var(--tech-color);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px var(--tech-color);
    }

    .tech-icon {
      width: 50px;
      height: 50px;
      color: var(--tech-color);
      transition: transform 0.3s ease;
    }

    .tech-item:hover .tech-icon {
      transform: scale(1.1);
    }

    .tech-icon svg {
      width: 100%;
      height: 100%;
    }

    .tech-name {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text-primary);
      text-align: center;
    }

    @media (max-width: 768px) {
      .carousel-track {
        gap: 1rem;
      }
      
      .tech-item {
        padding: 1rem 1.5rem;
        min-width: 100px;
      }
      
      .tech-icon {
        width: 40px;
        height: 40px;
      }
      
      .tech-name {
        font-size: 0.8rem;
      }
    }
  `]
})
export class TechCarouselComponent {}
