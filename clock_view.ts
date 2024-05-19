import { ItemView, WorkspaceLeaf } from "obsidian";

export const ANALOG_VIEW = "analog_view";

export class AnalogView extends ItemView {

	private mainContainer: HTMLElement;
	private clockContainer: HTMLElement;
	private outerRim: HTMLElement;
	private number1: HTMLElement;
	private number2: HTMLElement;
	private number3: HTMLElement;
	private number4: HTMLElement;
	private number5: HTMLElement;
	private number6: HTMLElement;
	private number7: HTMLElement;
	private number8: HTMLElement;
	private number9: HTMLElement;
	private number10: HTMLElement;
	private number11: HTMLElement;
	private number12: HTMLElement;
	private dateMonthContainer: HTMLElement;
	private dateBox: HTMLElement;
	private monthBox: HTMLElement;
	private hourHand: HTMLElement;
	private minuteHand: HTMLElement;
	private secondHand: HTMLElement;

    constructor(leaf: WorkspaceLeaf) {
        super(leaf);
    }

    getViewType() {
        return ANALOG_VIEW;
    }
    
    getDisplayText() {
        return "Analog Clock View";
    }
    
    getIcon(): string {
        return "clock";
    }

    async onOpen() {
		this.containerEl.empty();

        this.mainContainer = this.containerEl.createDiv();
        this.mainContainer.addClass("container");

        this.outerRim = this.mainContainer.createDiv();
        this.outerRim.addClass("clock-outer");

        this.clockContainer = this.mainContainer.createDiv();
        this.clockContainer.addClass("clock");

        // Numbers
        this.number1 = this.clockContainer.createDiv();
        this.number1.addClass("number");
        this.number1.addClass("number1");
        this.number1.textContent = "I";

        this.number2 = this.clockContainer.createDiv();
        this.number2.addClass("number");
        this.number2.addClass("number2");
        this.number2.textContent = "II";

        this.number3 = this.clockContainer.createDiv();
        this.number3.addClass("number");
        this.number3.addClass("number3");
        this.number3.textContent = "III";

        this.number4 = this.clockContainer.createDiv();
        this.number4.addClass("number");
        this.number4.addClass("number4");
        this.number4.textContent = "IV";

        this.number5 = this.clockContainer.createDiv();
        this.number5.addClass("number");
        this.number5.addClass("number5");
        this.number5.textContent = "V";

        this.number6 = this.clockContainer.createDiv();
        this.number6.addClass("number");
        this.number6.addClass("number6");
        this.number6.textContent = "VI";

        this.number7 = this.clockContainer.createDiv();
        this.number7.addClass("number");
        this.number7.addClass("number7");
        this.number7.textContent = "VII";

        this.number8 = this.clockContainer.createDiv();
        this.number8.addClass("number");
        this.number8.addClass("number8");
        this.number8.textContent = "VIII";

        this.number9 = this.clockContainer.createDiv();
        this.number9.addClass("number");
        this.number9.addClass("number9");
        this.number9.textContent = "IX";

        this.number10 = this.clockContainer.createDiv();
        this.number10.addClass("number");
        this.number10.addClass("number10");
        this.number10.textContent = "X";

        this.number11 = this.clockContainer.createDiv();
        this.number11.addClass("number");
        this.number11.addClass("number11");
        this.number11.textContent = "XI";
        
        this.number12 = this.clockContainer.createDiv();
        this.number12.addClass("number");
        this.number12.addClass("number12");
        this.number12.textContent = "XII";

        // Date + Month display
        this.dateMonthContainer = this.clockContainer.createDiv();
        this.dateMonthContainer.addClass("container-2");

        this.dateBox = this.dateMonthContainer.createDiv();
        this.dateBox.id = "date";
        this.dateBox.textContent = "25";

        this.monthBox = this.dateMonthContainer.createDiv();
        this.monthBox.id = "month";
        this.monthBox.textContent = "9";

        this.hourHand = this.clockContainer.createDiv();
        this.hourHand.id = "hour-hand";
        this.hourHand.addClass("hand");
        this.hourHand.addClass("hour");

        this.minuteHand = this.clockContainer.createDiv();
        this.minuteHand.id = "minute-hand";
        this.minuteHand.addClass("hand");
        this.minuteHand.addClass("minute");

        this.secondHand = this.clockContainer.createDiv();
        this.secondHand.id = "second-hand";
        this.secondHand.addClass("hand");
        this.secondHand.addClass("minute");
    }

    setRotation(hand: HTMLElement, rotation: number) {
        hand.style.setProperty('--rotation', rotation.toString());
    }

    setClock() {
        const currentDate = new Date();
        const seconds = currentDate.getSeconds();
        const minutes = currentDate.getMinutes();
        const hours = currentDate.getHours();
        const millis = currentDate.getMilliseconds();
        const secondsRotation = (seconds / 60) * 360 + (millis / 1000) * 6;
        const minutesRotation = ((minutes + seconds / 60) / 60) *360;
        const hoursRotation = ((hours + minutes / 60) / 12) * 360;
        this.setRotation(this.secondHand, secondsRotation);
        this.setRotation(this.minuteHand, minutesRotation);
        this.setRotation(this.hourHand, hoursRotation);
        this.dateBox.textContent = currentDate.getDate().toString();
        this.monthBox.textContent = currentDate.toLocaleString('default', { month: 'short' });
    }

    async onClose() {
        // Clean up code here
    }

	displayTime(): void {

	}
}
