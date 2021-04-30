import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
//This is a structural directive created by us which works opposite to ngIf
@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  //This setter method wil create property with the same name as directive selector name and
  //will take a parameter based on which this structural firective works
  //if condition is false then we embed this template into our view container otherwise clear 
  //it from view
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  //Constructor takes template reference and view container reference
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
