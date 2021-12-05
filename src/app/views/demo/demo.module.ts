import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo01Component, Demo02Component } from './components';

import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from 'src/app/shared';

// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';
// import and register filepond file type validation plugin
import  * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import  * as FilepondPluginImageEdit from 'filepond-plugin-image-edit';
import  * as FilepondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginFileValidateType,FilepondPluginImageEdit,FilepondPluginImagePreview);

@NgModule({
  declarations: [Demo01Component, Demo02Component],
  imports: [CommonModule, DemoRoutingModule, DropdownModule, SharedModule, FilePondModule],
})
export class DemoModule {}
