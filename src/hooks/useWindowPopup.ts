interface IWindowPopup {
  open: () => void;
  close: () => void;
  sendMessage: (message: any) => void;
  channel: BroadcastChannel;
}

/**
 * Open a popup window with the given URL.
 * @param url The URL to open in the popup window.
 * @param width The width of the popup window.
 * @param height The height of the popup window.
 * @method open Open the popup window.
 * @method close Close the popup window.
 * @method sendMessage Send a message to the popup window.
 * @property channel The BroadcastChannel to communicate with the popup window.
 */

class useWindowPopup implements IWindowPopup {
  channel: BroadcastChannel;
  constructor(
    private url: string,
    private width: number,
    private height: number
  ) {
    this.channel = new BroadcastChannel("window-popup");
  }
  // Open the popup window.
  open() {
    window.open(this.url, "popup", this.features);
  }
  // Close the popup window.
  close() {
    window.close();
  }
  // Send a message to the current popup channel
  sendMessage(message: any) {
    this.channel.postMessage(message);
  }

  private get features() {
    return `width=${this.width},height=${this.height},left=${this.popupLeft},top=${this.popupTop}`;
  }
  private get popupLeft() {
    return screen.width / 2 - this.width / 2;
  }
  private get popupTop() {
    return screen.height / 2 - this.height / 2;
  }
}

export default useWindowPopup;
