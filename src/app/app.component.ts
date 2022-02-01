import { Component } from '@angular/core';

import { IPvtButtonConfig } from '@preventor/ngx-pvt-button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: IPvtButtonConfig = {
    flowType: 'YOUR_FLOW_TYPE',
    credentials: {
      apiKey: 'YOUR_API_KEY',
      clientSecret: 'YOUR_CLIENT_SECRET',
      tenant: 'YOUR_TENANT',
      banknu: 'YOUR_BANKNU',
      env: 'YOUR_ENV',
    },
    deskVerificationEnabled: true,
    currentUserInfo: {
      cifCode: 'YOUR_CIFCODE',
    },
  };
}
