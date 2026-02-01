import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-input-stepper',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './input-stepper.component.html',
    styleUrls: ['./input-stepper.component.scss'],
})
export class InputStepperComponent {
    protected readonly componentId = `input-stepper-${Math.random().toString(36).substring(2, 9)}`;
    @Input() headerInput: string = '';
    @Input() placeholder: string = '';
    @Input() readonly: boolean = false;
    @Input() required: boolean = false;
    @Input() disabled: boolean = false;
    @Input() width: string = '100%';
    @Input() min: number = 0;
    @Input() max: number = 100;
    @Input() error: string = '';
    @Input() helperText: string = '';
    @Input() step: number = 1;
    @Input() state: 'default' | 'negative' | 'positive' = 'default';

    @Output() valueChange = new EventEmitter<number>();

    private _value: number = 0;

    @Input()
    set value(val: number) {
        this._value = val || 0;
    }

    get value(): number {
        return this._value;
    }

    increment(): void {
        if (this.readonly || this.disabled) return;
        const newValue = this._value + this.step;
        if (newValue <= this.max) {
            this._value = newValue;
            this.valueChange.emit(this._value);
        }
    }

    decrement(): void {
        if (this.readonly || this.disabled) return;
        const newValue = this._value - this.step;
        if (newValue >= this.min) {
            this._value = newValue;
            this.valueChange.emit(this._value);
        }
    }

    onInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        let newValue = Number.parseInt(input.value, 10);

        if (Number.isNaN(newValue)) {
            newValue = this.min;
        }

        if (newValue < this.min) newValue = this.min;
        if (newValue > this.max) newValue = this.max;

        input.value = newValue.toString();
        this._value = newValue;
        this.valueChange.emit(this._value);
    }
}