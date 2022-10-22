interface IWindowPopup {
  open: () => void;
  close: () => void;
  sendMessage: (message: any) => void;
  channel: BroadcastChannel;
}

class useWindowPopup implements IWindowPopup {
  channel: BroadcastChannel;
  /**
   * Open a popup window with the given URL.
   * @property {String} url - The URL to open in the popup window
   * @property {Number} width - The width of the popup window
   * @property {Number} height - The height of the popup window
   */
  constructor(
    private url: string,
    private width: number,
    private height: number
  ) {
    this.channel = new BroadcastChannel("window-popup");
  }
  /**
   * Open the popup window.
   */
  open() {
    window.open(this.url, "popup", this.features);
  }
  /**
   * Open the popup window.
   */
  close() {
    window.close();
  }
  /**
   * send message to broadcast channel
   */
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
