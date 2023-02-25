import React, { MouseEventHandler, useEffect } from "react";

const NotificationPermission: React.FC = () => {
  useEffect(() => {
    // Create and show the notification

    const notification = new Notification("Welcome back!", {
      body: "Looks like you didn't visit us since: some date",
    });

    notification.onerror = (error: any) => {
      console.log("Error creating notification:", error);
    };
  }, []); // Empty array means the effect only runs on mount
  // Check if the browser supports the Notification API
  if (typeof Notification === "undefined") {
    return <p>This browser does not support the Notification API.</p>;
  }

  // Check if the user has already granted permission for notifications
  if (Notification.permission === "granted") {
    return <p>You have already granted permission for notifications.</p>;
  }

  // Ask for permission to send notifications
  const requestPermission: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    Notification.requestPermission()
      .then((permission) => {
        if (permission === "granted") {
          // Permission granted, create and show a notification
          const notification = new Notification("Hello world!");
          //console.log(notification);
          //notification.show();
        }
      })
      .catch((error) => {
        console.error("Error requesting permission for notifications:", error);
      });
  };

  return (
    <button onClick={requestPermission}>
      Request permission to send notifications
    </button>
  );
};

export default NotificationPermission;
