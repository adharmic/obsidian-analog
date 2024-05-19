import { App, PluginSettingTab, Setting } from "obsidian";
import ObsidianAnalog from "../main"

export default class ExampleSettingTab extends PluginSettingTab {
    plugin: ObsidianAnalog;

    constructor(app: App, plugin: ObsidianAnalog) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        let { containerEl } = this;

        containerEl.empty();

        new Setting(containerEl)
            .setName("Date Format")
            .setDesc("Change default date format")
            .addText((text) =>
                text
                    .setPlaceholder("MM DD YYYY")
                    .setValue(this.plugin.settings.dateFormat)
                    .onChange(async (value) => {
                        this.plugin.settings.dateFormat = value;
                        await this.plugin.saveSettings();
                    })
            );
    }
}