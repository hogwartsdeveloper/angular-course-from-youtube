import {NgModule} from "@angular/core";
import {ColorDirectives} from "./color.directive";

@NgModule({
  declarations: [ColorDirectives],
  exports: [ColorDirectives]
})
export class SharedModule {}
