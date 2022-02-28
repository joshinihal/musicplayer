import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

export interface Theme {
  name: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.scss'],
})
export class SelectThemeComponent implements OnInit {

  @Output() onThemeSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() onContinue: EventEmitter<any> = new EventEmitter<any>();

  @Input() hasError = true;


  themes: Theme[] = [
    { name: 'Travel', isSelected: false },
    { name: 'Comedy', isSelected: false },
    { name: 'Fashion & Lifestyle', isSelected: false },
    { name: 'Reels & Shorts', isSelected: false },
    { name: 'Gaming', isSelected: false },
    { name: 'Devotional', isSelected: false },
    { name: 'Sports', isSelected: false },
    { name: 'Tutorials', isSelected: false },
    { name: 'Dance', isSelected: false },
    { name: 'Reviews & Unboxing', isSelected: false },
    { name: 'Cinematic', isSelected: false },
    { name: 'Advertising', isSelected: false },
    { name: 'Wedding', isSelected: false },
    { name: 'Festival', isSelected: false },
    { name: 'Patriotic', isSelected: false },
    { name: 'Corporate', isSelected: false },
    { name: 'Food & Cooking', isSelected: false },
    { name: 'Other', isSelected: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleThemeClick(theme: Theme): void {
    const index = this.themes.findIndex((t) => theme.name === t.name);

    if (this.themes[index].isSelected) {
      this.themes[index].isSelected = !this.themes[index].isSelected;
    } else {
      const selectedCount = this.getSelectedCount();
      if (selectedCount < 5) {
        this.themes[index].isSelected = !this.themes[index].isSelected;
      }
    }
    this.onThemeSelect.emit(this.themes);
  }

  getSelectedCount(): number {
    return this.themes.reduce((prev, curr) => {
      return prev + (curr.isSelected ? 1 : 0);
    }, 0);
  }

  handleContinue(): void {
    if (!this.hasError && this.getSelectedCount() <= 5){
      this.onContinue.emit();
    }
  }
}
