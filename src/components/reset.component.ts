import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-reset',
    templateUrl: 'reset.component.html'
})
export class ResetComponent {
    @Output() didReset = new EventEmitter<string>();
    
    OnReset(type: string) {
        this.didReset.emit(type);
    }
}