import { AlertNotification } from "./AlertNotification";
import { ConfirmNotification } from "./ConfirmNotification";
import { DesktopBroadcaster } from "./DesktopBroadcaster";
import { MessageNotification } from "./MessageNotification";
import { MobileBroadcaster } from "./MobileBroadcaster";
import { WarningNotification } from "./WarningNotification";
import { WebBroadcaster } from "./WebBroadcaster";


const webMessage = new MessageNotification(new WebBroadcaster());
webMessage.show();

const webAlert = new AlertNotification(new WebBroadcaster());
webAlert.show();

const webWarning = new WarningNotification(new WebBroadcaster());
webWarning.show();

const webConfirm = new ConfirmNotification(new WebBroadcaster());
webConfirm.show();

const mobileMessage = new MessageNotification(new MobileBroadcaster());
mobileMessage.show();

const mobileAlert = new AlertNotification(new MobileBroadcaster());
mobileAlert.show();

const mobileWarning = new WarningNotification(new MobileBroadcaster());
mobileWarning.show();

const mobileConfirm = new ConfirmNotification(new MobileBroadcaster());
mobileConfirm.show();

const desktopMessage = new MessageNotification(new DesktopBroadcaster());
desktopMessage.show();

const desktopAlert = new AlertNotification(new DesktopBroadcaster());
desktopAlert.show();

const desktopWarning = new WarningNotification(new DesktopBroadcaster());
desktopWarning.show();

const desktopConfirm = new ConfirmNotification(new DesktopBroadcaster());
desktopConfirm.show();
