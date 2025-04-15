import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './settings-home.component.html',
  styleUrl: './settings-home.component.scss',
  standalone: true
})
export class SettingsHomeComponent {
  profileName: string = 'John Doe';
  profileEmail: string = 'john.doe@example.com';
  notificationsEnabled: boolean = true;
  selectedTheme: string = 'light';

  saveSettings(): void {
    // In a real app, this would save to a service or API
    console.log('Settings saved:', {
      name: this.profileName,
      email: this.profileEmail,
      notifications: this.notificationsEnabled,
      theme: this.selectedTheme
    });
    
    // Show a success message (in a real app, you'd use a toast/notification service)
    alert('Settings saved successfully!');
  }
}