import { ref } from "vue";

interface WindowPopup {
  open: (url: string, width: number, height: number) => void;
  close: () => void;
  onMessage: (callback: (message: any) => void) => void;
  sendMessage: (message: any) => void;
}

/**
 *
 * @returns
 */
function useWindowPopup(): WindowPopup {
  let channel = ref(new BroadcastChannel("window-popup"));

  /**
   * Open a popup window with the given URL.
   * @property {String} url - The URL to open in the popup window
   * @property {Number} width - The width of the popup window
   * @property {Number} height - The height of the popup window
   */
  function open(url: string, width: number, height: number) {
    const popupLeft = screen.width / 2 - width / 2;
    const popupTop = screen.height / 2 - height / 2;
    const features = `width=${width},height=${height},left=${popupLeft},top=${popupTop}`;
    window.open(url, "popup", features);
  }
  /**
   * close the popup window.
   */
  function close() {
    window.close();
  }
  /**
   * send message to the current popup channel
   * @property {any} message - The message to send to the popup window
   */

  function sendMessage(message: any) {
    channel.value.postMessage(message);
  }
  /*
   * listen to messages from the popup window
   * @property {Function} callback - The callback function to execute when a message is received
   * */
  const onMessage = (callback: any) => (channel.value.onmessage = callback);

  return { open, close, sendMessage, onMessage };
}

export default useWindowPopup;
