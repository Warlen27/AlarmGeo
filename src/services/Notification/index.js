import PushNotification from 'react-native-push-notification';

export default  {

    configure(){

        PushNotification.configure({
            onNotification: function(notification) {
                console.log("NOTIFICATION:", notification);
            },
    });

    return PushNotification;

}
}