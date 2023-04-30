import { Component, EventEmitter, Input, Output } from '@angular/core';

interface ButtonInterface {
  label: string;
  style: 'primary' | 'secondary' | 'danger' | 'warning' | 'info';
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})

export class ButtonComponent implements ButtonInterface {
  @Input() label: string;
  @Input() style: ButtonInterface['style'];
  @Input() disabled: boolean = false;

  @Output() onClick = new EventEmitter()

  public get classes(): string {
    switch (this.style) {
      case 'primary':
        return this.primary()
      case 'secondary':
        return this.secondary()
      case 'danger':
        return this.danger()
      case 'warning':
        return this.warning()
      case 'info':
        return this.info()
      default:
        return this.primary() 
    }
  }

  private primary(): string {
    const classeBase = 'bg-yellow-500 text-yellow-900 font-bold py-2 px-4 rounded' 
    if (this.disabled) {
      return `${classeBase} disabled:cursor-not-allowed cursor-not-allowed opacity-50`
    } else {
      return `${classeBase} mt-8 hover:bg-yellow-600 focus:bg-yellow-600 active:bg-yellow-700`
    }
  }

  private secondary(): string {
    const classeBase = 'bg-gray-500 text-white font-bold py-2 px-4 rounded'
    if (this.disabled) {
      return `${classeBase} disabled:cursor-not-allowed cursor-not-allowed opacity-50`
    } else {
      return `${classeBase} hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-700` 
    }
  }

  private danger(): string {
    const classeBase = 'bg-red-500 text-white font-bold py-2 px-4 rounded'
    if (this.disabled) {
      return `${classeBase} disabled:cursor-not-allowed cursor-not-allowed opacity-50`
    } else {
      return `${classeBase} hover:bg-red-600 focus:bg-red-600 active:bg-red-700`
    }
  }

  private warning(): string {
    const classeBase = 'bg-orange-500 text-white font-bold py-2 px-4 rounded'
    if (this.disabled) {
      return `${classeBase} disabled:cursor-not-allowed cursor-not-allowed opacity-50`
    } else {
      return `${classeBase} hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-700`
    }
  }

  private info(): string {
    const classeBase = 'bg-blue-500 text-white font-bold py-2 px-4 rounded'
    if (this.disabled) {
      return `${classeBase} disabled:cursor-not-allowed cursor-not-allowed opacity-50`
    } else {
      return `${classeBase} hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700`
    }
  }
  
}
