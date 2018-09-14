
        var messageUtility = function () {
            var message = 'This is the message!';
            function printMessage() {
                console.log(message);
            }
            function updateMessage(newMessage) {
                message = newMessage;
            }
            //returns object representing module
            //Revealing Module Pattern
            return {
                showMessage: printMessage,
                updateMessage: updateMessage
            }
        }(); //← IIFE

     messageUtility.showMessage();
     messageUtility.updateMessage('Changed it up a bit');
     messageUtility.showMessage();

    