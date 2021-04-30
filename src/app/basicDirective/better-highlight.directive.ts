import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})

//This approach is better way to create directives because
//acessing elements directly as done in basic-highlight directive is not a good practice,
//you should use a different tool which ie. this directive type because Angular actually is also able
//to render your templates without a DOM and then these properties might not be available.
export class BetterHighlightDirective implements OnInit {
  //We can use custom property binding so that we can set changes on our own based on some parameters of app
  @Input() defaultColor: string = "transparent";
  @Input("appBetterHighlight") highlightColor: string = "red";
  @HostBinding("style.backgroundColor") backgroundColor: string;
  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elemRef.nativeElement,'background-color','blue');
  }
  //HostListener provides ways to dynamically change soething in DOM. It works on events trigerred
  //We need to pass event name in @HostListener() as string and event data using eventData param
  //the event is not automatically passed (eventData is undefined in this case).
  //The event has to be passed from the @HostListener decorator like this, if it's needed inside the function:
  //@HostListener('mouseenter', ['$event']) mouseover(eventData: Event) { ... }
  //We have to always use the array syntax ['$event'] for accessing the event.
  @HostListener("mouseenter", ["$event"]) mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elemRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave", ["$event"]) mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elemRef.nativeElement,'background-color','transparent');
  }
}
/* @HostBinding First of all, we need to bind this to some property which value will become important,
so that could be a backgroundColor property,
Now in @HostBinding, we can pass a string defining to which property of the hosting element we want to
bind style would be such a property
and there then the backgroundColor property to be precise.
Camel case is important here because we're accessing the DOM property which doesn't know dashes.
So with this, what we're telling Angular is on the element this directive sits, please access the style
property which pretty much any input has 
and then there a sub-property, the backgroundColor and we set this equal to whatever background color
is set to here.
Well and we can simply change background color here when we mouseover it, we can set backgroundColor
to blue in this case and set it to transparent
*/
