import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Theme } from '../select-theme/select-theme.component';

export interface formData {
  name: FormControl;
  email: FormControl;
  phoneNumber: FormControl;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  userData: formData | undefined;
  themes: Theme[] = [];
  hasError = true;

  constructor(
    private _router: Router
  ) {}

  ngOnInit(): void {}

  handleFormChange(formDataParam: formData): void {
    this.userData = formDataParam;
    this.hasError = this.userDataHasErrors();
  }

  userDataHasErrors(): boolean {
    if (
      this.userData?.name?.errors ||
      this.userData?.email?.errors ||
      this.userData?.phoneNumber?.errors
    ) {
      return true;
    }
    return false;
  }

  handleThemeSelect(themeData: Theme[]): void {
    this.themes = themeData;
  }

  handleContinue(): void {
    console.log('continue..');
    const user = {
      name: this.userData?.name.value,
      email: this.userData?.email.value,
      phoneNumber: this.userData?.phoneNumber.value,
    };
    const themesList = this.themes.filter((t) => t.isSelected);
    this.downloadJson({ user, themesList });
    this._router.navigate(["./songs"]);
  }

  downloadJson(jsonData: any): void {
    var sJson = JSON.stringify(jsonData);
    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/json;charset=UTF-8,' + encodeURIComponent(sJson)
    );
    element.setAttribute('download', 'user-data.json');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
