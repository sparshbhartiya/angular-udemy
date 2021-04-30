import { Directive, ElementRef, OnInit } from "@angular/core";

//We have created our own directive and use it as element attribute
@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  //We get access to element on which our directive is used using contructor. Angular calls this
  //component for us and does dependency injection
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green"; //This is not a good way we must not
    //manipulate DOM directly
  }
}
