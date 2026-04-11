/**
 * A simple, free replacement for GSAP's SplitText.
 * Splits text into words and characters.
 */
export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  elements: HTMLElement[] = [];
  originals: Map<HTMLElement, string> = new Map();

  constructor(target: string | HTMLElement | NodeList | HTMLElement[] | string[], options?: any) {
    let targets: HTMLElement[] = [];
    
    if (typeof target === 'string') {
      targets = Array.from(document.querySelectorAll(target));
    } else if (Array.isArray(target) && typeof target[0] === 'string') {
      target.forEach(t => {
        targets = targets.concat(Array.from(document.querySelectorAll(t as string)));
      });
    } else if (target instanceof NodeList) {
      targets = Array.from(target) as HTMLElement[];
    } else if (Array.isArray(target)) {
      targets = target as HTMLElement[];
    } else if (target) {
      targets = [target as HTMLElement];
    }
    
    this.elements = targets;
    
    this.elements.forEach((el) => {
      this.originals.set(el, el.innerHTML);
      this.split(el, options || {});
    });
  }

  split(el: HTMLElement, options: any) {
    const text = el.innerText;
    el.innerHTML = '';
    const words = text.split(' ');
    
    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.whiteSpace = 'nowrap';
      if (options.wordsClass) wordSpan.className = options.wordsClass;
      
      const chars = word.split('');
      chars.forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.style.display = 'inline-block';
        if (options.charsClass) charSpan.className = options.charsClass;
        charSpan.innerText = char;
        wordSpan.appendChild(charSpan);
        this.chars.push(charSpan);
      });
      
      el.appendChild(wordSpan);
      this.words.push(wordSpan);
      
      if (wordIndex < words.length - 1) {
        el.appendChild(document.createTextNode(' '));
      }
    });

    // Basic line class parsing (wrapping the whole thing since accurate line wrapping requires DOM measurement)
    if (options.linesClass) {
       el.classList.add(options.linesClass);
       this.lines.push(el);
    }
  }

  revert() {
    this.elements.forEach((el) => {
      if (this.originals.has(el)) {
        el.innerHTML = this.originals.get(el)!;
      }
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}
