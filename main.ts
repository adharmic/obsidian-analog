import { Plugin, WorkspaceLeaf } from 'obsidian';
import { AnalogView, ANALOG_VIEW } from 'clock_view';

// Remember to rename these classes and interfaces!

export default class ObsidianAnalog extends Plugin {
	view: AnalogView;
	updateInterval = -1;


	async onload() {
		// Register Clock View
		this.registerView(
			ANALOG_VIEW,
			(leaf) => (this.view = new AnalogView(leaf))
		);

		this.addRibbonIcon("clock", "Open Clock", (event) => {
			this.activateView();
		});
		this.startTicking();
	}

	onunload() {
		if (this.updateInterval !== -1) {
			window.clearInterval(this.updateInterval);
			this.updateInterval = -1;
		}
	}

	startTicking() {
		this.updateInterval = window.setInterval(() => {
			this.view.setClock();
		}, 1000);
	}

	async activateView() {
		const { workspace } = this.app;

		let leaf: WorkspaceLeaf | null = null;
		const leaves = workspace.getLeavesOfType(ANALOG_VIEW);

		if (leaves.length > 0) {
			leaf = leaves[0];
		} else {
			leaf = workspace.getRightLeaf(false);
			await leaf?.setViewState({ type: ANALOG_VIEW, active: true});
		}

		workspace.revealLeaf(leaf as WorkspaceLeaf);
	}

}