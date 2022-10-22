interface WindowPopup {
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
 * @returns BroadcastChannel to communicate with the popup window.
 */

function useWindowPopup(
  url: string,
  width: number,
  height: number
): WindowPopup {
  const popupLeft = screen.width / 2 - width / 2;
  const popupTop = screen.height / 2 - height / 2;
  const channel = new BroadcastChannel("window-popup");

  // Open the popup window.
  const open = () => {
    window.open(
      url,
      "popup",
      `width=${width},height=${height},left=${popupLeft},top=${popupTop}`
    );
  };
  // Close the popup window.
  const close = () => {
    window.close();
  };
  // Send a message to the current popup channel
  const sendMessage = (message: any) => {
    channel.postMessage(message);
  };

  return { open, close, sendMessage, channel };
}

export default useWindowPopup;
