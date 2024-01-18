//https://web-world.medium.com/how-to-use-react-web-components-in-angular-b3ac7e39fd17
// This file is for the react-chord library
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
//@ts-ignore
import Chord from "@tombatossals/react-chords/lib/Chord";

const containerElementRef = "customReactComponentContainer";

@Component({
  selector: "app-draw-chord",
  template: `<span #${containerElementRef}></span>`,
  // styleUrls: [""],
  encapsulation: ViewEncapsulation.None,
})
export class CustomReactWrapperComponent
  implements OnChanges, OnDestroy, AfterViewInit
{
  @ViewChild(containerElementRef, { static: true }) containerRef!: ElementRef;

  @Input() public chordPosition = {
    frets: [-1, 3, 1, 0, 1, 3],
    fingers: [0, 3, 2, 0, 1, 4],
    baseFret: 1,
    barres: [],
    midi: [48, 51, 55, 60, 67],
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
    const { chordPosition } = this;

    ReactDOM.render(
      <React.StrictMode>
        <div>
          <Chord
            chord={chordPosition}
            instrument={{
              strings: 6,
              fretsOnChord: 4,
              name: "Guitar",
              keys: [],
              tunings: {
                standard: ["E", "A", "D", "G", "B", "E"],
              },
            }}
          />
        </div>
      </React.StrictMode>,
      this.containerRef.nativeElement
    );
  }
}
