import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private defaultIntervalDelay = 50
  constructor() { }

  onLoadHTML(selector: string, callback: any, intervalDelay = this.defaultIntervalDelay, elementsToWaitCount: number = 1) {
    let interval = setInterval(() => {
      let element = document.querySelectorAll(selector)
      element.forEach(el => { callback(el) })
      if (element.length >= elementsToWaitCount) {
        clearInterval(interval)
      }
    }, intervalDelay)

  }

  toogleClassOnTouch(selector: string, className: string, elementsCount = 1) {
    this.onLoadHTML(selector, () => {
      let elements = document.querySelectorAll(selector)
      elements.forEach(el => {
        el.addEventListener('touchstart', () => {
          if (!el.classList.contains(className))
            el.classList.add(className)
        })
        el.addEventListener('touchend', () => {
          if (el.classList.contains(className))
            el.classList.remove(className)
        })
      })
    }, 50, elementsCount)
  }

  shuffleArray(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

}
